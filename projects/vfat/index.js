const sdk = require('@defillama/sdk')
const { getLogs } = require('../helper/cache/getLogs')
const abi = require('./gauge.json')

async function tvl(api) {
    const factory = '0x71D234A3e1dfC161cc1d081E6496e76627baAc31'
    const gaugeFactory = '0x35f35cA5B132CaDf2916BaB57639128eAC5bbcb5'
    const gaugeFactory2 = '0xD30677bd8dd15132F251Cb54CbDA552d2A05Fb08'
    const voter = '0x16613524e02ad97edfef371bc883f2f5d6c480a5'
    const fromBlock = 3200567

    // Retrieve the logs concurrently
    const [deployLogs, deployAeroLogs] = await Promise.all([
        getLogs({
            api,
            target: factory,
            topic: 'Deploy(address,address)',
            fromBlock,
            eventAbi: 'event Deploy(address indexed admin, address sickle)'
        }),
        getLogs({
            api,
            target: voter,
            topic: 'GaugeCreated(address,address,address,address,address,address,address,address)',
            fromBlock,
            eventAbi: `event GaugeCreated(
                address indexed poolFactory,
                address indexed votingRewardsFactory,
                address indexed gaugeFactory,
                address pool,
                address bribeVotingReward,
                address feeVotingReward,
                address gauge,
                address creator
            )`
        })
    ]);

    const sickles = deployLogs.map(log => log.args[1]);

    // Separate gauges by type
    const deployedAeroGauges = deployAeroLogs.reduce((acc, log) => {
        const gaugeFactoryAddress = log.args[2];
        const gaugeAddress = log.args[6];
        if (gaugeFactoryAddress === gaugeFactory) {
            acc.lp.push(gaugeAddress);
        } else if (gaugeFactoryAddress === gaugeFactory2) {
            acc.nft.push(gaugeAddress);
        }
        return acc;
    }, { lp: [], nft: [] });

    // Fetch reward rates concurrently
    const [rewardRatesLP, rewardRatesNFT] = await Promise.all([
        sdk.api.abi.multiCall({
            abi: abi.rewardRate,
            calls: deployedAeroGauges.lp.map(gauge => ({ target: gauge })),
            chain: 'base'
        }),
        sdk.api.abi.multiCall({
            abi: abi.rewardRate,
            calls: deployedAeroGauges.nft.map(gauge => ({ target: gauge })),
            chain: 'base'
        })
    ]);

    // Filter out gauges with a reward rate of '0'
    deployedAeroGauges.lp = deployedAeroGauges.lp.filter((_, idx) => rewardRatesLP.output[idx].output !== '0');
    deployedAeroGauges.nft = deployedAeroGauges.nft.filter((_, idx) => rewardRatesNFT.output[idx].output !== '0');

    // Helper function to fetch balanceOf data
    async function getGaugeBalances(gauges, sickles) {
        const balancePromises = sickles.map(sickle => 
            sdk.api.abi.multiCall({
                abi: 'erc20:balanceOf',
                calls: gauges.map(gauge => ({ target: gauge, params: sickle })),
                chain: 'base'
            })
        );
        const balanceResults = await Promise.all(balancePromises);
        return balanceResults.map((res, index) => ({
            sickle: sickles[index],
            balances: res.output
        }));
    }

    async function getGaugeBalancesNFT(gauges, sickles) {
        const balancePromises = sickles.map(sickle => 
            sdk.api.abi.multiCall({
                abi: 'function balanceOf(address account) view returns (uint256)',
                calls: gauges.map(gauge => ({ target: gauge, params: sickle })),
                chain: 'base'
            })
        );
        const balanceResults = await Promise.all(balancePromises);
        return balanceResults.map((res, index) => ({
            sickle: sickles[index],
            balances: res.output
        }));
    }


    // Fetch LP and NFT balances concurrently
    const /*[lpBalances, nftBalances]*/ [lpBalances] = await Promise.all([
        getGaugeBalances(deployedAeroGauges.lp, sickles),
       // getGaugeBalancesNFT(deployedAeroGauges.nft, sickles)
    ]);

    console.log('LP Gauges Balances:', lpBalances);
    //console.log('NFT Gauges Balances:', nftBalances);

    return 0;
}

module.exports = {
    base: {
        tvl,
    },
}

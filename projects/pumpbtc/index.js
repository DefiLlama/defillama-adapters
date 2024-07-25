const ADDRESSES = require('../helper/coreAssets.json')
const {sumTokens2} = require('../helper/unwrapLPs')


async function ethereum(api) {
    const WBTC_ADDRESS = ADDRESSES.ethereum.WBTC;
    const FBTC_ADDRESS = "0xC96dE26018A54D51c097160568752c4E3BD6C364";
    const PUMP_STAKING_WBTC_ADDRESS = "0x1fCca65fb6Ae3b2758b9b2B394CB227eAE404e1E";
    const PUMP_STAKING_FBTC_ADDRESS = "0x3d9bCcA8Bc7D438a4c5171435f41a0AF5d5E6083";
    return sumTokens2({
        api,
        owners: [PUMP_STAKING_WBTC_ADDRESS, PUMP_STAKING_FBTC_ADDRESS],
        tokens: [WBTC_ADDRESS, FBTC_ADDRESS]
    })
}

async function bsc(api) {
    const BTCB_ADDRESS = "0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c";
    const PUMP_STAKING_BTCB_ADDRESS = "0x2Ee808F769AB697C477E0aF8357315069b66bCBb";
    return sumTokens2({
        api,
        owners: [PUMP_STAKING_BTCB_ADDRESS],
        tokens: [BTCB_ADDRESS]
    })
}

async function mantle(api) {
    const FBTC_ADDRESS = "0xC96dE26018A54D51c097160568752c4E3BD6C364";
    const PUMP_STAKING_FBTC_ADDRESS = "0xd6Ab15B2458B6EC3E94cE210174d860FdBdd6b96";
    return sumTokens2({
        api,
        owners: [PUMP_STAKING_FBTC_ADDRESS],
        tokens: [FBTC_ADDRESS]
    })
}

module.exports = {
    timetravel: true,
    misrepresentedTokens: false,
    methodology: 'TVL for pumpBTC is calculated based on the total value of WBTC, FBTC, BTCB held in the contract that were utilized in the minting process of pumpBTC.',
    ethereum: {
        tvl: ethereum,
    },
    bsc: {
        tvl: bsc,
    },
    mantle: {
        tvl: mantle,
    }
};

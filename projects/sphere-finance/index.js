const { sumTokensExport } = require('../helper/unwrapLPs')

const SphereToken = "0x62f594339830b90ae4c084ae7d223ffafd9658a7"
const SphereLP = "0xf3312968c7D768C19107731100Ece7d4780b47B2" // SPHERE/MATIC LP

// addresses of gnosis safe contracts that hold the treasury funds, etc
const OptimismGnosisContract = "0x93B0a33911de79b897eb0439f223935aF5a60c24"
const ArbitrumGnosisContract = "0xA6efac6a6715CcCE780f8D9E7ea174C4d85dbE02"
const BinanceGnosisContract = "0x124E8498a25EB6407c616188632D40d80F8e50b0"
const PolygonGnosisContracts = ["0x20D61737f972EEcB0aF5f0a85ab358Cd083Dd56a", "0x1a2ce410a034424b784d4b228f167a061b94cff4", "0x826b8d2d523e7af40888754e3de64348c00b99f4"]



//Optimism TVL consists of investments/tokens on gnosis safe
async function optimismTvl(timestamp, block, chainBlocks) {
    return sumTokensExport({
        tokens: [0x4200000000000000000000000000000000000006, 0x4200000000000000000000000000000000000042, 0x73cb180bf0521828d8849bc8CF2B920918e23032, 0x7F5c764cBc14f9669B88837ca1490cCa17c31607],
        owners: [OptimismGnosisContract],
        chain: "optimism",
        block: chainBlocks.optimism
    })
}

//Arbitrum TVL consists of investments/tokens on gnosis safe
async function arbitrumTvl(timestamp, block, chainBlocks) {
    return sumTokensExport({
        tokens: [0x82aF49447D8a07e3bd95BD0d56f35241523fBab1, 0xfc5A1A6EB076a2C7aD06eD22C90d7E710E35ad0a, 0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8,0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9, 0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f],
        owners: [ArbitrumGnosisContract],
        chain: "arbitrum",
        block: chainBlocks.arbitrum
    })
}

//Binance TVL consists of investments/tokens on gnosis safe
async function binanceTvl(timestamp, block, chainBlocks) {
    return sumTokensExport({
        tokens: [0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56, 0xAD6742A35fB341A9Cc6ad674738Dd8da98b94Fb1, 0x14016E85a25aeb13065688cAFB43044C2ef86784, 0x52F24a5e03aee338Da5fd9Df68D2b6FAe1178827, 0xA60205802E1B5C6EC1CAFA3cAcd49dFeECe05AC9, 0x9f8BB16f49393eeA4331A39B69071759e54e16ea, 0xD7FbBf5CB43b4A902A8c994D94e821f3149441c7],
        owners: [BinanceGnosisContract],
        chain: "binance",
        block: chainBlocks.binance
    })
}


module.exports = {
    optimism: {
        tvl: optimismTvl
    },
    arbitrum: {
        tvl: arbitrumTvl
    },
    binance: {
        tvl: binanceTvl
    },
}
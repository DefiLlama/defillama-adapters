const sdk = require("@defillama/sdk");
const { staking } = require("../helper/staking");
const { pool2s } = require("../helper/pool2");
const _ = require("underscore");
const BigNumber = require("bignumber.js");

// SOLACE xsLocker address
const XSLOCKER = "0x501Ace47c5b0C2099C4464f681c3fa2ECD3146C1"

// Ethereum
const ETHEREUM_UWP_ADDRESS = "0x5efC0d9ee3223229Ce3b53e441016efC5BA83435"; // underwriting pool address
const SOLACE_USDC_POOL = "0x9C051F8A6648a51eF324D30C235da74D060153aC"; // sushi solace-usdc pool
const ETHEREUM_LP_TOKENS = {
  "SOLACE": "0x501acE9c35E60f03A2af4d484f49F9B1EFde9f40",
  "USDC": "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
}
const ETHEREUM_TOKENS = [
  {
    PoolToken: "0x501acE9c35E60f03A2af4d484f49F9B1EFde9f40",
    TokenTicker: "SOLACE",
  },
  {
    PoolToken: "0x853d955aCEf822Db058eb8505911ED77F175b99e",
    TokenTicker: "FRAX",
  },
  {
    PoolToken: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
    TokenTicker: "USDC",
  },
  {
    PoolToken: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
    TokenTicker: "USDT",
  },
  {
    PoolToken: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
    TokenTicker: "DAI",
  },
  {
    PoolToken: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    TokenTicker: "WETH",
  },
  {
    PoolToken: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
    TokenTicker: "WBTC",
  },
];

async function fetchBalances(contract, tokens, chain, block) {
  const balances = {};

  const { output: _tvlList } = await sdk.api.abi.multiCall({
    calls: tokens.map((token) => ({
      target: token.PoolToken,
      params: [contract],
    })),
    abi: "erc20:balanceOf",
    block: block,
    chain: chain,
  });

  _.each(_tvlList, async (element) => {
    let address = element.input.target;
    let balance = element.output;

    if (chain === "polygon" || chain === "aurora") {
      if (address === "0xDA2585430fEf327aD8ee44Af8F1f989a2A91A3d2") {
        // Frax token on aurora network is not working with adapter.
        // So, Frax balance is added to DAI.
        address = "0xe3520349F477A5F6EB06107066048508498A291b";
      }
      address = chain + ":" + address;
    }
    
    sdk.util.sumSingleBalance(balances, address, balance);
  });
  return balances;
}

async function ethereum(timestamp, block, chainBlocks) {
  let result = await fetchBalances(ETHEREUM_UWP_ADDRESS, ETHEREUM_TOKENS,  "ethereum", chainBlocks["ethereum"]);
  const lockerBalances = await fetchBalances(XSLOCKER, ETHEREUM_TOKENS,  "ethereum", chainBlocks["ethereum"]);
  result[ETHEREUM_LP_TOKENS.SOLACE] = BigNumber(result[ETHEREUM_LP_TOKENS.SOLACE] || 0).plus(lockerBalances[ETHEREUM_LP_TOKENS.SOLACE] || 0).toFixed();
  return result;
}

// Polygon
const POLYGON_UWP_ADDRESS = "0xd1108a800363C262774B990e9DF75a4287d5c075";
const SOLACE_FRAX_POOL = "0x85Efec4ee18a06CE1685abF93e434751C3cb9bA9"; // solace-frax uni pool
const POLYGON_LP_TOKENS = {
  "SOLACE": "polygon:0x501acE9c35E60f03A2af4d484f49F9B1EFde9f40",
  "FRAX": "polygon:0x45c32fA6DF82ead1e2EF74d17b76547EDdFaFF89"
}
const POLYGON_TOKENS = [
  {
    PoolToken: "0x501acE9c35E60f03A2af4d484f49F9B1EFde9f40",
    TokenTicker: "SOLACE",
  },
  {
    PoolToken: "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",
    TokenTicker: "WMATIC",
  },
  {
    PoolToken: "0x45c32fA6DF82ead1e2EF74d17b76547EDdFaFF89",
    TokenTicker: "FRAX",
  },
  {
    PoolToken: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
    TokenTicker: "USDC",
  },
  {
    PoolToken: "0xc2132D05D31c914a87C6611C10748AEb04B58e8F",
    TokenTicker: "USDT",
  },
  {
    PoolToken: "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063",
    TokenTicker: "DAI",
  },
  {
    PoolToken: "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619",
    TokenTicker: "WETH",
  },
  {
    PoolToken: "0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6",
    TokenTicker: "WBTC",
  },
];

async function polygon(timestamp, block, chainBlocks) {
  let result = await fetchBalances(POLYGON_UWP_ADDRESS, POLYGON_TOKENS,  "polygon", chainBlocks["polygon"]);
  const lockerBalances = await fetchBalances(XSLOCKER, POLYGON_TOKENS,  "polygon", chainBlocks["polygon"]);
  result[POLYGON_LP_TOKENS.SOLACE] = BigNumber(result[POLYGON_LP_TOKENS.SOLACE] || 0).plus(lockerBalances[POLYGON_LP_TOKENS.SOLACE] || 0).toFixed();
  return result;
}

// Aurora
const AURORA_UWP_ADDRESS = "0x4A6B0f90597e7429Ce8400fC0E2745Add343df78";
const SOLACE_WNEAR_POOL = "0xdDAdf88b007B95fEb42DDbd110034C9a8e9746F2"; // trisolaris solace-wnear
const AURORA_LP_TOKENS = {
  "SOLACE": "aurora:0x501acE9c35E60f03A2af4d484f49F9B1EFde9f40",
  "WNEAR": "aurora:0xC42C30aC6Cc15faC9bD938618BcaA1a1FaE8501d"
}
const AURORA_TOKENS = [
  {
    PoolToken: "0x501acE9c35E60f03A2af4d484f49F9B1EFde9f40",
    TokenTicker: "SOLACE",
  },
  {
    PoolToken: "0xC42C30aC6Cc15faC9bD938618BcaA1a1FaE8501d",
    TokenTicker: "WNEAR",
  },
  {
    PoolToken: "0x8BEc47865aDe3B172A928df8f990Bc7f2A3b9f79",
    TokenTicker: "AURORA",
  },
  {
    PoolToken: "0xDA2585430fEf327aD8ee44Af8F1f989a2A91A3d2",
    TokenTicker: "FRAX",
  },
  {
    PoolToken: "0xB12BFcA5A55806AaF64E99521918A4bf0fC40802",
    TokenTicker: "USDC",
  },
  {
    PoolToken: "0x4988a896b1227218e4A686fdE5EabdcAbd91571f",
    TokenTicker: "USDT",
  },
  {
    PoolToken: "0xe3520349F477A5F6EB06107066048508498A291b",
    TokenTicker: "DAI",
  },
  {
    PoolToken: "0xC9BdeEd33CD01541e1eeD10f90519d2C06Fe3feB",
    TokenTicker: "WETH",
  },
  {
    PoolToken: "0xf4eb217ba2454613b15dbdea6e5f22276410e89e",
    TokenTicker: "WBTC",
  },
];

async function aurora(timestamp, block, chainBlocks) {
  let result = await fetchBalances(AURORA_UWP_ADDRESS, AURORA_TOKENS,  "aurora", chainBlocks["aurora"]);
  const lockerBalances = await fetchBalances(XSLOCKER, AURORA_TOKENS,  "aurora", chainBlocks["aurora"]);
  result[AURORA_LP_TOKENS.SOLACE] = BigNumber(result[AURORA_LP_TOKENS.SOLACE] || 0).plus(lockerBalances[AURORA_LP_TOKENS.SOLACE] || 0).toFixed();
  return result;
}

async function polygonPool2(timestamp, block, chainBlocks) {
  const balances = {};

  const output = await sdk.api.abi.multiCall({
    calls: [
      {
        target: '0x45c32fA6DF82ead1e2EF74d17b76547EDdFaFF89',
        params: [ SOLACE_FRAX_POOL ]
      },
      {
        target: SOLACE,
        params: [ SOLACE_FRAX_POOL ]
      },
    ],
    abi: "erc20:balanceOf",
    block: chainBlocks.polygon,
    chain: "polygon",
  });

  sdk.util.sumMultiBalanceOf(balances, output);

  return balances;
}

module.exports = {
  timetravel: true,
  ethereum: {
    tvl: ethereum,
  },
  polygon: {
    tvl: polygon,
  },
  aurora: {
    tvl: aurora,
  },
};
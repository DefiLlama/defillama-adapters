const ADDRESSES = require("../helper/coreAssets.json");
const { getResource } = require("../helper/chain/aptos");

const Pools = [
  {
    poolAddress:
      "0x604440935157ff96d6e436220c708c410e1e1978bbefd6d714b70b1e5f1f11",
    longToken: ADDRESSES.aptos.APT,
    shortToken: ADDRESSES.aptos.USDt,
  },
  {
    poolAddress:
      "0x1166d5635ef8fd10e1aa2cb005c4a3fad91f3b452e35019d8ce90fa7634aeb",
    longToken: ADDRESSES.aptos.WBTC,
    shortToken: ADDRESSES.aptos.USDt,
  },
  {
    poolAddress:
      "0x6366d76a364e565877e22f22807323ce630e3512eedf96570ae44312e4116565",
    longToken: ADDRESSES.aptos.WETH,
    shortToken: ADDRESSES.aptos.USDt,
  },
];
const POOL_TRADING_ACCOUNT =
  "0x0c727553dd5019c4887581f0a89dca9c8ea400116d70e9da7164897812c6646e";

async function tvl(api) {
  const poolConfigs = await Promise.all([
    getResource(Pools[0].poolAddress, `${POOL_TRADING_ACCOUNT}::pool::Pool`),
    getResource(Pools[1].poolAddress, `${POOL_TRADING_ACCOUNT}::pool::Pool`),
    getResource(Pools[2].poolAddress, `${POOL_TRADING_ACCOUNT}::pool::Pool`),
  ]);
  const mergeArray = poolConfigs.map((p, i) => {
    return { ...p, ...Pools[i] };
  });
  const tvlShortToken = mergeArray.map(
    (p) =>
      Number(p.short_asset.pool_amount) + Number(p.short_asset.reserve_amount)
  );
  api.add(ADDRESSES.aptos.APT, Number(mergeArray[0].long_asset.pool_amount));
  api.add(
    ADDRESSES.aptos.WBTC,
    Number(mergeArray[1].long_asset.pool_amount) * 1e2
  );
  api.add(ADDRESSES.aptos.WETH, Number(mergeArray[2].long_asset.pool_amount));
  api.add(
    ADDRESSES.aptos.USDt,
    tvlShortToken.reduce((acc, curr) => acc + curr, 0)
  );
}

module.exports = {
  timetravel: false,
  aptos: { tvl },
};

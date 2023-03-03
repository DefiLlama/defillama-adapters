const {getUniTVL} = require('../helper/unknownTokens')


module.exports = {
  doublecounted: false,
  timetravel: true,
  start: 1667689200,
  arbitrum: {
    tvl: getUniTVL({
      factory: "0xD158bd9E8b6efd3ca76830B66715Aa2b7Bad2218",
      fetchBalances: true,
      useDefaultCoreAssets: true,
    }),
  },
  hallmarks: [[1668038400, "Emissions started"]],
};

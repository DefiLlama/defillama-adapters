const { getUniTVL } = require('../helper/unknownTokens');
const { sumTokens2 } = require('../helper/unwrapLPs');

// const lps = [
//   '0xCd13CD31fb61345Abe7B7376A4664784622817EE',
//   '0xF1294AA9CF51fB138CB30324D2A7CE5c53DD6876',
//   '0xD8219DeE0BEf8f8CE618572A572f87ea27Ac8285',
//   '0xB5E70F160077163A2D90F4828Ef2EfF7e5F57915',
//   '0xf2426f8b8cb0352fd03319300b6d4d6837915d45'
// ]

// async function pool2(api) {
// return sumTokens2({ api, lps, useDefaultCoreAssets: true })
// }

module.exports = {
  misrepresentedTokens: true,
  klaytn: {
    tvl: getUniTVL({ factory: '0x347E5ce6764DF9DF85487BEA523D3e242762aE88', useDefaultCoreAssets: true }),
    // pool2: pool2
  },
}

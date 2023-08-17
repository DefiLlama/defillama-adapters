const { nullAddress } = require('../helper/tokenMapping')
const { sumTokensExport } = require('../helper/chain/ergo')
const axios = require('axios')

async function borrowed(_, _b, _cb, { api, }) {
  const { data } = await axios.get('https://api.sigmaexplorer.org/sigmafi/loans/ongoing?limit=10000')
  data.forEach(({ repayment: { tokenId, amount}}) => {
    api.add(tokenId === 'erg' ? nullAddress : tokenId, amount)
  })
  return api.getBalances()
}

module.exports = {
  timetravel: false,
  ergo: {
    tvl: sumTokensExport({ owners: [
      '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',
    ] }),
    borrowed,
  },
}

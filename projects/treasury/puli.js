const { sumTokensExport, nullAddress, } = require('../helper/unknownTokens')
const POOL2S  = require("../helper/pool2")
const chain = 'bsc'
const TREASURY1 = '0xc569C21b0862B112Ed69bA9d2C6e9Ed86A036f9C'
const TREASURY2 = '0xA017862ADba59aA030b8aA0433eD91D9d909B8B1'

module.exports = {
  bsc: {
    tvl: sumTokensExport({
      chain,
      tokensAndOwners: [
        [nullAddress, TREASURY1],
        [nullAddress, TREASURY2],
        ['0xe9e7cea3dedca5984780bafc599bd69add087d56', TREASURY1],
        ['0xC17c30e98541188614dF99239cABD40280810cA3', TREASURY1],
        ['0x55d398326f99059fF775485246999027B3197955', TREASURY1],
        ['0xe9e7cea3dedca5984780bafc599bd69add087d56', TREASURY2],
        ['0xC17c30e98541188614dF99239cABD40280810cA3', TREASURY2],
        ['0x55d398326f99059fF775485246999027B3197955', TREASURY2],
        ['0x3FF5cbE338153063D8251d2B6a22A437EC09Eef3', POOL2S],
      ],
    })
  }
}

const { uniTvlExport } = require('../helper/calculateUniTvl.js')

module.exports = {
  fantom: {
    tvl: uniTvlExport("0x3fAaB499b519fdC5819e3D7ed0C26111904cbc28", "fantom"),
  },
}
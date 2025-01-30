
const { uniTvlExports, nullAddress, sumTokensExport } = require('../helper/unknownTokens')

const stakingPools = ["0x634579156A20C50d0c3525233b1C39AAF500F867", "0x43A1dc107BBb06dF266278056055AE7Fc5bd2817"]
const stakingTokens = ["0x0233971bd2DE29E81029336C46997055df3B5282", nullAddress]

module.exports = {
 ...uniTvlExports({
  ethereum: '0xBC7D212939FBe696e514226F3FAfA3697B96Bf59',
  bsc: '0x6D642253B6fD96d9D155279b57B8039675E49D8e'
}),
rbn: {
  ...uniTvlExports({
    rbn: "0x262E06314Af8f4EEd70dbd8C7EFe2a5De686C142"
  })["rbn"],
  staking: sumTokensExport({owners: stakingPools, tokens: stakingTokens})}
}

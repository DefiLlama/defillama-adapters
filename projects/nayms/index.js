const ADDRESSES = require("../helper/coreAssets.json");

const { sumTokensExport } = require("../helper/unwrapLPs");
const sdk = require("@defillama/sdk");

module.exports = {
  timetravel: false,
  methodology: "Sum assets on Nayms",
  start: 1681990619, // Thu Apr 20 13:36:59 2023 GMT
  ethereum: {
    tvl: sdk.util.sumChainTvls(
      ["0x39e2f550fef9ee15b459d16bD4B243b04b1f60e5"].map(addTvl)
    ),
  },
  hallmarks: [[1681990619, "Nayms V3 Launch"]],
};

function addTvl(owner) {
  const tokens = [
    ADDRESSES.ethereum.WETH,
    ADDRESSES.ethereum.DAI,
    ADDRESSES.ethereum.USDC,
    ADDRESSES.ethereum.TUSD,
    ADDRESSES.ethereum.USDT,
  ];

  return sumTokensExport({ owner, tokens });
}

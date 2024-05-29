const { sumERC4626VaultsExport } = require("../helper/erc4626")
const sdk = require("@defillama/sdk")
const { sumTokensExport } = require("../helper/unwrapLPs")
const ADDRESSES = require("../helper/coreAssets.json")

const blastVaultTvl = sumERC4626VaultsExport({
  vaults: [
    // on blast
    "0x56e0f6DF03883611C9762e78d4091E39aD9c420E",
    "0x3D4621fa5ff784dfB2fcDFd5B293224167F239db",
    "0xe97D34E531E1b299047A94Fc6854289830362d8f",
    "0xBa95FCe6c2683C29bD963dd201CA8ee8f3605801",
    "0x037A168876d3027b1384FD1752fEAa52407726dB",
    "0x3031F6c8958Cf093377c11b3871BD23AEA5e5865",
    "0x802B1f8e092AC4469B30C7560266F9a6f8CA450F",
  ],
  isOG4626: true,
})

const taikoVaultTvl = sumERC4626VaultsExport({
  vaults: [
    // on taiko
    "0xdA6a745740Bbdbe5F588b79FEe57f2e10ad4Da11",
  ],
  isOG4626: true,
})

const blastOtherTvl = sumTokensExport({
  tokens: [ADDRESSES.blast.USDB, ADDRESSES.blast.WETH, ADDRESSES.blast.ezETH],
  owners: [
    "0x9AdF2b330697C6816176491E1fd5503BB746d1d8",
    "0x0E5b7DDbF37d92B21512Ae5A6CE66aEfA7A7828F",
  ],
})

const taikoOtherTvl = sumTokensExport({
  tokens: [ADDRESSES.taiko.WETH],
  owners: [
    "0xc0ab776604059D10880dbD219758FF7B82997cc0",
    "0xB00231B308B01Dbb90f16F966F62d86fBc78c450",
  ],
})

module.exports = {
  blast: {
    tvl: sdk.util.sumChainTvls([blastVaultTvl, blastOtherTvl]),
  },
  taiko: {
    tvl: sdk.util.sumChainTvls([taikoVaultTvl, taikoOtherTvl]),
  },
}

const sdk = require("@defillama/sdk")
const { get } = require("../helper/http")

function hyperlaneTvl() {
  return async () => {
    const hyperlaneAddressDenom = "ibc/BF3B4F53F3694B66E13C23107C84B6485BD2B96296BB7EC680EA77BBA75B4801"

    const [{ balances: hyperlaneBalances }, { host_zone: hostZone }] = await Promise.all([
      await get(
        "https://stride-fleet.main.stridenet.co/api/cosmos/bank/v1beta1/balances/stride1h4rhlwcmdwnnd99agxm3gp7uqkr4vcjd73m4586hcuklh3vdtldqgqmjxc"
      ),
      await get(
        "https://stride-fleet.main.stridenet.co/api/Stride-Labs/stride/staketia/host_zone"
      )
    ])
  
    const hyperlaneBalance = hyperlaneBalances.find((balance) => balance.denom === hyperlaneAddressDenom)
  
    if (hyperlaneBalance == null) throw new Error("Something went wrong with getting the available hyperlane balance")
  
    // This defaults to 1e6 since the origin denom of `hyperlaneAddressDenom` is utia
    const coinDecimals = 1e6
  
    const amount = hyperlaneBalance.amount / coinDecimals
  
    const balances = {}
  
    sdk.util.sumSingleBalance(
      balances,
      "celestia",
      amount * hostZone.redemption_rate
    )
  
    return balances
  }
}

module.exports = {
  timetravel: false,
  methodology: "TVL of liquid staked tokens on Stride that are on Hyperlane",
  "stride-hyperlane": {
    tvl: hyperlaneTvl()
  }
} // node test.js projects/stride-hyperlane/index.js

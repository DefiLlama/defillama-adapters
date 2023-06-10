const { toUSDTBalances } = require("../helper/balances");
const { get } = require("../helper/http");

const API_URL = "https://app.coindrip.finance/api/tvl";

async function tvl() {
  const data = await get(API_URL);
  return toUSDTBalances(data);
}

module.exports = {
  misrepresentedTokens: true,
  timetravel: false,
  elrond: {
    tvl,
  },
};

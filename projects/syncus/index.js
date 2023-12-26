const { staking } = require('../helper/staking')

const stakingAddress = "0xc738CDb5140d6b7F688ba05a25c8a51568622D96";
const syncAddress = "0xa41d2f8Ee4F47D3B860A149765A7dF8c3287b7F0";
module.exports = {
  ethereum: {
    tvl: () => ({}),
    staking: staking(stakingAddress, syncAddress),
  }
};

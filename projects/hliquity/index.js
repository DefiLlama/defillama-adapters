const { staking } = require("../helper/staking.js");
const { getLiquityTvl } = require("../helper/liquity");

// TroveManager holds total system collateral (deposited in HBAR)
const TROVE_MANAGER_ADDRESS = "0x00000000000000000000000000000000005c9f66";
const STAKING_ADDRESS = "";
const HLQT_ADDRESS = "0x00000000000000000000000000000000005c9f70"

module.exports = {
  methodology: 'the amount of locked hbar in the HLiquity protocol',
  hedera: { tvl: getLiquityTvl('0x00000000000000000000000000000000005c9f66')}
};

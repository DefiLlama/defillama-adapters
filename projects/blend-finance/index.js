
const { aaveExports } = require('../helper/aave')
const methodologies = require('../helper/methodologies')

module.exports = {
	methodology: methodologies.lendingMarket,
	bevm: aaveExports('bevm', '0x26fb0b1eef8822f8F71a385d2839b6a654cA186a', undefined, ['0x3Eb2Dd6c395B8E6E3ab843858480aC60e9D0f3Bc'], {
		v3: true, abis: {
			getAllATokens: "function getAllBTokens() view returns (tuple(string symbol, address tokenAddress)[])",
		}
	}),
	occ: aaveExports('occ', '0x58cCCdafe3B0DE4cB94d35F9CcC0680E4199C06B', undefined, ['0xf444a0333DAa67efC5b1C2c0B79F435dd0f652a9'], {
		v3: true, abis: {
			getAllATokens: "function getAllBTokens() view returns (tuple(string symbol, address tokenAddress)[])",
		}
	}),
}
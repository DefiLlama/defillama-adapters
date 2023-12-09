const BigNumber = require("bignumber.js");
const { post } = require('../helper/http')

module.exports = {
    timetravel: false,
    methodology: "xbanking",
    ton: {
        tvl: async () => {
            const requestBody = {
                "address": "Ef-WMmizoLk4CvqTKs-mDrGJwW4fiH5zVd4SaHih7PObxP_0",
                "method": "get_pool_full_data",
                "stack": []
            }
            const response = await post('https://toncenter.com/api/v2/runGetMethod', requestBody)
            if (! response.ok)  {
                throw new Error("Unknown");
            }
            const result = response.result
            console.log(response.result);
            return {"coingecko:the-open-network":  BigNumber(tonTotalSupply).div(1e9).toFixed(0)};
        }
    }
}

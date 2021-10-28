const retry = require('async-retry')
const axios = require("axios");

async function getTvl(chainId, time) {
	const data = await retry(async bail =>await axios.post('https://api.neku.io/api/tvl', {chainId, time}))
	return data.data.data.tvl
}

async function fetch(time) {
  let movrtvl = await getTvl(1285, time)
  let arbitvl = await getTvl(42161, time)
  return movrtvl+arbitvl;
}

module.exports = {
  fetch
}
const { sumTokens } = require('../helper/chain/bitcoin')
const { get } = require('../helper/http')

const API_URL = 'https://mainnet.prod.lombard.finance/api/v1/addresses'
const BATCH_SIZE = 1000

async function getAllAddresses() {
  let allAddresses = []
  let offset = 0
  let hasMore = true
  let batchNumber = 1

  while (hasMore) {
    const response = await get(`${API_URL}?limit=${BATCH_SIZE}&offset=${offset}`)
    const data = response.addresses

    const newAddresses = data.map(a => a.btc_address)
    allAddresses = allAddresses.concat(newAddresses)
    
    console.log(`Batch ${batchNumber} completed: ${newAddresses.length} addresses`)
    
    hasMore = response.has_more
    offset += BATCH_SIZE
    batchNumber++
  }

  return allAddresses
}

async function tvl() {
  const addresses = await getAllAddresses()
  console.log("Summing tokens for addresses:", addresses)
  return sumTokens({ owners: addresses })
}

module.exports = {
  timetravel: false,
  bitcoin: {
    tvl
  }
}
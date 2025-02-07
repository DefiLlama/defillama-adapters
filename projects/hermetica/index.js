const { get, post } = require('../helper/http')
const { stacks } = require('../helper/coreAssets.json')

function parseClarityInt(hexString) {
  // Remove "0x" prefix
  let hex = hexString.startsWith("0x") ? hexString.slice(2) : hexString;

  // Skip the first two bytes (Clarity type and metadata)
  let numberHex = hex.slice(4); // Remove first 2 bytes (4 hex characters)

  // Convert hex to BigInt
  let bigIntValue = BigInt("0x" + numberHex);

  // Handle two’s complement for negative numbers
  if (bigIntValue > BigInt("0x7ffffffffffffffffffffffffffffffff")) {
      bigIntValue = bigIntValue - BigInt("0x100000000000000000000000000000000");
  }

  return bigIntValue.toString(); // Return as a readable decimal string
}

module.exports = {
  methodology: 'Counts the number of USDh tokens on Stacks and Bitcoin (Runes).',
  timetravel: false,
  bitcoin: {
    tvl: async () => {
      const totalSupply = await get('https://app.hermetica.fi/api/v1/usdh/supply');
      const usdhTokenContract = stacks.USDh.split('::')[0];
      const [contract_address, contract_name] = usdhTokenContract.split('.');
      const supplyResponse = await post(`https://api.mainnet.hiro.so/v2/contracts/call-read/${contract_address}/${contract_name}/get-total-supply`,
        {
          sender: contract_address,
          arguments: []
        }
      );
      const uUSDhSupplyStacks = Number(parseClarityInt(supplyResponse.result));

      const cleanUsdhSupply = totalSupply.replace(/[^\d.]/g, '');
      const totalUsdhSupply = Number(cleanUsdhSupply);
      const totaluUSDhSupply = totalUsdhSupply * (10 ** 8);

      const sUSDhSupplyRunes = totaluUSDhSupply - uUSDhSupplyStacks;

      return { usdh: sUSDhSupplyRunes / (10 ** 8) }
    }
  },
  stacks: {
    tvl: async () => {
      const usdhTokenContract = stacks.USDh.split('::')[0];
      const [contract_address, contract_name] = usdhTokenContract.split('.');
      const supplyResponse = await post(`https://api.mainnet.hiro.so/v2/contracts/call-read/${contract_address}/${contract_name}/get-total-supply`,
        { 
          sender: contract_address,
          arguments: []
        }
      );
      const supplyOnStacksuUsdh = Number(parseClarityInt(supplyResponse.result));

      return { usdh: supplyOnStacksuUsdh / (10 ** 8) }
    }
  }
}
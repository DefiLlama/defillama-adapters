const ADDRESSES = require('../helper/coreAssets.json')
async function tvl(api) {
  const balETH = await api.call({
    abi: "uint256:totalAssets",
    target: '0xea1a6307d9b18f8d1cbf1c3dd6aad8416c06a221',
  });
  api.add(ADDRESSES.ethereum.EETH, balETH);
  const balUSD = await api.call({
    abi: "uint256:totalSupply",
    target: '0x08c6f91e2b681faf5e17227f2a44c307b3c1364c',
  });
  api.add(ADDRESSES.ethereum.USDC, balUSD);
  const tvl_breakdown = await fetch('https://nw8dhr9lr1.execute-api.ap-southeast-1.amazonaws.com/prod/tvl')
  const liquidWeth = (await tvl_breakdown.json())['tvl']['liquid_weth']['tvl']['eth']

}

module.exports = {
  doublecounted: true,
  ethereum: {
    tvl,
  },
};

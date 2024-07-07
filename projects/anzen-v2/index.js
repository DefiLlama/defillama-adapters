const sdk = require('@defillama/sdk')

// Anzen USDz - digital dollar backed by Real World Assets

const USDz = '0xa469b7ee9ee773642b3e93e842e5d9b5baa10067';
const Base_USDz = '0x04d5ddf5f3a8939889f11e97f8c4bb48317f1938';
const Blast_USDz = '0x52056ed29fe015f4ba2e3b079d10c0b87f46e8c6';
const SPCT = '0xf30a29f1c540724fd8c5c4be1af604a6c6800d29'; // Secured collateral

const mainnet_tvl = async (api) => {
  const supply = await api.call({ abi: 'erc20:totalSupply', target: USDz })
  api.add(USDz, supply)
}

const base_tvl = async (api) => {
  const supply = await api.call({ abi: 'erc20:totalSupply', target: Base_USDz })
  api.add(Base_USDz, supply)
}

const blast_tvl = async (api) => {
  const supply = await api.call({ abi: 'erc20:totalSupply', target: Blast_USDz })
  api.add(Blast_USDz, supply)
}

const collateral_assets = async (api) => {
  const supply = await api.call({ abi: 'erc20:totalSupply', target: SPCT })
  api.add(SPCT, supply)
}

module.exports = {
  methodology: "Sums total USDz in circulation across all chains",
  ethereum: {
    tvl: mainnet_tvl,
  },
  base: {
    tvl: base_tvl,
  },
  blast: {
    tvl: blast_tvl,
  },
};

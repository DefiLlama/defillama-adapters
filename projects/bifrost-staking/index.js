const { getExports } = require('../helper/heroku-api')
const { nullAddress } = require('../helper/unwrapLPs')

module.exports = {
	timetravel: false,
	bifrost: {
		tvl: async () => {
			const { bifrost } = getExports("bifrost-staking", ['bifrost'])
			const tvl = await bifrost.tvl()
			return { 'bifrost-native-coin': tvl['bifrost-native-coin'], polkadot: tvl.polkadot, kusama: tvl.kusama }
		}
	},
	ethereum: {
		tvl: async (_, _1, _2, { api }) => {
			const vETH = await api.call({ target: '0x4bc3263eb5bb2ef7ad9ab6fb68be80e43b43801f', abi: 'uint256:totalSupply' })

			return {
				[nullAddress]: vETH,
			}
		}
	},
	filecoin: {
		tvl: async () => {
			const { bifrost } = getExports("bifrost-staking", ['bifrost'])
			const { filecoin } = await bifrost.tvl()
			return { filecoin }
		}
	},
	moonbeam: {
		tvl: async () => {
			const { bifrost } = getExports("bifrost-staking", ['bifrost'])
			const { moonbeam } = await bifrost.tvl()
			return { moonbeam }
		}
	},
	moonriver: {
		tvl: async () => {
			const { bifrost } = getExports("bifrost-staking", ['bifrost'])
			const { moonriver } = await bifrost.tvl()
			return { moonriver }
		}
	}
}

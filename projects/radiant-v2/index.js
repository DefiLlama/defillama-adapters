const { staking } = require("../helper/staking");
const { sumTokensExport } = require("../helper/unknownTokens");
const { aaveExports, methodology, } = require("../helper/aave");

const unwrapLpBase = async (api) => {
  const wethRdntLP = '0x8A76639FE8e390Ed16eA88f87BEB46d6A5328254';

  const [token0, token1, { liquidity, amount0, amount1 }, totalSupply] = await Promise.all([
    api.call({ target: wethRdntLP, abi: 'address:token0' }),
    api.call({ target: wethRdntLP, abi: 'address:token1' }),
    api.call({ target: wethRdntLP, abi: 'function getBasePosition() view returns (uint128 liquidity, uint256 amount0, uint256 amount1)' }),
    api.call({ target: wethRdntLP, abi: 'erc20:totalSupply' }),
  ]);

  api.add(token0, (amount0 * liquidity) / totalSupply);
  api.add(token1, (amount1 * liquidity) / totalSupply);
};


module.exports = {
  hallmarks: [
    [1704178500,"flash loan exploit"]
  ],
  methodology,
  arbitrum: {
    ...aaveExports('arbitrum', '0x9D36DCe6c66E3c206526f5D7B3308fFF16c1aa5E'),
    // balancer pool is not unwrapped properly, so we use staking and rely on price api instead
    pool2: staking("0x76ba3eC5f5adBf1C58c91e86502232317EeA72dE", "0x32df62dc3aed2cd6224193052ce665dc18165841"),
  },
  bsc: {
    ...aaveExports('bsc', '0x16Cd518fE9db541feA810b3091fBee6829a9B0Ce'),
    // balancer pool is not unwrapped properly, so we use staking and rely on price api instead
    pool2: sumTokensExport({ owner: '0x4fd9f7c5ca0829a656561486bada018505dfcb5e', tokens: ['0x346575fc7f07e6994d76199e41d13dc1575322e1'], useDefaultCoreAssets: true, })
  },
  ethereum: {
    ...aaveExports('ethereum', '0xe969066F2cCcE3145f62f669F151c6D566068BA2'),
    // balancer pool is not unwrapped properly, so we use staking and rely on price api instead
    pool2: staking("0x28e395a54a64284dba39652921cd99924f4e3797", "0xcF7b51ce5755513d4bE016b0e28D6EDEffa1d52a")
  },
  base: {
    ...aaveExports('base', '0x3eAF348Cf1fEC09C0f8d4f52AD3B8D894206b724'),
    staking: unwrapLpBase,
  },
};

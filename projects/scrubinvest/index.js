const ADDRESSES = require('../helper/coreAssets.json')
const { sumUnknownTokens } = require("../helper/unknownTokens");
async function tvl(_, _b, _cb, { api, }) {

  const calls = [
    { target: '0x075CA53543D304c02Ee692C0b691770AEB273dA4', params: '0x4402Cf5433D57266563979654d20887AcE672393' },
    { target: '0x69cEf0795FFFa66DfC4Ffc90E8Bd05c399388650', params: '0xa2355f35Ab85f1771FB1085a0e5b2599B8F47457' },
    { target: '0xe2C935041aEF672974A31d46c41A4F292982e621', params: '0x2c1C6aaB89272d07B7f78bFe93eefb6D2631Cf94' },
    { target: '0x46B9FCac1B698AE54b9c1D52A734338964e28AEE', params: '0x070110b0cAd64833b1a6a9E86337A4e4eE786607' },
    { target: '0xA250a3b6a5e5E8b398092537951F8Bd80639ed5c', params: '0xE04539bD52618B7d197Be54B3e4D80732082906E' },
    { target: '0xCa0d15B4BB6ad730fE40592f9E25A2E052842c92', params: '0xEa892552BD31A20F42ceb3476D6A280c405883d0' },
    { target: '0xa27a1f03479cfe4B0b97Fd8c772a84aD815C1946', params: '0xa1FA74fD861FFf2fc5f7a618A05beB12709fB419' },
    { target: '0x74AE6bB3138DB1969c52f39e2c311d997528633B', params: '0x2D1D648c2AEdf62037f2b80f9cC8c93258179380' },
    { target: '0x8EEA85dA61b397EaB933C001DAAD6fC1C5A4c67C', params: '0xcf4673F714183C42DADc1B42DAC21BE09cfc3684' },
    { target: '0xc28fcef5970fd23e5bfcdc31ce1ba72ef98cc70a', params: '0xef7541FCa94988fA423bC418a854f7967f83a3E0' },
    { target: '0x371d33963fb89ec9542a11ccf955b3a90391f99f', params: '0x43Ac7f627e41EBDa7515FEaCa425306AaB9cB602' },
    { target: '0x1E5573b2A7C1D08112d0Ff22e9F2D8EFc9583532', params: '0x9e890FBD4295D92c41fA12a2083b51C387699Fd8' },
    { target: '0x8fE243F8B47107c468537D74514d7c52Cd61E937', params: '0x56a9c9230d6D3b7bF147c10fdDBCD8F2eB1a2B6d' },
    //NEW LPs 14/07 - GAUGE / CONTRACT
    { target: '0x5383dEB37479599a33584f7Bbc346ab299e30FF0', params: '0x79eb3848B7B4630D1d883172f8e56B2e8fb18521' },
    { target: '0x776d2Ae19FC4c5982D5b20d8c14BCDae09755796', params: '0x1C415Ce79D0A18A4aA835D3d9083d2aF4d7894FC' },
    { target: '0x1f343A11b317EB54F08D80FD3cF9d706eDA5982c', params: '0xF35265f9713FD7ab6a27D387B2D02C1306FFB606' },
    
  ]
  const bals = await api.multiCall({    abi: 'erc20:balanceOf', calls  })
  const lps = await api.multiCall({  abi: 'address:stake', calls: calls.map(i => i.target)})
  api.addTokens(lps, bals)

  return sumUnknownTokens({
    api,
    tokensAndOwners: [

      // YieldOptimizers Hover
      ['0xcE86EBc669BBf07A64A0a55BB105Cc2B5B5d1961','0xfA8f4Fd6D961ECf25e3406a1e6a22A3671678a65'],
      ['0xb51eFaF2f7aFb8a2F5Be0b730281E414FB487636','0xC00804268b8Ce19D2276A81292a6E28277bf3591']
      
      // New Scrub Pool
      ['0x471F79616569343e8e84a66F342B7B433b958154', '0x67041094c4fc1492A1AB988Fb8De0ab4A0a4A080'],

    ],
    useDefaultCoreAssets: true,
    resolveLP: true,
    lps
  })
}

module.exports = {
  misrepresentedTokens: true,
  kava: {
    tvl,
  }
};

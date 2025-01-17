const { staking } = require('../helper/staking')

const config = {
  ethereum: {
    vaults: [
      // USDT
      '0x3a253838121b9ad9736fAFc030Cf4971615D68b2',
      '0xD9cFF1bc89f705EaB2579fA2DC86E9a6F971370a',
      '0x106825b71ccE77a70B69f57A0ACf9C4a6acf292a',
      '0x5494855B98858Ea4eF54D13E1d003197A387CE34',
      '0x9C5D3C3AbD633b8eA68C5a51325f8630DC620AD9',
      '0x2F1C60bA96ec6925fA9bBbFC9Eb7908bD35Bc224',
      // stETH
      '0x141B893e4ae446e634E92116000e54d7fc72Bc65',
      '0xC0f6d3B7B4073Df68DB5897C0884264D03A780C1',
      '0x5bbEB889339CE028dC57a1C9A721eAa085BE2368',
      '0x22D6201FF78854713CED5542658F16244335ae69',
      '0xBEB059D623ac9817fc2F0414F1dCc61416da4540',
      '0x4f8Abbc658338E4065acb154679931648195b793',
      '0x6014784FC074706ab810130f77135bfb24463f06',
      '0xD94A2BB8059E3bA3041592deeaF2B2eF4CcDec71',
      '0x1361fa1398c22D6644DcC1AA619F1B84F6DB4366',
      '0xB8610F07D25C3B0D7D589bDe8be1b07Ffae1A0A5',
      '0x36Ac0331D03e40ab67Af564bC453314Cb58E0629',
      '0x858Af7297a3D20f61E0F7A2487c686e0A3353f2C',
    ],
    aVaults: [
      '0x00aEca021D0f06c7dee54D58ee6Af47B5645aB19',
      '0x989897f1D976EE0b59Bf0A3172C170D8f3Cb84e3',
      '0x9377f17ABde96887943e5Fcc92Db034c76820529',
      '0x99c59D82b10c56950F6C031946656e6D0aD509ca',
      '0xF6c70b5F034070001E833C9EbC6a3A0176B683A6',
      '0x62104e40fA81a19f2B7E17C78C3ffBF4aCa4F212',
      '0x20A82619FCd300f3E0028db6353D38E3cC3B9E14',
      '0x1F519b172917Cfd6B7A69EF9d37E13Ac7dFF5E39',
      '0xF4A60252B139E29A415C341a0D21261496D27d02',
      '0x50752522d249230FE60C855098BB4a7a0974E746',
      '0x8Ea9638f2587b20396ec8c45dd639dEB115F5211',
      '0x8F9259a355933737F8F11f95d32460eCd5ED0706',
      '0x3AbC7053ec29e26c1429195fd971F280422ecA80',
      '0x071E0C2BE2b16c8B00173c6535eF8331b8e1feeD',
      // okx
      '0xe483d580664cd72B0A8cae0D65EFfA6587bd2263',
      '0x21f759Bcb31739032A00b37e3560a216AE52eFDC',
      '0x3191a0008415dEB5c5161C4B394Ec46C8C703f8c',
      '0xC9Aa266e2E50EC2474cD881566845480F8daE931',
    ],
    // scrvusd
    crvtokens: [
      '0x0655977FEb2f289A4aB78af67BAB0d17aAb84367',
      '0x0655977FEb2f289A4aB78af67BAB0d17aAb84367',
      '0x0655977FEb2f289A4aB78af67BAB0d17aAb84367',
      '0x0655977FEb2f289A4aB78af67BAB0d17aAb84367',
      '0x0655977FEb2f289A4aB78af67BAB0d17aAb84367',
      '0x0655977FEb2f289A4aB78af67BAB0d17aAb84367',
      '0x0655977FEb2f289A4aB78af67BAB0d17aAb84367',
      '0x0655977FEb2f289A4aB78af67BAB0d17aAb84367'
    ],
    crvUSDVaults: [
      '0xF5BF8aa4b571FF2Be9905289bfcEbC1D46408D9F',
      '0x9832e7E40d5a1495cA7bdbCd6A5C0A90D28F6cFA',
      '0x99595455Ba95b286F8e2614470b865e34f034Aa1',
      '0xf421B050647CF6eB757dE873F212e04a5e324487',
      "0x267adC3E106b72ce3b0F2BbDb6c638A12110CF8C",
      "0x31D22b4afEC06e67A37AF38A62a6ec9546c1bF8A",
      "0x5e5E689284a614127Af9deA546b8D943B8b80e5c",
      "0x4A1Bc9d8B2eD7BF9B9C1979037992Cff064E4F40",
    ],
  },
  arbitrum: {
    vaults: [
      // USDT
      '0x7ECd1b5255543F4C2D7D8E475afCd01699dBE2B0',
      '0xdFEb3460771148799b2D4344c369e2b2d6C26c42',
      '0x00aEca021D0f06c7dee54D58ee6Af47B5645aB19',
      '0x989897f1D976EE0b59Bf0A3172C170D8f3Cb84e3',
      '0x6E72C8726c71a4Cbc6e31ff7d47B399Fa983C7B8',
      '0x106825b71ccE77a70B69f57A0ACf9C4a6acf292a',
    ],
    aVaults: [
      // aArbUSDT
      '0x3a253838121b9ad9736fAFc030Cf4971615D68b2',
      '0xD9cFF1bc89f705EaB2579fA2DC86E9a6F971370a',
      '0x9C5D3C3AbD633b8eA68C5a51325f8630DC620AD9',
      '0x2F1C60bA96ec6925fA9bBbFC9Eb7908bD35Bc224',
      '0x72e0906558e4Ee528974cD7803bfF12d9f2869C3',
      '0x9377f17ABde96887943e5Fcc92Db034c76820529',
      '0xA5492Baf06692C0051D69D31458D536Bacc08651',
      '0x75809d59A9a69226972DbB84cB2D1851C5cD0CbF',
      '0x6f4DBcfC81Dd22AE3EDeC5f9724E43cba8C92E50',
      '0xA8fcc1BA1D4893a4894206986B65F652D5FE04AB',
      '0xA76Ee91c6E51D248782d7C81826dF91522a6EF96',
      '0x7E11ce3e893081B111b720dF29669dEf14e81cDE',
      '0x8E882A56604F2b5735EA979bD6fa06C064d2f3f9',
      '0xf7Be091BCBbB79f3D9029A25Dc94bC8FDd134EaC',
      // aArbUSDC
      '0x8F9259a355933737F8F11f95d32460eCd5ED0706',
      '0x3AbC7053ec29e26c1429195fd971F280422ecA80',
      '0xDdaA9d3A83E3Db4f9A3Cb593787Db8D3063e3cC1',
      '0xf82491Af99d6eEE7FB7a964bb8bF6eDc67a230f0',
      '0xf1485cDEC97a334996913bE68a0563Ebe0c72ffC',
      '0xBFD58c8150cF7048D5C149fA2bAdDD194b8416fe',
      '0xBEFB3aAD1dfb1660444f0D76A91261EF755B2B86',
      '0x1D2fAAd42cbF3Dc121659d856A9A405ED1067873',
      '0xfA49f859a012e8b1795A81B23b21Db0bD40e7770',
      '0x94Fe821E8Adde08aB97530D432Ff34A724FD7830',
      '0x4a5B4049a4aFae31278d36768704872f73dA67D1',
      '0x08c57aE48a89b6876A76dC618972Ef1602da7ED8',
      // automator
      '0x986Fa0383C39dBdA1B3A29Ac536fe5Df354Ed160',
      '0x770f7fcEce69C68B208B80bBc4e3d1Bf8f9c0672',
      '0x1e5A684d263F42BaC1f2bAd6fB379277D4D6c28C',
      '0xBF898C0C2E7d415dE8FCcc78d1200D029a060560',
    ],
    crvtokens: [
    ],
    crvUSDVaults: [
    ],
  },
  bsc: {
    vaults: [
    ],
    aVaults: [
      // aBnbUSDT
      '0x89c82D1B7616B0a465311FF077db6Bc21d43eA22',
      '0x842E97BaA96cFE1534F1A50Da112C7800134656A',
      '0x5DcEFCa5207c58dCbcf41eF017D1D0EB42d83701',
      '0x4573382A9d101EB6DFa1C4B448f939c41fF3e81d',
      '0x40144BC227f78A288FE9Ae6F4C7389C92C5aD9CF',
      '0x41Df07a5E58D551164fCAEaD4c1ee67B77a84776',
      '0xD0fb7977df47d7Fe946A21679DAbCe877f7A3a05',
      '0xab08fF5dd91636fE556f692825Cadd7bA04A4c97',
    ],
    crvtokens: [
    ],
    crvUSDVaults: [
    ],
  },
  polygon: {
    vaults: [
    ],
    aVaults: [
      // aBnbUSDT
      '0x4FD90c6B2a81d65a10E366dC5051D4D1A2A1c021',
      '0x89c82D1B7616B0a465311FF077db6Bc21d43eA22',
      '0x842E97BaA96cFE1534F1A50Da112C7800134656A',
      '0x46706780749bC41E7Ab99D13BC1B2a74Df40A7DA',
      '0x53b4b7312e543435f77f25648Fa9B269d0918bc5',
      '0x40144BC227f78A288FE9Ae6F4C7389C92C5aD9CF',
      '0x41Df07a5E58D551164fCAEaD4c1ee67B77a84776',
      '0xD0fb7977df47d7Fe946A21679DAbCe877f7A3a05',
    ],
    crvtokens: [
    ],
    crvUSDVaults: [
    ],
  }
}


Object.keys(config).forEach(chain => {
  const { vaults = [], aVaults = [], crvtokens = [], crvUSDVaults = [] } = config[chain]
  module.exports[chain] = {
    tvl: async (api) => {
      const tokens = await api.multiCall({ abi: 'address:collateral', calls: vaults })
      const tokens2 = await api.multiCall({ abi: 'address:collateral', calls: aVaults })
      const atokens = await api.multiCall({ abi: 'address:aToken', calls: aVaults })

      return api.sumTokens({ tokensAndOwners2: [[tokens, tokens2, atokens, crvtokens].flat(), [vaults, aVaults, aVaults, crvUSDVaults].flat()] })
    }
  }
})

module.exports.ethereum.staking = staking([
  '0xBEFB3aAD1dfb1660444f0D76A91261EF755B2B86',
  '0xBFD58c8150cF7048D5C149fA2bAdDD194b8416fe',
  '0xfA49f859a012e8b1795A81B23b21Db0bD40e7770',
  '0x94Fe821E8Adde08aB97530D432Ff34A724FD7830',
  '0x4a5B4049a4aFae31278d36768704872f73dA67D1',
  '0x08c57aE48a89b6876A76dC618972Ef1602da7ED8',
  '0x2B9aeA129B85F51A468274e7271434A83c3BB6b4', // StRCH
], '0x57b96d4af698605563a4653d882635da59bf11af')

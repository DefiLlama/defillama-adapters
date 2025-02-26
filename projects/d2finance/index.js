const { sumERC4626VaultsExport } = require("../helper/erc4626");

const config = {
  ethereum: ['0x07Dff4087b43c4A759f4Fc69511c26d51929dAF4'],
  base: ['0x6c05A7d2c24B48fC3C615D294fEc2eB068548897'],
  arbitrum: [
    "0x27D22Eb71f00495Eccc89Bb02c2B68E6988C6A42",
    "0x183424d5ae5ec9fd486634bc566d0f75ad9c9109",
    "0x5b49d7fae00de64779ddcd6b067c8eb046bd9a0b",
    "0x291344FBaaC4fE14632061E4c336Fe3B94c52320",
    "0x0F76De33a3679a6065D14780618b54584a3907D4",
    "0xD1D64dAeED7504Ef3Eb056aa2D973bD064843A84",
    "0xB0730AA7d6e880F901B5d71A971096dB56895a0f",
    "0x5f44A7DD0a016A5Ec9682df36899A781442CAa43",
    "0x0215EdEecdABE3DfC5EC8D59337eC9b26d359088",
    "0x36b1939ADf539a4AC94b57DBAd32FaEcd5bcF4d0",
    "0x34F0FdD80A51dfd8bA42343c20F89217280d760E",
    "0x57f467C9c4639B066F5A4D676Cd8Ed7D87C1791b",
    "0x7348925D3C63e4E61e9F5308eEec0f06EaA3bB7b",
    "0xCFBBea43Fd99126E4c0eF53e2344609D513f72b3",
    "0x195a9e0f29f96d4ab2139ee1272380a4aa352890",
    '0x75288264FDFEA8ce68e6D852696aB1cE2f3E5004',
    '0xaB2743a3A2e06d457368E901F5f927F271fa1374',
    '0x91aCd32dA9beA6DA3751dc12Ee0fBe47169349C1',
    '0xc027EC28F76d92D4124fCbffCF6b25137a84968C',
    '0xaC75f0c46723432a2303f2a7c7769535A179Ed56',
    '0x907A9f69061736AD82811CccD6ADD9dC4A2352A9',
    '0x1176c3760Af6a1dbAa5BBd0Cc6cdA8A2Ed6B785E',
    '0x0178b56FeA3d7B5B9F9e0cDAd486522de948730F'
  ],
  berachain: [
    '0xbE75c8A7E58C7901D2e128dc8d3b6DE2481F1F79',
    '0x2b8d0420996a2753ef21c25c94eae9fc0c0aed1e',
    '0x36b933554782b108bb9962ac00c498acbceb706d',
  ]
}

const stakings = {
  arbitrum: [
    "0x1c17a39B156189BF40905425170a3Ff62fb650DA",
    // '0x999a57ae7694298126a5db2E44F778CA486b14FC',
  ]
}

Object.keys(config).forEach(chain => {
  const vaults = config[chain]
  module.exports[chain] = {
    tvl: sumERC4626VaultsExport({ vaults, isOG4626: true, })
  }

  if (stakings[chain])
    module.exports[chain].staking = sumERC4626VaultsExport({ vaults: stakings[chain], isOG4626: true, })
})
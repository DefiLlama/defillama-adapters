// NFT pUSD vaults
const CRYPTO_PUNK_PUSD_VAULT = "0xD636a2fC1C18A54dB4442c3249D5e620cf8fE98F";
const ETHER_ROCKS_PUSD_VAULT = "0x6837a113aa7393ffbd5f7464e7313593cd2dd560";
const BAYC_PUSD_VAULT = "0x271c7603aaf2bd8f68e8ca60f4a4f22c4920259f";
const MAYC_PUSD_VAULT = "0x7b179f9bfbe50cfa401c1cdde3cb2c339c6635f3";
const DOODLES_PUSD_VAULT = "0x0a36f4bf39ed7d4718bd1b8dd759c19986ccd1a7";
const PUDGY_PENGUINS_PUSD_VAULT = "0xe793eaedc048b7441ed61b51acb5df107af996c2";
const AZUKI_PUSD_VAULT = "0x2acd96c8db23978a3dd32448a2477b132b4436e4";
const CLONEX_PUSD_VAULT = "0xc001f165f7d7542d22a1e82b4640512034a91c7d";
const AUTOGLYPH_PUSD_VAULT = "0xf42366f60ccc0f454b505fd72fb070e7f23b8171";
const FIDENZA_PUSD_VAULT = "0x64979eA0e4C7EB440402Fef273483ec8e74146d0";
const RINGERS_PUSD_VAULT = "0xa699e2f651861ec68e74fe01017ade75a12d5c1b";
const SQUIGGLES_PUSD_VAULT = "0x266d98307469f86f134ab884afefa98d3b4835b1";
const OTHERDEED_PUSD_VAULT = "0x09765190845c35fb81efd6952e19c995f6bd6a72";
const MEEBITS_PUSD_VAULT = "0xf7Fa42b692b8132311B02F9d72af69f9587c447E";
const BAKC_PUSD_VAULT = "0x3A90dB2E3392A26904da1aA632B4C26A824d296e";

// NFT pETH vaults
const CRYPTO_PUNK_PETH_VAULT = "0x4e5f305bfca77b17f804635a9ba669e187d51719";
const CRYPTO_PUNK_PETH_VAULT_B = "0x80711bacf6b3E64deDC4eBA2Ecf9b0Be6c0946f9";
const ETHER_ROCKS_PETH_VAULT = "0x7Bc8c4D106f084304d6c224F48AC02e6854C7AC5";
const BAYC_PETH_VAULT = "0xaf5e4c1bfac63e355cf093eea3d4aba138ea4089";
const BAYC_PETH_VAULT_B = "0xc7848C3E15D0b23a38571c39F98893a056e59A65";
const MAYC_PETH_VAULT = "0xc45775baa4a6040414f3e199767033257a2a91b9";
const MAYC_PETH_VAULT_B = "0xe45640363024f6668Aab1D5a0A7545441c2c28DD";
const DOODLES_PETH_VAULT = "0x229e09d943a94c162a662ba0ffbcad21521b477a";
const PUDGY_PENGUINS_PETH_VAULT = "0x4b94b38bec611a2c93188949f017806c22097e9f";
const AZUKI_PETH_VAULT = "0x72695c2af4193029e0669f2c01d84b619d8c25e7";
const AZUKI_PETH_VAULT_B = "0xaaf36574e4c5b4aC152D350f7687adB661aC3558";
const CLONEX_PETH_VAULT = "0x46db8fda0be00e8912bc28357d1e28e39bb404e2";
const AUTOGLYPH_PETH_VAULT = "0xCFd74e932B49eEf26f6527091821aDa8A9A4CbDa";
const FIDENZA_PETH_VAULT = "0x9C1DceD6C1668c4159cf71C41f54F0fb9C2Dc9Dc";
const RINGERS_PETH_VAULT = "0x9895a329e1f8F7728a2e60F45Ef017565DdCB535";
const SQUIGGLES_PETH_VAULT = "0x2a8d4e3bb2e09541bf5d79a1cf8b9dd2b3a1c6ab";
const OTHERDEED_PETH_VAULT = "0x525a3999b65a7d06dbe1de9b0b5faab1dc72e83c";
const MEEBITS_PETH_VAULT = "0xD5a4FF073fB6BA54B52CEC0747a69a2EBeD08D3F";
const BAKC_PETH_VAULT = "0xBF3624e8E72737d632C27eaF814668200F3B0e09";

const VAULTS_ADDRESSES = [
  // pUSD vaults
  CRYPTO_PUNK_PUSD_VAULT,
  BAYC_PUSD_VAULT,
  MAYC_PUSD_VAULT,
  DOODLES_PUSD_VAULT,
  PUDGY_PENGUINS_PUSD_VAULT,
  AZUKI_PUSD_VAULT,
  ETHER_ROCKS_PUSD_VAULT,
  CLONEX_PUSD_VAULT,
  AUTOGLYPH_PUSD_VAULT,
  FIDENZA_PUSD_VAULT,
  RINGERS_PUSD_VAULT,
  SQUIGGLES_PUSD_VAULT,
  OTHERDEED_PUSD_VAULT,
  MEEBITS_PUSD_VAULT,
  BAKC_PUSD_VAULT,
  // pETH vaults
  CRYPTO_PUNK_PETH_VAULT,
  CRYPTO_PUNK_PETH_VAULT_B,
  BAYC_PETH_VAULT,
  BAYC_PETH_VAULT_B,
  MAYC_PETH_VAULT,
  MAYC_PETH_VAULT_B,
  DOODLES_PETH_VAULT,
  PUDGY_PENGUINS_PETH_VAULT,
  AZUKI_PETH_VAULT,
  AZUKI_PETH_VAULT_B,
  ETHER_ROCKS_PETH_VAULT,
  CLONEX_PETH_VAULT,
  AUTOGLYPH_PETH_VAULT,
  FIDENZA_PETH_VAULT,
  RINGERS_PETH_VAULT,
  SQUIGGLES_PETH_VAULT,
  OTHERDEED_PETH_VAULT,
  MEEBITS_PETH_VAULT,
  BAKC_PETH_VAULT,
];

const BAYC_VAULTS = [BAYC_PUSD_VAULT, BAYC_PETH_VAULT, BAYC_PETH_VAULT];
const MAYC_VAULTS = [MAYC_PUSD_VAULT, MAYC_PETH_VAULT, MAYC_PETH_VAULT_B];
const BAYC_APE_STAKING_STRATEGY = "0x6b2e47560CC810C2Dce3bf2C0Da4310eC0af8831";
const MAYC_APE_STAKING_STRATEGY = "0x6b2e47560CC810C2Dce3bf2C0Da4310eC0af8831";
const BAKC_BAYC_STAKING_STRATEGY = "0xA0a4D16f2aD04dDFB627359601998a6Fd0f1f1e4";
const BAKC_MAYC_STAKING_STRATEGY = "0x30dff12b9416b232fa536d48959a02bc4d3c15ba";
const APE_STAKING = "0x5954aB967Bc958940b7EB73ee84797Dc8a2AFbb9";
const APE = "0x4d224452801aced8b2f0aebe155379bb5d594381";
const BAKC = "0xba30E5F9Bb24caa003E9f2f0497Ad287FDF95623";

const PETH_ETH_PAIR = "0x9848482da3Ee3076165ce6497eDA906E66bB85C5";
const PETH_ETH_VAULT = "0x56D1b6Ac326e152C9fAad749F1F4f9737a049d46";
const LP_STAKING = "0xb271d2c9e693dde033d97f8a3c9911781329e4ca";
const JPEG = "0xE80C0cd204D654CEbe8dd64A4857cAb6Be8345a3";
const JPEG_WETH_SLP = "0xdb06a76733528761eda47d356647297bc35a98bd";
const STAKING_CONTRACT = "0x3eed641562ac83526d7941e4326559e7b607556b";

const helperToNftMapping = {
  "0x810fdbc7e5cfe998127a1f2aa26f34e64e0364f4":
    "0xb7f7f6c52f2e2fdb1963eab30438024864c313f6",
  "0x2be665ee27096344b8f015b1952d3dfdb4db4691":
    "0xb7f7f6c52f2e2fdb1963eab30438024864c313f6",
  "0x3c5c66f30ce8a66bf6a1c81ca415b6c1c9eeb71e":
    "0xb7f7f6c52f2e2fdb1963eab30438024864c313f6",
  "0x1de562b03184521f9a699e9290a6d578cd32008d":
    "0xa3f5998047579334607c47a6a2889bf87a17fc02",
  "0x3d4d8cbd9c1087e9463143cb9762c41f18ac0f03":
    "0xa3f5998047579334607c47a6a2889bf87a17fc02",
};

const artBlockOwners = new Set(
  [
    "0x0d3ac0aba8efb92222bc050509a0c8d2fbfe6489",
    "0x126e6da0caefeaf104c6b9d022394a42567d9a38",
    "0x14774cf533e38a2c568287228c5ef9fd9bd6a0bf",
    "0x9E208146A28A653f6212d2931f316932015A312b",
  ].map((i) => i.toLowerCase())
);

module.exports = {
  VAULTS_ADDRESSES,
  BAYC_VAULTS,
  MAYC_VAULTS,
  BAYC_APE_STAKING_STRATEGY,
  MAYC_APE_STAKING_STRATEGY,
  BAKC_BAYC_STAKING_STRATEGY,
  BAKC_MAYC_STAKING_STRATEGY,
  APE_STAKING,
  APE,
  BAKC,
  JPEG,
  STAKING_CONTRACT,
  JPEG_WETH_SLP,
  PETH_ETH_PAIR,
  PETH_ETH_VAULT,
  LP_STAKING,
  PETH_ETH_F: '0x56D1b6Ac326e152C9fAad749F1F4f9737a049d46',
  PETH_POOL: '0x9848482da3ee3076165ce6497eda906e66bb85c5',
  PUSD_USD_F: '0xF6Cbf5e56a8575797069c7A7FBED218aDF17e3b2',
  USD_POOL: '0x8ee017541375f6bcd802ba119bddc94dad6911a1',
  helperToNftMapping,
  artBlockOwners,
};

const { cexExports } = require("../helper/cex");

const config = {
  bitcoin: {
    owners: ["1PM8huQVFSirUT7eAwNm3rBBYTsDRzCaf3", "1Jw4meLNYAaDcNxJwQdMTRVw74hGPcuV8W"],
  },
  bsc: {
    owners: ["0x1cA5aa5b1dd8D948bB0971A5fB1762FE172E0040"],
  },
  ethereum: {
    owners: [
      "0x1cA5aa5b1dd8D948bB0971A5fB1762FE172E0040",
      "0xe5e6c3ced4670697b7cB27a53649a3ED321c18ee",
      "0xdBdf80D997cFAaAC6150cD0cEC2C127fDaD7A823",
      "0x88C984990573d385949deB571ed21eaD63301045",
    ],
  },
  solana: {
    owners: [
      "94xmX5J92nZLanLvRstmxhgiS8kN8SVfFQ2zPKYB3Ynb",
      "E3Gd8Hd1yKdkHTQnbenNVBgV2p1MrrenQnVU4SkJD4zx",
    ],
  },
  optimism: {
    owners: ["0x1cA5aa5b1dd8D948bB0971A5fB1762FE172E0040"],
  },
  arbitrum: {
    owners: ["0x1cA5aa5b1dd8D948bB0971A5fB1762FE172E0040"],
  },
  tron: {
    owners: [
      "TDFHcjw2PiDLjoqxXedaSSEtA1osqu8J6c",
      "TE4uQTkFMcjm7UVYeQCgTHuec1pFP5J4Ds",
      "TDFHcjw2PiDLjoqxXedaSSEtA1osqu8J6c",
      "TRzpEdrAwHXPQYWvXHJArpcac2WV3gXMr3",
      "TVNRJgNsVMjDPethVVToz9aSvZq9SVgDXv",
    ],
  },
  polygon: {
    owners: ["0x1cA5aa5b1dd8D948bB0971A5fB1762FE172E0040"],
  },
  base: {
    owners: ["0x1cA5aa5b1dd8D948bB0971A5fB1762FE172E0040"],
  },
};

module.exports = cexExports(config);

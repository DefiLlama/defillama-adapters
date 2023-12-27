const ADDRESS = require("../helper/coreAssets.json");
const { sumTokensExport } = require("../helper/unwrapLPs");
const {
  sumTokensExport: sumBRC20TokensExport,
} = require("../helper/chain/brc20");

const owner = "0x103dd1184599c7511a3016E0a383E11F84AE7173";
const tokens = {
  ethereum: [ADDRESS.ethereum.USDT],
  bsc: ["0xc5f0f7b66764F6ec8C8Dff7BA683102295E16409"],
};

module.exports = {
  methodology: "Staking tokens via BitStable counts as TVL",
  bitcoin: {
    tvl: sumBRC20TokensExport({
      // Deposit Address
      owners: [
        "bc1p0uw83vg0h32v7kypyvjn9nextku2h7axjdeefy2ewstevnqffaksjzhrdf",
      ],
      blacklistedTokens: ['BSSB', 'DAII'],
    }),
    staking: sumBRC20TokensExport({
      // Farm Address
      owners: [
        "bc1pvngqf24g3hhr5s4ptv472prz576uye8qmagy880ydq5gzpd30pdqtua3rd",
      ],
      blacklistedTokens: ['DAII'],
    }),
  },
};

Object.keys(tokens).map((chain) => {
  module.exports[chain] = {
    tvl: sumTokensExport({ owner, tokens: tokens[chain] }),
  };
});

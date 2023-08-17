const { sumTokensExport } = require("./helper/chain/ergo");

module.exports = {
  timetravel: false,
  ergo: {
    tvl: sumTokensExport({
      owners: [
        "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",
      ],
      tokens: [
        "03faf2cb329f2e90d6d23b58d91bbb6c046aa143261cc21f52fbe2824bfcbf04",
        "003bd19d0187117f130b62e1bcab0939929ff5c7709f843c5c4dd158949285d0",
        "089990451bb430f05a85f4ef3bcb6ebf852b3d6ee68d86d78658b9ccef20074f",
      ],
    }),
  },
};

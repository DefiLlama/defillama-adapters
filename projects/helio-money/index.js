const ADDRESSES = require("../helper/coreAssets.json");
const { sumTokensExport } = require("../helper/unknownTokens");

module.exports = {
  methodology: "count the amount of ankr BNB in the vault",
  hallmarks: [
    [1669939200, "aBNBc exploit"],
    //[1670544000,"aBNBc to AnkrBNB swap & HAY buyback"]
  ],
  bsc: {
    tvl: sumTokensExport({
      tokensAndOwners: [
        // ceaBNBc

        //ankrBNB
        [
          "0x52F24a5e03aee338Da5fd9Df68D2b6FAe1178827",
          "0x25b21472c073095bebC681001Cbf165f849eEe5E",
        ],
        [ADDRESSES.null, "0x25b21472c073095bebC681001Cbf165f849eEe5E"],

        //stkBNB
        [
          "0xc2E9d07F66A89c44062459A47a0D2Dc038E4fb16",
          "0x98CB81d921B8F5020983A46e96595471Ad4E60Be",
        ],
        //snBNB
        [
          "0xB0b84D294e0C75A6abe60171b70edEb2EFd14A1B",
          "0x6F28FeC449dbd2056b76ac666350Af8773E03873",
        ],
        //BNBx
        [
          "0x1bdd3Cf7F79cfB8EdbB955f20ad99211551BA275",
          "0x6ae7073d801a74eE753F19323DF320C8F5Fe2DbC",
        ],

        // snBNB
        [
          "0xB0b84D294e0C75A6abe60171b70edEb2EFd14A1B",
          "0x91e49983598685DD5ACAc90CEb4061A772f6E5Ae",
        ],

        // wbeth
        [
          "0xa2E3356610840701BDf5611a53974510Ae27E2e1",
          "0xf45C3b619Ee86F653805E007fE211B7e930E0b3B",
        ],

        // cewBETH
        // [
        //   "0x6C813D1d114d0caBf3F82f9E910BC29fE7f96451",
        //   "0x5aEfa6309e8Da3eaBd32745aD5B2c9C1EBE54bef",
        // ],
      ],
    }),
  },
};

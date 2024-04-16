const REGISTRY_TOKENS = [
  "0x0000000000000000000000000000000000000000",
  "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
  "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
  "0xdAC17F958D2ee523a2206206994597C13D831ec7",
  "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
  "0x6B175474E89094C44Da98b954EedeAC495271d0F",
  "0x8E870D67F660D95d5be530380D0eC0bd388289E1",
  "0x83F20F44975D03b1b09e64809B757c47f942BEeA",
  "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490",
  "0xc4AD29ba4B3c580e6D59105FFf484999997675Ff",
  "0x853d955aCEf822Db058eb8505911ED77F175b99e",
  "0xFC2838a17D8e8B1D5456E0a351B0708a09211147",
  "0x3175Df0976dFA876431C2E9eE6Bc45b65d3473CC",
  "0x056Fd409E1d7A124BD7017459dFEa2F387b6d5Cd",
  "0xf43211935C781D5ca1a41d2041F397B8A7366C7A",
  "0xD533a949740bb3306d119CC777fa900bA034cd52",
  "0x99D8a9C45b2ecA8864373A26D1459e3Dff1e17F3",
  "0x5a6A4D54456819380173272A5E8E9B9904BdF41B",
  "0x57Ab1ec28D129707052df4dF418D58a2D46d5f51",
  "0xC25a3A3b969415c80451098fa907EC722572917F",
  "0xb2C35aC676F4A002669e195CF4dc50DDeDF6F0fA",
  "0x5e74C9036fb86BD7eCdcb084a0673EFc32eA31cb",
  "0x4e3FBD56CD56c3e72c1403e103b45Db9da5B9D2B",
  "0x971add32Ea87f10bD192671630be3BE8A11b8623",
  "0xEcd5e75AFb02eFa118AF914515D6521aaBd189F1",
  "0x0000000000085d4780B73119b644AE5ecd22b376",
  "0x68934F60758243eafAf4D2cFeD27BF8010bede3a",
  "0xAf5191B0De278C7286d6C7CC6ab6BB8A73bA2Cd6",
  "0xdf55670e27bE5cDE7228dD0A6849181891c9ebA1",
  "0x9D0464996170c6B9e75eED71c68B99dDEDf279e8",
  "0x3432B6A60D23Ca0dFCa7761B7ab56459D9C964D0",
  "0xFEEf77d3f69374f66429C91d732A244f074bdf74",
  "0xBC6DA0FE9aD5f3b0d58160288917AA56653660E9",
  "0xB30dA2376F63De30b42dC055C93fa474F31330A5",
  "0x828b154032950C8ff7CF8085D841723Db2696056",
  "0x2A8e1E676Ec238d8A992307B495b45B3fEAa5e86",
  "0x87650D7bbfC3A9F10587d7778206671719d9910D",
  "0x1cEB5cB57C4D4E2b2433641b95Dd330A33185A44",
  "0x4647B6D835f3B393C7A955df51EEfcf0db961606",
  "0x0100546F2cD4C9D97f798fFC9755E47865FF7Ee6",
  "0x5A98FcBEA516Cf06857215779Fd812CA3beF1B32",
  "0xb79565c01b7Ae53618d9B847b9443aAf4f9011e7",
  "0x856c4Efb76C1D1AE02e20CEB03A2A6a08b0b8dC3",
  "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
  "0x39AA39c021dfbaE8faC545936693aC917d5E7563",
  "0x845838DF265Dcd2c412A1Dc9e959c7d08537f8a2",
  "0x0316EB71485b0Ab14103307bf65a021042c6d380",
  "0xBEA0000029AD1c77D3d5D23Ba2D8893dB9d1Efab",
  "0x8e595470Ed749b85C6F7669de83EAe304C2ec68F",
  // "0x75b248f0c7de2a7b81fe7a619058705f0494a727",
  // "0x0768b5e5d7586d29a90fa2a4d652403e1b5d9538",
  // "0x9d5b21B817FbE2E2cF1945D9Bb9a487dF4C8187A",
  // "0xaA17a236F2bAd05cD28953b0872A840FBe10cF02",
  "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
  // "0xc6e431595002fB2a3CCBBe0f1A68C8dCb02Bf1F5",
  // "0xF1eF7AF1e4c344c27b1603BF4050Fd8391E8ECCd",
  "0x6B175474E89094C44Da98b954EedeAC495271d0F",
  // "0x4a7faDf4a8A682b5Adf7a0288DfB480fF9469b52",
  "0x514910771AF9Ca656af840dff83E8264EcF986CA",
  "0x88dF592F8eb5D7Bd38bFeF7dEb0fBc02cf3778a0",
  "0xa0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
  // "0x43353583416380Ae6f8feEB97FfeBC54355A2d06",
  // "0x321162Cd933E2Be498Cd2267a90534A804051b0a",
  // "0x6b4c7a5e7A96Ff030f0BcdE5Bb1eA15D7d08447e",
  // "0xDeBF20617708857ebe4F679508E7b7863a8A8EeE",
  // "0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763",
  // "0x88C2e1CFf928Ee523F9Bf86aF9356Bfb18fA5AbE",
  "0x2ba592F78dB6436527729929AAf6c908497cB200",
  "0xE41d2489571d322189246DaFA5ebDe1F4699F498",
  // "0xEDEec5691f23E4914cF0183A4196a5B4C059a971",
  "0x04Fa0d235C4abf4BcF4787aF4CF447DE572eF828",
  // "0x63F88A2298a5c4BdD784bC54341c3A385239e001",
  "0x8E870D67F660D95d5be530380D0eC0bd388289E1",
  // "0x1A7a8BD9106F2B8D977E08582dc4f52b33E28dE5",
  "0x5BC25f649fc4e26069dDF4cF4010F9f706c23831",
  "0x075b1bb99792c9E1041bA13afEf80C91a1e70fB3",
  // "0x1249c9827a0f8Ff7fFc1Fd85Bd6a9E61b3430D53",
  // "0x5545153CCFcA01fbd7Dd11C0b23ba694D9509A6F",
  "0x49849C98ae39Fff122806C06791Fa73784FB3675",
  "0xA0d69E286B938e21CBf7E51D71F6A4c8918f482F",
  "0xf939E0A03FB07F59A73314E73794Be0E57ac1b4E",
  "0x3835a58CA93Cdb5f912519ad366826aC9a752510",
  "0x892D701d94a43bDBCB5eA28891DaCA2Fa22A690b",
  "0x5Ca135cB8527d76e932f34B5145575F9d8cbE08E",
  "0x4704aB1fb693ce163F7c9D3A31b3FF4eaF797714",
  "0xD2967f45c4f384DEEa880F807Be904762a3DeA07",
  "0xEd279fDD11cA84bEef15AF5D39BB4d4bEE23F0cA",
  "0xF3A43307DcAFa93275993862Aae628fCB50dC768",
  "0xE57180685E3348589E9521aa53Af0BCD497E884d",
  "0x1539c2461d7432cc114b0903f1824079BfCA2C92",
  "0xd4D620B23E91031fa08045b6083878f42558d6b9",
  "0xe17D6212eAa54D98187026A770dee96f7C264feC",
  "0xD1BeaD7CadcCC6b6a715A6272c39F1EC54F6EC99",
  "0x047c41817954b51309a2bd6f60e47bC115C23f1F",
  "0x6853691Ca8Da03Da16194E468068bE5A80F103b0",
  "0xCc19786F91BB1F3F3Fd9A2eA9fD9a54F7743039E",
  "0x4dE81AD42E9651755716177fAe9911c54F5b055B",
  "0x06c1e90eeb34e7Fa6d78B8E58348Ae15C1a615E4",
  "0xe50e2fe90745A8510491F89113959a1EF01AD400",
  "0x8cB4f56e9bAa398b6F6a6Fb1B2C4E8ca8cda6ae5",
  "0xd5bAd7c89028B3F7094e40DcCe83D4e6b3Fd9AA4",
  "0x7f3F33B42b9734e61cb44424D130B5f6e09C9Db3",
  "0x15780E0e9618c26dA679740C43bEc76830Ff187b",
  "0xFc6a9D39b44a174B5Ba708dBaa437632d78B8585",
  "0x83BE6565c0758f746c09f95559B45Cfb9a0FFFc4",
  "0xfE5716D0C141F3d800995420e1d3fB0D0CFFCC31",
  "0x4115150523599D1F6C6Fa27F5A4C27D578Fd8ce5",
  "0x49b562bDcd28dB124f6bA51DEB8Ca483563c067a",
  "0xBE2bD093B8F342e060E79Fad6059B1057F016Ba4",
  "0x3fe43D4ba0a5BAcC800c7E7E782466a27ab108bf",
  // "0x0da5EF5F02B8156a9a191d080369E420243C4501",
  "0xAE0bFfc3110e69DA8993F11C1CBd9a6eA3d16daF",
  "0x42ED016F826165C2e5976fe5bC3df540C5aD0Af7",
  "0x1E19CF2D73a72Ef1332C882F20534B6519Be0276",
  "0x3FA8C89704e5d07565444009e5d9e624B40Be813",
  "0x32296969Ef14EB0c6d29669C550D4a0449130230",
  "0x7F86Bf177Dd4F3494b841a37e810A34dD56c829B",
  "0xe6b5CC1B4b47305c58392CE3D359B10282FC36Ea",
  "0x2863a328A0B7fC6040f11614FA0728587DB8e353",
  "0x642431623AE5d73C19fC931aAeA0d4677303880c",
  "0xa2847348b58CEd0cA58d23c7e9106A49f1427Df6",
  "0xeaCADc656c9394fb09af25AeBc0897fDfFe484A1",
  "0x380aAbE019ed2a9C2d632b51eDDD30fd804d0fAD",
  "0x94cc50e4521bd271c1a997a3a4dc815c2f920b41",
  "0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0",
  "0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0",
  "0xc794c6a95f30d0ebf7b3bbe85e8a0a95c9e411c1",
  "0x8272e1a3dbef607c04aa6e5bd3a1a134c8ac063b",
  "0xc794c6a95f30d0ebf7b3bbe85e8a0a95c9e411c1",
  "0x889edC2eDab5f40e902b864aD4d7AdE8E412F9B1",
  "0x04c154b66cb340f3ae24111cc767e0184ed00cc6",
  "0xf8fde8a259a3698902c88bdb1e13ff28cd7f6f09",
  "0x76237BCfDbe8e06FB774663add96216961df4ff3",
  "0x0dE54CFdfeD8005176f8b7A9D5438B45c4F1df1e",
  "0xb27D1729489d04473631f0AFAca3c3A7389ac9F8",
  "0x38D64ce1Bdf1A9f24E0Ec469C9cAde61236fB4a0",
  "0x9961BdBE8B7091E584c2bF9D0a160C583f564A8c",
  "0xe035e27a8ed6842b478933820f90093d205f7098",
  "0x60a91E2B7A1568f0848f3D43353C453730082E46",
  "0x4253ac4046fbfdafcfe125d067b6d89f6923843e",
  "0x67701d67b60a96473bfc4873e7a484035c8609b0",
  "0x6685fcfce05e7502bf9f0aa03b36025b09374726",
  "0xe3e637f8acc097244a065791142c29fbf5877d18",
  "0x1BB9b64927e0C5e207C9DB4093b3738Eef5D8447",
  "0xCd5fE23C85820F7B72D0926FC9b05b43E359b7ee",
  "0xA1290d69c65A6Fe4DF752f95823fae25cB99e5A7",
  "0xbf5495efe5db9ce00f80364c8b423567e58d2110",
  "0xD9A442856C234a39a81a089C06451EBAa4306a72",
];

module.exports = REGISTRY_TOKENS;

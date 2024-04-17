const ETHEREUM_REGISTRY_TOKENS = [
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
  "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
  "0x6B175474E89094C44Da98b954EedeAC495271d0F",
  "0x514910771AF9Ca656af840dff83E8264EcF986CA",
  "0x88dF592F8eb5D7Bd38bFeF7dEb0fBc02cf3778a0",
  "0xa0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
  "0x2ba592F78dB6436527729929AAf6c908497cB200",
  "0xE41d2489571d322189246DaFA5ebDe1F4699F498",
  "0x04Fa0d235C4abf4BcF4787aF4CF447DE572eF828",
  "0x8E870D67F660D95d5be530380D0eC0bd388289E1",
  "0x5BC25f649fc4e26069dDF4cF4010F9f706c23831",
  "0x075b1bb99792c9E1041bA13afEf80C91a1e70fB3",
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

const ARBITRUM_REGISTRY_TOKENS = [
  "0x0000000000000000000000000000000000000000",
  "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8",
  "0xaf88d065e77c8cc2239327c5edb3a432268e5831",
  "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
  "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
  "0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f",
  "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1",
  "0xFEa7a6a0B346362BF88A9e4A88416B77a57D6c2A",
  "0x7f90122BF0700F9E7e1F688fe926940E8839F353",
  "0x17FC002b466eEc40DaE837Fc4bE5c67993ddBd6F",
  "0x11cDb42B0EB46D95f990BeDD4695A6e3fA034978",
  "0x64343594Ab9b56e99087BfA6F2335Db24c2d1F17",
  "0x641441c631e2F909700d2f41FD87F0aA6A6b4EDb",
  "0xEB466342C4d449BC9f53A865D5Cb90586f405215",
  "0xC9B8a3FDECB9D5b218d02555a8Baf332E5B740d5",
  "0x5979D7b546E38E414F7E9822514be443A4800529",
  "0x8616E8EA83f048ab9A5eC513c9412Dd2993bcE3F",
  "0xDBf31dF14B66535aF65AaC99C32e9eA844e14501",
  "0x93FC1235119c554576D8AB23583371fc25B803ee",
  "0x755D6688AD74661Add2FB29212ef9153D40fcA46",
  "0x9E75f8298e458B76382870982788988A0799195b",
  "0xDa2307A45D298e855415675bF388e2bd64351D5b",
  "0xEc7c0205a6f426c2Cb1667d783B5B4fD2f875434",
  "0x8cbaAC87FDD9Bb6C3FdB5b3C870b2443D0284fa6",
  "0xfd421d60905d2f7cabd49e6a5703a3499367b8f4",
  "0xe20F93279fF3538b1ad70D11bA160755625e3400",
  "0x4a2f6ae7f3e5d715689530873ec35593dc28951b",
  "0xb67c014fa700e69681a673876eb8bafaa36bff71",
  "0xfc5a1a6eb076a2c7ad06ed22c90d7e710e35ad0a",
  "0x3c6ef5ed8ad5df0d5e3d05c6e607c60f987fb735",
  "0x9cb911cbb270cae0d132689ce11c2c52ab2dedbc",
  "0x9791d590788598535278552eecd4b211bfc790cb",
  "0xade4a71bb62bec25154cfc7e6ff49a513b491e81",
  "0x423a1323c871abc9d89eb06855bf5347048fc4a5",
  "0xbf6cbb1f40a542af50839cad01b0dc1747f11e18",
  "0x3fd4954a851ead144c2ff72b1f5a38ea5976bd54",
  "0x8bc65eed474d1a00555825c91feab6a8255c2107",
  "0x892785f33cdee22a30aef750f285e18c18040c3e",
  "0x36bf227d6bac96e2ab1ebb5492ecec69c691943f",
  "0x5402b5f40310bded796c7d0f3ff6683f5c0cffdf",
  "0x905dfcd5649217c42684f23958568e533c711aa3",
  "0xB7E50106A5bd3Cf21AF210A755F9C8740890A8c9",
  "0xc9f52540976385a84bf416903e1ca3983c539e34",
  "0x542f16da0efb162d20bf4358efa095b70a100f9e",
  "0x59745774ed5eff903e615f5a2282cae03484985a",
  "0xce3b19d820cb8b9ae370e423b0a329c4314335fe",
  "0x539bdE0d7Dbd336b79148AA742883198BBF60342",
  "0x99c409e5f62e4bd2ac142f17cafb6810b8f0baae",
  "0x912CE59144191C1204E64559FE8253a0e49E6548",
];

const OPTIMISM_REGISTRY_TOKENS = [
  "0x0000000000000000000000000000000000000000",
  "0x4200000000000000000000000000000000000006",
  "0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85",
  "0x7F5c764cBc14f9669B88837ca1490cCa17c31607",
  "0x94b008aa00579c1307b0ef2c499ad98a8ce58e58",
  "0x4200000000000000000000000000000000000006",
  "0x68f180fcce6836688e9084f035309e29bf0a2095",
  "0xda10009cbd5d07dd0cecc66161fc93d7c9000da1",
  "0x8c6f28f2F1A3C87F0f938b96d27520d9751ec8d9",
  "0x061b87122Ed14b9526A813209C8a59a633257bAb",
  "0x1F32b1c2345538c0c6f582fCB022739c4A194Ebb",
  "0xEfDE221f306152971D8e9f181bFe998447975810",
  "0x298B9B95708152ff6968aafd889c6586e9169f1D",
  "0x9F2fE3500B1a7E285FDc337acacE94c480e00130",
  "0x1337BedC9D22ecbe766dF105c9623922A27963EC",
  "0x0994206dfe8de6ec6920ff4d779b0d950605fb53",
  "0xE405de8F52ba7559f9df3C368500B6E6ae6Cee49",
  "0x7Bc5728BC2b59B45a58d9A576E2Ffc5f0505B35E",
  "0xB153FB3d196A8eB25522705560ac152eeEc57901",
  "0x810D1AaA4Cd8F21c23bB648F2dfb9DC232A01F09",
  "0x6c84a8f1c29108F47a79964b5Fe888D4f4D0dE40",
  "0x1Dc5c0f8668a9F54ED922171d578011850ca0341",
  "0x0892a178c363b4739e5Ac89E9155B9c30214C0c0",
  "0xD09B5a0650d68Aae6B1666eE5E770a383d29A97C",
  "0x56770b94279539416855fe29Ef14b26438B5e421",
  "0x95a05D06Decf8e1Eb93aE09B612FbD342F2F9E2E",
  "0x7Ca75bdEa9dEde97F8B13C6641B768650CB83782",
  "0x4Fd63966879300caFafBB35D157dC5229278Ed23",
  "0xd16232ad60188B68076a235c65d692090caba155",
  "0xE54e4020d1C3afDB312095D90054103E68fe34B0",
  "0x6dA98Bde0068d10DDD11b468b197eA97D96F96Bc",
  "0xbcFa4cfA97f74a6AbF80b9901569BBc8654F4315",
  "0x0b28C2e41058EDc7D66c516c617b664Ea86eeC5d",
  "0x3f42Dc59DC4dF5cD607163bC620168f7FF7aB970",
  "0xFF5318f81Dd791e92d51b8A54fA3538832D2890D",
  "0xBE418771bC91F75C4d2BcE1d5E2b7286F50992da",
  "0x2e17b8193566345a2Dd467183526dEdc42d2d5A8",
  "0x5C2048094bAaDe483D0b1DA85c3Da6200A88a849",
  "0xBD08972Cef7C9a5A046C9Ef13C9c3CE13739B8d6",
  "0xa1055762336F92b4B8d2eDC032A0Ce45ead6280a",
  "0xB720FBC32d60BB6dcc955Be86b98D8fD3c4bA645",
  "0x2B47C794c3789f499D8A54Ec12f949EeCCE8bA16",
  "0x6e57B9E54ea043a829584B22182ad22bF446926C",
  "0xe8B8bfF1E415258eb3d5FA8DeeE9C38406e609cd",
  "0x1f8b46abe1EAbF5A60CbBB5Fb2e4a6A46fA0b6e6",
  "0x8134A2fDC127549480865fB8E5A9E8A8a95a54c5",
  "0xE5F28Fc43Bb40CDF7202ebe406793815b6f07FbD",
  "0x4d7959d17B9710BE87e3657e69d946914221BB88",
  "0xB280D03909Cc18640621955Cb3bC30948DF2Fa9a",
  "0x22D63A26c730d49e5Eab461E4f5De1D8BdF89C92",
  "0x19715771E30c93915A5bbDda134d782b81A820076",
  "0x0df083de449F75691fc5A36477a6f3284C269108",
  "0x3DD9556a521d6e57bE480c94da102fedf0429aba",
  "0x4E60495550071693bc8bDfFC40033d278157EAC7",
  "0x6387765fFA609aB9A1dA1B16C455548Bfed7CbEA",
  "0xfA09479d72E2b3f8B6dF63399772237Ad6658D76",
  "0xc37a0a37664aeB3848f98C5dD5d7AE286A1E9Ebd",
  "0x47029bc8f5CBe3b464004E87eF9c9419a48018cd",
  "0xe8537b6FF1039CB9eD0B71713f697DDbaDBb717d",
  "0x79c912FEF520be002c2B6e57EC4324e260f38E50",
  "0xf3C45b45223Df6071a478851B9C17e0630fDf535",
  "0xC5c247580A4A6E4d3811c0DA6215057aaC480bAc",
  "0xf04458f7B21265b80FC340dE7Ee598e24485c5bB",
  "0x8F47041aDbeF5BF321c9F63A0660326614ab6B60",
  "0x77b6d0279c9cEF559Ef7c32c31d9a5d8Acb664FE",
  "0x8542DD4744edEa38b8a9306268b08F4D26d38581",
  "0xDB61f9B480f0a8B817811cFAA89A1c219c355224",
  "0x4BE2CBE40521279b8fc561e65Bb842bf73ec3a80",
  "0xd22363e3762cA7339569F3d33EADe20127D5F98C",
  "0xFd7FddFc0A729eCF45fB6B12fA3B71A575E1966F",
  "0x667002F9DC61ebcBA8Ee1Cbeb2ad04060388f223",
  "0xe63337211DdE2569C348D9B3A0acb5637CFa8aB3",
  "0xF753A50fc755c6622BBCAa0f59F0522f264F006e",
  "0x6d5BA400640226e24b50214d2bBb3D4Db8e6e15a",
  "0xd25711EdfBf747efCE181442Cc1D8F5F8fc8a0D3",
  "0x7B50775383d3D6f0215A8F290f2C9e2eEBBEceb2",
  "0xd95E98fc33670dC033424E7Aa0578D742D00f9C7",
  "0x1AD06Ca54de04DBe9e2817F4C13eCB406DCbeAf0",
  "0x296f55f8fb28e498b858d0bcda06d955b2cb3f97",
  "0x73cb180bf0521828d8849bc8CF2B920918e23032",
  "0x970D50d09F3a656b43E11B0D45241a84e3a6e011",
  "0x1DB2466d9F5e10D7090E7152B68d62703a2245F0",
  "0x3c8B650257cFb5f272f799F5e2b4e65093a11a05",
  "0x6806411765Af15Bddd26f8f544A34cC40cb9838B",
  "0x484c2D6e3cDd945a8B2DF735e079178C1036578c",
  "0x9485aca5bbBE1667AD97c7fE7C4531a624C8b1ED",
  "0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb",
  "0x217D47011b23BB961eB6D93cA9945B7501a5BB11",
  "0x79af5dd14e855823fa3e9ecacdf001d99647d043",
  "0x9560e827aF36c94D2Ac33a39bCE1Fe78631088Db",
  "0x4e720dd3ac5cfe1e1fbde4935f386bb1c66f4642",
];

const POLYGON_REGISTRY_TOKENS = [
  "0x0000000000000000000000000000000000000000",
  "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
  "0x3c499c542cef5e3811e1192ce70d8cc03d5c3359",
  "0xc2132D05D31c914a87C6611C10748AEb04B58e8F",
  "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619",
  "0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6",
  "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063",
  "0xE7a24EF0C5e95Ffb0f6684b813A78F2a3AD7D171",
  "0x87ff96aba480f1813aF5c780387d8De7cf7D8261",
  "0x2088C47Fc0c78356c622F79dBa4CbE1cCfA84A91",
  "0xdAb529f40E671A1D4bF91361c21bf9f0C9712ab7",
  "0xDBf31dF14B66535aAF65AaC99C32e9eA844e14501",
  "0x4e3Decbb3645551B8A19f0eA1678079FCB33fB4c",
  "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",
  "0x28424507fefb6f7f8E9D3860F56504E4e5f5f390",
  "0x20D3922b4a1A8560E1aC99FBA4faDe0c849e2142",
  "0x1d2a0E5EC8E5bBDCA5CB219e649B565d8e5c3360",
  "0x7D645CBbCAdE2A130bF1bf0528b8541d32D3f8Cf",
  "0x2e1AD108fF1D8C782fcBbB89AAd783aC49586756",
  "0x45c32fA6DF82ead1e2EF74d17b76547EDdFaFF89",
  "0xA691D34Abf93C0A77998e53B564bEcfaf46Dae27",
  "0xaA91CDD7abb47F821Cf07a2d38Cc8668DEAf1bdc",
  "0x8343091F2499FD4b6174A46D067A920a3b851FF9",
  "0x431D5dfF03120AFA4bDf332c61A6e1766eF37BDB",
  "0xAd326c253A84e9805559b73A08724e11E49ca651",
  "0xE2Aa7db6dA1dAE97C5f5C6914d285fBfCC32A128",
  "0x7BDF330f423Ea880FF95fC41A280fD5eCFD3D09f",
  "0xE111178A87A3BFf0c8d18DECBa5798827539Ae99",
  "0xa3Fa99A148fA48D14Ed51d610c367C61876997F1",
  "0x750e4C4984a9e0f12978eA6742Bc1c5D248f40ed",
  "0x60D55F02A771d515e077c9C2403a1ef324885CeC",
  "0xb5DFABd7fF7F83BAB83995E72A52B97ABb7bcf63",
  "0x361a5a4993493ce00f61c32d4ecca5512b82ce90",
  "0x2C2D8a078B33bf7782a16AcCE2C5BA6653a90D5f",
  "0x172370d5Cd63279eFa6d502DAB29171933a610AF",
  "0xdAD97F7713Ae9437fa9249920eC8507e5FbB23d3",
  "0x8096ac61db23291252574D49f036f0f9ed8ab390",
  "0x447646e84498552e62eCF097Cc305eaBFFF09308",
  "0xA73EdCf18421B56D9AF1cE08A34E102E23b2C4B6",
  "0x3A58a54C066FdC0f2D55FC9C89F0415C92eBf3C4",
  "0x600743B1d8A96438bD46836fD34977a00293f6Aa",
  "0xa138341185a9D0429B0021A11FB717B225e13e1F",
  "0xb0658482b405496C4EE9453cD0a463b134aEf9d0",
  "0xb61Ecec987a9529dbA13a8Dd10ea24446ccBB6ae",
  "0xe7CEA2F6d7b120174BF3A9Bc98efaF1fF72C997d",
  "0xBed1d474DdA97edcEB7b9af13be4cbf1Bb98A2D3",
  "0xfBA3b7Bb043415035220b1c44FB4756434639392",
  "0x7BD9757FbAc089d60DaFF1Fa6bfE3BC99b0F5735",
  "0xAdf577B69eEaC9Df325536cf1aF106372f2Da263",
  "0x81c86081d533f280A8DAaE17F672Fb84B6ed65e3",
  "0xbb1b19495b8fe7c402427479b9ac14886cbbaaee",
  "0x20759F567BB3EcDB55c817c9a1d13076aB215EdC",
  "0x8D9649e50A0d1da8E939f800fB926cdE8f18B47D",
  "0xa7de0D88D02B9589d3b02cE52174431275169b77",
  "0x40379a439D4F6795B6fc9aa5687dB461677A2dBa",
  "0x00e8c0E92eB3Ad88189E7125Ec8825eDc03Ab265",
  "0x04d521e2c414e6d898c6f2599fdd863edf49e247",
  "0xcdedc76bcc6351275acdef823190453ec43b4edf",
  "0x184a51465925ab8a0025e47a00cab6d3769b5487",
  "0x3f35705479d9d77c619b2aac9dd7a64e57151506",
  "0x98b6a5eedc9382e2c4f8a38f985f2e9ac0b0e84c",
  "0xb4d852b92148eaa16467295975167e640e1fe57a",
  "0x02203f2351E7aC6aB5051205172D3f772db7D814",
  "0xBD02973b441Aa83c8EecEA158b98B5984bb1036E",
  "0xd17cb0f162f133e339c0bbfc18c36c357e681d6b",
  "0xe058e1ffff9b13d3fcd4803fdb55d1cc2fe07ddc",
  "0x8711a1a52c34EDe8E61eF40496ab2618a8F6EA4B",
  "0xbe4e30b74b558e41f5837dc86562df44af57a013",
  "0xfa68fb4628dff1028cfec22b4162fccd0d45efb6",
  "0x2ee50c34392e7e7a1d17b0a42328a8d1ad6894e3",
  "0x1205f31718499dbf1fca446663b532ef87481fe1",
  "0xb95E1C22dd965FafE926b2A793e9D6757b6613F4",
  "0x29e38769f23701a2e4a8ef0492e19da4604be62c",
  "0x3f69055f203861abfd5d986dc81a2efa7c915b0c",
  "0x74c64d1976157e7aaeeed46ef04705f4424b27ec",
  "0x3cc20a6795c4b57d9817399f68e83e71c8626580",
  "0xe7806b5ba13d4b2ab3eab3061cb31d4a4f3390aa",
  "0x513cdee00251f39de280d9e5f771a6eafebcc88e",
  "0xa7565dfeb16010153d3368e002ec53cbfaf96e05",
  "0x2589469b7a72802ce02484f053cb6df869eb2689",
  "0xE193C653B6030a9BB443AE7c6Ef6e35d93348f98",
  "0xFbdd194376de19a88118e84E279b977f165d01b8",
];

const AVALANCHE_REGISTRY_TOKENS = [
  "0x0000000000000000000000000000000000000000",
  "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7",
  "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E",
  "0xA7D7079b0FEaD91F3e65f86E8915Cb59c1a4C664",
  "0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7",
  "0xc7198437980c041c805A1EDcbA50c1Ce5db95118",
  "0x49D5c2BdFfac6CE2BFdB6640F4F80f226bc10bAB",
  "0x152b9d0FdC40C096757F570A51E494bd4b943E50",
  "0x111111111111ed1D73f860F57b2798b683f2d325",
  "0x130966628846BFd36ff31a822705796e8cb8C18D",
  "0x40b393cecf8F7D7Fc79b83e8fA40e850511817f6",
  "0x28690ec942671aC8d9Bc442B667EC338eDE6dFd3",
  "0x5c49b268c9841AFF1Cc3B0a418ff5c3442eE3F3b",
  "0xb599c3590F42f8F995ECfa0f85D2980B76862fc1",
  "0xF14f4CE569cB3679E99d5059909E23B07bd2F387",
  "0xAEA2E71b631fA93683BCF256A8689dFa0e094fcD",
  "0x6a4aC4DE3bF6bCD2975E2cb15A46954D9bA43fDb",
  "0x943F3B750447AbDd61cdF68AE6c3912cd3bedA04",
  "0xd39016475200ab8957e9C772C949Ef54bDA69111",
  "0x1205f31718499dBf1fCa446663B532Ef87481fe1",
  "0xf4003F4efBE8691B60249E6afbD307aBE7758adb",
  "0x1dab6560494b04473a0be3e7d83cf3fdf3a51828",
  "0xae64d55a6f09e4263421737397d1fdfa71896a69",
  "0xFE15c2695F1F920da45C30AAE47d11dE51007AF9",
  "0x0e0100ab771e9288e0aa97e11557e6654c3a9665",
  "0x32833a12ed3fd5120429fb01564c98ce3c60fc1d",
  "0x29e38769f23701A2e4A8Ef0492e19dA4604Be62c",
  "0x454E67025631C065d3cFAD6d71E6892f74487a15",
  "0x6e84a6216ea6dacc71ee8e6b0a5b7322eebc0fdd",
  "0xd6070ae98b8069de6b494332d1a1a81b6179d960",
  "0x47536f17f4ff30e64a96a7555826b8f9e66ec468",
];

const BNB_REGISTRY_TOKENS = [
  "0x0000000000000000000000000000000000000000",
  "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
  "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d",
  "0x55d398326f99059fF775485246999027B3197955",
  "0x2170Ed0880ac9A755fd29B2688956BD959F933F8",
  "0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c",
  "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
  "0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3",
  "0x0827841963Cc8a0515b5baa59782b0a0870b5f88",
  "0x483653bcF3a10d9a1c334CE16a19471a614F4385",
];

const BASE_REGISTRY_TOKENS = [
  "0x0000000000000000000000000000000000000000",
  "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
  "0xd9aAEc86B65D86f6A7B5B1b0c42FFA531710b6CA",
  "0x4621b7A9c75199271F773Ebd9A499dbd165c3191",
  "0x8Ee73c484A26e0A5df2Ee2a4960B789967dd0415",
  "0x417Ac0e078398C154EdFadD9Ef675d30Be60Af93",
  "0xEB466342C4d449BC9f53A865D5Cb90586f405215",
  "0x4200000000000000000000000000000000000006",
  "0x236aa50979D5f3De3Bd1Eeb40E81137F22ab794b",
  "0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb",
  "0xd07379a755A8f11B57610154861D694b2A0f615a",
  "0xB6fe221Fe9EeF5aBa221c348bA20A1Bf5e73624c",
  "0x9EaF8C1E34F05a589EDa6BAfdF391Cf6Ad3CB239",
  "0xf6C5F01C7F3148891ad0e19DF78743D31E390D1f",
  "0x6e53131F68a034873b6bFA15502aF094Ef0c5854",
  "0x6DfE79cecE4f64c1a34F48cF5802492aB595257E",
  "0xf213F2D02837012dC0236cC105061e121bB03e37",
  "0x0B25c51637c43decd6CC1C1e3da4518D54ddb528",
  "0x44Ecc644449fC3a9858d2007CaA8CFAa4C561f91",
  "0x6B87B8663eE63191887F18225F79D9eEb2DE0d34",
  "0xb5E331615FdbA7DF49e05CdEACEb14Acdd5091c3",
  "0xA6385c73961dd9C58db2EF0c4EB98cE4B60651e8",
  "0x7A034374C89C463DD65D8C9BCfe63BcBCED41f4F",
  "0x61366A4e6b1DB1b85DD701f2f4BFa275EF271197",
  "0xA6F8A6bc3deA678d5bA786f2Ad2f5F93d1c87c18",
  "0x6cDcb1C4A4D1C3C6d054b27AC5B77e89eAFb971d",
  "0x323121CD6F6274c9aeB9f87e0664C8FDa5d343A5",
  "0xcDAC0d6c6C59727a65F871236188350531885C43",
  "0x27a8Afa3Bd49406e48a074350fB7b2020c43B2bD",
  "0x82a0c1a0d4EF0c0cA3cFDA3AD1AA78309Cc6139b",
  "0x5BfB340FA9305abB164Fb0248D0D82FC3D82C3bb",
];

module.exports = {
  ETHEREUM_REGISTRY_TOKENS,
  ARBITRUM_REGISTRY_TOKENS,
  OPTIMISM_REGISTRY_TOKENS,
  POLYGON_REGISTRY_TOKENS,
  AVALANCHE_REGISTRY_TOKENS,
  BNB_REGISTRY_TOKENS,
  BASE_REGISTRY_TOKENS,
};

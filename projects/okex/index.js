const ADDRESSES = require('../helper/coreAssets.json')
const { cexExports } = require('../helper/cex')

const config = {
  bitcoin: {
    owners: [
      '1LnoZawVFFQihU8d8ntxLMpYheZUfyeVAK',
      '1JQULE6yHr9UaitLr4wahTwJN7DaMX7W1Z',
      '1DcT5Wij5tfb3oVViF8mA8p4WrG98ahZPT',
      '1CY7fykRLWXeSbKB885Kr4KjQxmDdvW923',
      'bc1quhruqrghgcca950rvhtrg7cpd7u8k6svpzgzmrjy8xyukacl5lkq0r8l2d',
      '16rF2zwSJ9goQ9fZfYoti5LsUqqegb5RnA',
      '1FY6RL8Ju9b6CGsHTK68yYEcnzUasufyCe',
      '1MbNM3jwxMjRzeA9xyHbMyePN68MY4Jxb',
      '1Lj2mCPJYbbC2X6oYwV6sXnE8CZ4heK5UD',
      '178E8tYZ5WJ6PpADdpmmZd67Se7uPhJCLX',
      '1BsdDaJtgFZrLfzEXvh6cD4VhtHHSHhMea',
      '14kHu26yWkVD8qAnBfcFXHXxgquNoSpKum',
      '1AumBaQDRaCC3cKKQVRHeyvoSPWNdDzsKP',
      '1DnHx95d2t5URq2SYvVk6kxGryvTEbTnTs',
      '13rCGm4Z3PDeYwo5a7GTT4jFYnRFBZbKr1',
      '15Exz1BAVan4Eweagy1rcPJnfyc6KJ4GvL',
      '18QUDxjDZAqAJorr4jkSEWHUDGLBF9uRCc',
      '1M6E6vPaYsuCb34mDNS2aepu2aJyL6xBG4',
      '1CE8chGD6Nu8qjcDF2uR1wMKyoWb8Kyxwz',
      '1FTgXfXZRxMQcKSNeuFvWYVPsNgurTJ7BZ',
      '13jTtHxBPFwZkaCdm6BwJMMJkqvTpBZccw',
      '1FfgXrQUjX5nQ4zsiLBWjvFwW61jQHCqn',
      '1DVTB9YKi4KNjyEbAHPp17T8R1Pp17nSmA',
      '162z6mSSHzfTqb2Sn3NUk5r1Y2oGoCMCoM',
      '3KbDzhb8B5pUU7Wk1y26J8D4cxYLmxJsca',
      '3A8tCFwWyHQey1npTAWYTtrjLPKLXpSpLd',
      '33a278YeJBRvQuemSo6yeugafqdS4x98TM',
      'bc1qc3g2dx3fn9s27v92n555r2tzhkxhad2wc0wm0ahlgpmhsr325mpssz80s6',
      '3ABQAsnVgK8gDCBtWeEuoRvG3zdgABrDHQ',
      '3AWGaggM87Nnhit5DwYYfXyvzW1NYutCw2',
      '3QLVSDvh1r9u28PDWUDyg3nR7HqxrUZ4jA',
      '3QFtYbR22en2AizTb7JVFA9bL2rf1fbNJr',
      'bc1qrp6msfnqxrl2gp4phmq6mcz995xc6m8n6fn8nygjfg8p63ncy4gsp3xn0e',
      '31qq3eDdNyvyoDGrNYAAN5GU2BagDNANFf',
      '3BdEq8vnX1o1J4Zpwj6wkPh5FxrgxLAibr',
      '3AVMfb3vJi9CbQEGyoHmpgptgbJioyKykQ',
      '3MYUxfT4mx8imVz7R8bVs71NisrYnmjUbT',
      '3FS1EFCqZM7KEhsVoiNu7NC8658Kq4oCiY',
      '3BiWZUFxpjJN6W93Fz3aCcCPBTrpYWwyoS',
      '3NiufwUuJZnUHmgSopESaeLBJkALzJMcgk',
      '3JcWcMPtxGaCuhKeucTMe1V865t7UhrNnT',
      'bc1qh0w73elagqvhfkkulrah0s2epdp922d3e6r8w43uz0e8ujafcjeqcz8lwa',
      '3MWakirPr7MnizUAtWuDJmt919PZciSBvi',
      '3LEV2xDk8D7uy4PVEGFZUm9fcT6XvCvHen',
      '3FR7ZCHv26jaWWzv7EBPAXGgBpFuVFUnH3',
      '38X48VjATu2AHowPzHefNqVvKyheGzVv8k',
      '3AgGgHDcqd9sxYiagskZH3EPswwqza1TXd',
      '3CGKuMZrkQQd4zj8FsTmDhineKACFpQBZX',
      '32hhwGNtGTZ4J1LLz7p6o55Kxm7mzgREJ4',
      '3E9GBso3ipQb2fbT3PNbeqgj8RkgJcR4X5',
      '34MdsKf8zE6NeAy98TS1yxUTEoBkDT2ZwZ',
      '3J7F1pczapCk1sRef6Hmvh9NfU6QiV3w55',
      'bc1qdk55vq5vrzt44pn93t9e3rwecw2dy4pcwc5gwugdjm3sh9xuqu3qzcwt4h',
      '3PDMVx1YRhySaPEtCV2AT1aEq9DwgPU4uq',
      '33j5fuJc14aff3Z6vHZBxaHEKMdNmKbRxQ',
      'bc1qvg6drx4rdcv85pteka94eskh740wrtgulg3tp7gcmm43vgund4sss4vzyq',
      '3QUyiuBQF46KAMM7wdnDnu8GKVQYieRQ1N',
      '35D2tNKFmqiVrvXan6tdxgatZoCBimASmZ',
      '35Wvz1krBwzgQ7REXS7iJp3Qz7k3rmFNNF',
      '3LMYZ3jPoKW2jscuT8fj8Nh4d66W3uX8us',
      'bc1q37nz0uheu4997ufs84efw7jw248mk9v83sgpmvsr6nawhaadx5lq2hclpt',
      '3Mkfqxh6BuYCAiKxuvVWKn64N2xvReB3wM',
      '3ANAufFoSaVJefhAZ7h9qViqdfJKoCWvbC',
      'bc1qnw79hhts8r84gykqkctyhu3j4gckll9gqxktzqgx5a54m347zf7qxhcyn8',
      '3MYrRpUhNWxB8Ydk9gvMou5yZNtXNynxcT',
      '3LFcssbNQRmRCCEUSbpDA5yzhsFH5waDoe',
      '3NEwT3x6nrab6Wxddwb7jbWY8KYqJkewGA',
      '35uFYLvWLQuEo6GxSGHT8JigaoUyqmNJjE',
      '3DWvnsbAJJTLufQ4AhQY7LsVQrKoLjEHXQ',
      '3PdNS2nqeE6G7cTcVmGjAVjz6HaPcX2FGj',
      'bc1qwkkedj4nzep7dw05s335x6n23520eq955mpcwypftn5q4n9japmqejkxlp',
      '3Qae3YK3eKSoM57jpVYjvWkS7E2KnPFHSU',
      '34HVDP9RFA9MpopGQ4TutLLVMFhhJFM9AX',
      '39ZEaLMDxWi5EWx9cQ2W3ixDP8rWHhz8GY',
      '39XwkmkcMAakYG9E564F6RZcp1RSMhUw8X',
      '3QpVtFcEdVPTWqZbo8cSZwRgbHMbSEDoeP',
      '3PHu7Z1dtRYbeum2SNWFCA4Fmq8r3UeXdQ',
      '39AabFsw5ew4QcAC7zpeNkuk58FoZnJkvy',
      '3NXxvFdsXK8DPRuGKbhNsvtP5FoL1s6hzF',
      '3Jg623UZuqvvFLYbBsqqYiBCAyWUQUDG8k',
      '3DgW9QH2GoVVoqwJd3paooAScy2vusEJDu',
      'bc1q8nne4amt4wjdaa0yxuzyw949xjd7fh2w9whh4uvh6haf6c5n2kvswnxk0e',
      '38jFY6wBwBpFHtM4L88jF5o155SRVvr2wT',
      '3CtTopUBx6QZomCjQDvbW65RtgsWn8g9LS',
      '3KPPCAsWf6dxamkMBTeH2svaTVS7xgeL9q',
      '3HoEwvrqYRnrizFN7gTg5ouSbV3Tek9pab',
      '33yFzhVfaY9phULdN8kBfz2UfyUVZhFHNH',
      '3Akts59LQNb7GU3gtHQcxh2r9zDfyUE2FJ',
      '3EdYLLYiYpoLt9sEQ9KQQ3LbF56YRoiFPw',
      '3GGLdxjaqvaguzTX9z4UTYaCoeu6sUyvNi',
      '3M8Xbr9vobCoxMCWwxsS9doTP6HNQvx3op',
      '3LcquVjVeDpFn1oJBs6mu2H5cc3EVCcJ2i',
      '34Nr2xntQYxtnBARQmzswbuB1hNhnKvkoV',
      '373oyKosqPkcYEsF7ipbw13WwDmvoNGgpG',
      '34dhaAMB9sCBidT1LpjpbmZjkecsDpGhxH',
      '3NRgSpzcsGA5mkjKinjTgBzfBYc9CBGXwW',
      '3FMAKm9fEXfNXYtb6qBGaJvG3DRKtvPy5E',
      '365S7mJV4MVqBfutYw65KuURCiohnMhzWh',
      '3JJ4LULa6VtcVVxZC9tsNN9JM693mcrCeE',
      '3CB7RwASFyWfYNCSWrri8crPhfK6yynMQ9',
      '3HzYEwURshSeJZJn1ak5ioHKQV5rfZPXY8',
      'bc1qvusjx72vh3qkvw36jdqvl6sdye8ne8hfdaveejprj6xc24mpd8wsrf6w07',
      '36U5xAL6FzFetzebPNT1ZQnANEk1TurVJr',
      '3LkDsn4LZgYnMqZF2wAXCVs6kc72xpNLLz',
      '3Gmt31zvMb52fJRRvLV3Pr3XTeDvVjGHAr',
      '3DdCY3f5Ky92nSen5M2M2bzbBLUhMWafG6',
      'bc1qck2mvm6wp8xqxlk98eyl89kgwtmgw02cgqwsjstkg4uerqpqclxq6se9wu',
      '3BexyYLsJQuN96qDRsnrU9yACnUSxxjWXx',
      'bc1qt5t0qhww0w7uaczxn9du7yu2l2hgpnen06r42u98du3cs6tqvezqatj38e',
      '36PCQLrcXhNG3BZPeaND3zCW7cHgzDVYp3',
      '3KGGtqwaQahxaN4GovThCyNdg6THK17Lrv',
      '3FLnTqeKpK8CXiEA39b77pCT85sVWJXzN5',
      '3AL5dD3jvpDHu8Qn7yZxGdpztWxieKxF4R',
      '3G7e21FgygBmWDRMykauLANpuBK8iKqXpJ',
      '3Kg2JcNnBczmHSX3udTfrKdqDy1gkrVZak',
      '3QJBNEMY6TezfEBXGoc5PUKoLSCcWUd1Y5',
      '3QQ8Cotsxbs9qrAyqLKaPjofzvcy5qipCY',
      '34SG5K1QrntsigARCZJxNv8NwfSmQxPsDi',
      '37Pd5nJZyXwjoGSwKW3ivWfeaW8VSjCey4',
      '39J18vgfymGnJ2EYp6fb13rHNKBASbuMtf',
      '3JwZq9s3yBhi8FikgYu2RvhjyBAhnSiLgy',
      '3H4T7yRpphtyzpDUEiwBTtBa3fBMvHaKUZ',
      'bc1qrysu5ykl5pdlk7d9j0z5rwak5h9rus6cx2udc0s9tqhf5842nqgsdtgtly',
      '3JqwqaLxqnDqXuJuKKp41UFSiFR1CuqznP',
      '3JqzTCvFxye7nrVWGTBH2CNqZ7bbFppBww',
      '3KWKbaAsf5qmbyBHXnVH6YqBgP4ZcNkUsc',
      '3FbmQz3WvASHgCQUz3C2JmGdkd1gQFLdC2',
      '3FMrfjg6zD3CTXSHLAiRcn3RFyBR8MMFR9',
      '3KeFqqpbJawWvAudsi4q8Zx9Lewponyyht',
      '32G39DN4kb9Sd6hk8RKySDf1QVFmQeAwtU',
      '3BqZtfY5wZk7qHQaQJ4gBmqGLnakH8ybRy',
      '3K1WNLse7M28jbowGsZmNaMV9FsM9yW3fE',
      '351qZH3E9rwXg5ZDY3tgvsYhkm9CnYV25N',
      '321DUXbk9gEEKG72DU2TcADDyfZXkX3fHP',
      '3E5jAXsSi5x7oj6GQuM6WQPuVZaXeYd3sU',
      '3HEBzhigBkmhVf7kx1KFXif42AqQWr8KH6',
      '39smXTQdqD2W767ipLishHV4diSV4xNFxA',
      '3GQ4DGB2tfS6YrwfVg9MF7KBRCLWkugLWR',
      '3AEKc9AokfB1nBvsdS8LVFJysZSQBJRrny',
      '3G3Sis7s9Jjex2Pcaerh17HvSJ19qHNuMg',
      '33YfoFAdobotJkMPUqSh2ms9frvRRfRzpu',
      '3G38Zn3mvixfamrKJJtsubiEL5gCQAGnSo',
      '3KTFyMGHcjWjWE1UqZRM3T4WnHuQt95iRo',
      '3JQmpJYkZrVczaNDCyQoLe6JXV3vGFY8ce',
      '36EMwG1FHCrp2MLm474CnE9rTQDWFF1uTF',
      '392Bq5jWV8NWUTdV59VCqoYviY5KP9q9Ee',
      '3G1no1sZwQuNYd5H3m6seWw9oy4E4Yu1pP',
      '3K376tvxysV4XDtTTEUF47Xc8LHdjof6kR',
      '39ciFiDp9yj1vLSxHh6c13DiVFhcBab7NT',
      '3DUGtYyorAm9vhpo3KbMURMiR2CByP6BoM',
      '3DeCWk98Wp6bG9apmqCCqTfRc8uVdQ1vyw',
      'bc1qpkgxexfg8ah0j0ffk3ge3d4para29r8ugx02ch7daja3s8u4247qw2d2jq',
      '3BnCzXEqQi7VDMfCaGY9zbSySuy5uQUaRp',
      '3GkiKw8DBm3nSqjL1mZLJdp4yq6WEkkyoR',
      '3LTvYTkSk2jq4a6mPVMadJ9vzv1V6RMDGq',
      '34Fg3q75hcnjyCoL5FLPKaDM1bewFCPKsv',
      '357DauGAnsbGpMgAApUqTFHCgyE2kXA9SD',
      '3K1sq7TwuVEbvyADV2oNz6DYX2EhWSrVxC',
      '3LWHs1HvAF362RHUc6MKL4jUPWcTw382pj',
      '35oBhEfzDyCMz4KY6j49iu8xjtbHQ9GL7H',
      '3CZTmeG25AXcjYurJ59mcFR3BvS4onF61M',
      '3C766rkZjRvmvhGmyGeH2x33ciUrZHarvE',
      '3DXZB5fAv4ujHv3dfBPnU6qaDR4HDUEuwY',
      '3LnMEFH8kYMeZ8d524cj4RgXMVmniHaBSF',
      'bc1q2gp7s58gf75sg5g8v6ah8z90ghk8dqksa62u27gmz850cnaclshsfjvlr0',
      '3Ca537VX1HufiVRfKVogWcD85RV3iuFs53',
      '3BxyyKih6788xBQKk8aMg1cD3qP1x7Gqgr',
      '3LceSbWiDHYvy59BW2swjiEQZkqvaijcsz',
      '3MjPfBpz8oDcEJZphpBuiwRnvCAASFsgT1',
      '3DdvsQoGp4wtvCAbyNBEZjCoWoWQL6TssG',
      '32ZB86r6jT4DkAtnYYSHP99xtcai8LePLP',
      '36yNiwCxiEtubUpzBLGPeSBCbubCy9i3QW',
      '3GQUyZH3EPoaHFzjWr5peAKSQFNGxxmVw1',
      '37wL3HQgir55T4o2Lv4Ygrsgat5W7iPnnd',
      '38qt6S3zQKizRnafitwEdz4dTj1fx72dgY',
      '3EqD1B8pMgdRE9iPEgUXAzpcyxihW4tbgA',
      '3P7a4wgoTDKn8F2g2VB62pHiV22XzJGGbd',
      '3FyaksZvXsZxEShwdpNMK7awgDE4kBuKmN',
      '36CVsC2nLzvFejTuBXvCFnt3p5QsKaGzwh',
      '3BjsuL5pVVWBFSMtoB9cg2d2hsJzJFpo3B',
      '34w5Da4HJ54AWTZVo8JrujhV1v8iRZho3e',
      '3DuUe32HgxGg8RQ5sFk9drcKRVmwNCAHhV',
      '3MoQyLh75Niz1s573waSP8pc95sqQcdJXd',
      '3Bvj92ASRnTnqj9kdABSgXJgrBDy6XEgzq',
    ],//BTC DONE
  },
  ethereum: {
    owners: [
      '0x03ae1a796dfe0400439211133d065bda774b9d3e',
      '0x5041ed759dd4afc3a72b8192c143f72f4724081a',
      '0x6a4561ef7874a76b4bf0d3edca31dfcd51603414',
      '0xbf94f0ac752c739f623c463b5210a7fb2cbb420b',
      '0xf59869753f41db720127ceb8dbb8afaf89030de4',
      '0x65a0947ba5175359bb457d3b34491edf4cbf7997',
      '0x4d19c0a5357bc48be0017095d3c871d9afc3f21d',
      '0x5c52cc7c96bde8594e5b77d5b76d042cb5fae5f2',
      '0xe9172daf64b05b26eb18f07ac8d6d723acb48f99',
      '0xae0cbaba071d58efc278a815b2cb652286e192ff',
      '0xc5451b523d5fffe1351337a221688a62806ad91a',
      '0x6fb624b48d9299674022a23d92515e76ba880113',
      '0xcba38020cd7b6f51df6afaf507685add148f6ab6',
      '0x461249076b88189f8ac9418de28b365859e46bfd',
      '0x42436286a9c8d63aafc2eebbca193064d68068f2',
      '0x69a722f0b5da3af02b4a205d6f0c285f4ed8f396',
      '0xc708a1c712ba26dc618f972ad7a187f76c8596fd',
      '0xb47a0ac7798d8308467b2b96ac632ed43c9cb6d7',
      '0x12a8bdc0470ab29a229d828526641b7d1f170fcf',
      '0x2c8fbb630289363ac80705a1a61273f76fd5a161',
      '0x25236e080106b5387df201fbbd9a6b870917676d',
      '0x3d55ccb2a943d88d39dd2e62daf767c69fd0179f',
      '0x68841a1806ff291314946eebd0cda8b348e73d6d',
      '0xa7efae728d2936e78bda97dc267687568dd593f3',
      '0xeaed6576334b003d1c5c4797d9c7bb025a20c038',
      '0xb99cc7e10fe0acc68c50c7829f473d81e23249cc',
      '0x6cc5f688a315f3dc28a7781717a9a798a59fda7b',
      '0xd576392cb12b7749ba33f8d223f64e65ee32f03f',
      '0xdad24044e36587d975d7b5bceb6467fac21e0c81',
      '0x539c92186f7c6cc4cbf443f26ef84c595babbca1',
      '0x868dab0b8e21ec0a48b726a1ccf25826c78c6d7f',
      '0xbfbbfaccd1126a11b8f84c60b09859f80f3bd10f',
      '0xf7858da8a6617f7c6d0ff2bcafdb6d2eedf64840',
      '0x98ec059dc3adfbdd63429454aeb0c990fba4a128',
      '0xee1c6537e589a15a15f80961f5594c57bed936fb',
      '0xdc3ce895714844b4775b6d06f0dae513542cee10',
      '0x5f8215ee653cb7225c741c7aa8591468d1f158b8',
      '0x3c5883c650d600bd543a9b5c8d9a3a6f5d16b8f4',
      '0xc68c17e6eec0fde3605c595c9b98de5c1a4cc3e4',
      '0xc5a93444cc4da6efb9e6fc6e5d3cb55a53b52396',
      '0x7eb6c83ab7d8d9b8618c0ed973cbef71d1921ef2',
      '0x313eb1c5e1970eb5ceef6aebad66b07c7338d369',
      '0x9723b6d608d4841eb4ab131687a5d4764eb30138',
      '0x96fdc631f02207b72e5804428dee274cf2ac0bcd',
      '0x06d3a30cbb00660b85a30988d197b1c282c6dcb6',
      '0x276cdba3a39abf9cedba0f1948312c0681e6d5fd',
      '0x4a11078a99b118bbfee78a5c187d98d264360433',
      '0x9e3bb2cd5a89fcc4b826230b144c4917881bea85',
      '0xcb0963264231bb08b2f680ab3ed89a49c9641bb3',
      '0x4bcbaf34862e6480329477917cf5cd7b9537a98d',
      '0x4e2757e46103556f98d4d036d8efe18389b89f51',
      '0xcd5bd47d3d1d8412b241ce9015c5032142948c12',
      '0xbda23b750dd04f792ad365b5f2a6f1d8593796f2',
      '0xa27cef8af2b6575903b676e5644657fae96f491f',
      '0x68e2ea1622aa67fb3a01a66d132daed8a48d1662',
      '0x9b645675e8d64759e5c36e30dcb766d8cec3d34f',
      '0xe983845a04c681a295dd9ce1fa8c2c8505932da3',
      '0x3f482c72a2b3e777746f5755cc0ff1323ea2ad16',
      '0x47eb32dea1ab1436187939fa72d6d5ff884a87da',
      '0xd266529641eeffaa2b2a0bc99daa5b32ef241078',
      '0x6d8c32fcf2d95ff410ba492f6694f18cbee55ce1',
      '0x30c1dcde81e5dbf3121d0408abc7908980e83ae2',
      '0x0ff9491b236a36cc183823e39d7532194143fdb1',
      '0x0475dd0e4194422a8cac486dc69173f535d0baf4',
      '0xdb0ed345cb52c2f2457918afa3eb4b682e264ad0',
      '0xba96a3f3d5e9f13a5f93c37001f946d42eb2e165',
      '0xf7c63e75b90c60d7b343106a39658f8b3ca6e4d2',
      '0x17e91b98988937cb59dc163b0b11781f9785591a',
      '0xde01974fb4a98bafd7cbf8a06ecf6dcc94d7283f',
      '0x9e13bae2256f968d02fe0129a0f51788f4e2472f',
      '0x8734bca44102bf8a663e1ba112308504606e1b08',
      '0x5a150733cb59bbdd5c7398a8fe7da7f97c8a213a',
      '0xb4ec508adeb174610b4295e233a458b3475964f7',
      '0x6667a4b7eff4a0b86781fb3b187622cd3c257f09',
      '0x42cf18596ee08e877d532df1b7cf763059a7ea57',
      '0xa2684f75740cfff46c29bae79a4ecc43043c003d',
      '0x0799ddbf6f14db566ca4df4ff0575c4cc1e7749c',
      '0xbfef5c888bb7a0a6b14b4c3ccc4364ea81aa573f',
      '0xb640e1e5a5f726a054cd518c968dfdac8c421ee5',
      '0x793aa889e19a130ee4cb8b63c79aa3bdccc663cb',
      '0x68b5e9e083bfc28c33cfbf3f19d33e629015e907',
      '0x728d92a8023bfbe0d4f3fdd549ed3b4996a0eba9',
      '0x5b27e98516fd2bd5001d4dfe3f5a2263f702f634',
      '0xb072b7dc9521d97a3f12b04beb1e497f8875ec52',
      '0x16b5016803bcb4915701efc0a3b471bd4c168d93',
      '0x4106a4be14867c70e52c51b9805514ae2e16de64',
      '0x56fd42ecd77c88bdd959be54af10d1759b473dff',
      '0xba0a39d37151fa4f938bec51cdae4675105760f4',
      '0x52738a51882f35d6b25a3fd0c86089ddbd206821',
      '0xd9a3c9ba5aa4415a53b9190bcb00f14472790a70',
      '0x6b7ba57e1d43c2c975ba25139a04d193e64a11d0',
      '0x48480aad203e8b030f82754b3c75869c9895c6bf',
      '0xeb196a61f9a1e35bf5053b65aaa57c5541dcba86',
      '0xfcb21730ac0cd487d8701dfed1170e023b57cf7a',
      '0x88c94d8e7d4203b185b3beb0a7b15a6b4f36b2a2',
      '0x730df969955c0a2fa9e8f2484e9741a363afdbb3',
      '0x267b51c97632225da2b2e49aebe59eef1af32653',
      '0xdeb6ad2a7820839464da79bac953ae6189215443',
      '0x0938c63109801ee4243a487ab84dffa2bba4589e',
      '0x06959153b974d0d5fdfd87d561db6d8d4fa0bb0b',
      '0x48c4c83be7e3884ee5043a3abe5115eb020b5f4a',
      '0xcbc767b519394a9e4682cc9a15dcd18c46a6045b',
      '0x297611b7accb7f24032c27b3a496465624c7ef50',
      '0x6dc1a070425f437ac08bb108f7093b177d7af3a6',
      '0x52b311c52436789f3754bd199bf3886b8ccbab4c',
      '0xe6eea9812ccc5981ccf0ab333610c42c2d92d146',
      '0x8c3cb9665833fd9f79eb14cba16d82bbab6f22d8',
    ],//ETH DONE
  },
  tron:{
    owners: [
        "TCz47XgC9TjCeF4UzfB6qZbM9LTF9s1tG7",
        "TJbHp48Shg4tTD5x6fKkU7PodggL5mjcJP",
        "TM1zzNDZD2DPASbKcgdVoTYhfmYgtfwx9R",
        "TSaRZDiBPD8Rd5vrvX8a4zgunHczM9mj8S",
        "TWGZbjofbTLY3UCjCV4yiLkRg89zLqwRgi",
        "TEQJh9RtTryMZsWY2vFAWMiRbk6w64vt1w",
        "TLtEhFAkdE2mmcPWxuQGyjm2dikT5NrJgz",
        "TBREsCfBdPyD612xZnwvGPux7osbXvtzLh",
        "TXkCx2gaEWrtU3g88aYxrqHxeWYXX5UUtL",
        "TUAVzJ916T7z6oqpdCCaTv6ipC2mmBMJev",
        "TDq3zUoRN2z4UktF7yKaQqejfwa9qjnYdM"
    ]//TRON DONE
  },
  arbitrum:{
    owners:[
      "0x62383739d68dd0f844103db8dfb05a7eded5bbe6",
      "0xed55e0d547fd2fa53aa64f587b21a9caa9e2d90f",
      "0xb8351b61fa1eb007a9f80144c489d513e6a76b14",
      "0x88288100c2005c5ce9b06956bed357f3ccc95b9e",
      "0x42cf18596ee08e877d532df1b7cf763059a7ea57",
      "0x0938c63109801ee4243a487ab84dffa2bba4589e",
      "0xb8b0b53b387b061af2717d642961af405c79e85a",
      "0xbf94f0ac752c739f623c463b5210a7fb2cbb420b"
    ]//ARB DONE
  },
  avax:{
    owners:[
      "0x7e4aa755550152a522d9578621ea22edab204308",
      "0x62383739d68dd0f844103db8dfb05a7eded5bbe6"
    ]//AVAX DONE
  },
  polygon:{
    owners:[
      "0x06959153b974d0d5fdfd87d561db6d8d4fa0bb0b",
      "0xf81233a61c0d6d13c6fe504ddbba3e2630ea0c5c",
      "0x06959153b974d0d5fdfd87d561db6d8d4fa0bb0b",
      "0xbe787d53e09822cc42bfb4abe1fb4492cae3d19d",
      "0x41205307b6618f03be2d95747a07311456bdb143"
    ] //POLYGON DONE
  },
  optimism:{
    owners:[
      "0xebe80f029b1c02862b9e8a70a7e5317c06f62cae",
      "0xcba6a2397b322cf1389f6d1adc05f75f36b20116",
      "0x88956282d52eee0ae1bf8eaf98bc6eac2250b681",
      "0x7332cd352a84673f1413416ef2e321e17df59844",
      "0x2d2cc0eb095e43204e0c087e07dbf95909650939",
      "0x42cf18596ee08e877d532df1b7cf763059a7ea57",
      "0x5ff13e9a3eed7a2dbcb1dfa21dfb1c07f3419277"
    ] //OP DONE
  },
  era:{
    owners: [
        "0xebe80f029b1c02862b9e8a70a7e5317c06f62cae",
        "0x539c92186f7c6cc4cbf443f26ef84c595babbca1",
        "0xbfbbfaccd1126a11b8f84c60b09859f80f3bd10f",
        "0x461249076b88189f8ac9418de28b365859e46bfd",
        "0x4e7b110335511f662fdbb01bf958a7844118c0d4",
        "0x65a0947ba5175359bb457d3b34491edf4cbf7997",
        "0x868dab0b8e21ec0a48b726a1ccf25826c78c6d7f",
        "0xa7efae728d2936e78bda97dc267687568dd593f3",
        "0xc708a1c712ba26dc618f972ad7a187f76c8596fd",
        "0xf59869753f41db720127ceb8dbb8afaf89030de4",
        "0xf7858da8a6617f7c6d0ff2bcafdb6d2eedf64840",
    ]
  },
  solana:{
    owners: [
      'CeGyfZdtbjzC5FeVXCBdYE1v397yxxqYgmMcUwtouJUu',
      '6Attw9NcFspCAreufvQ3mW8aqXEk6MDceeoC8obw45cJ',
      'CE8joA143dBjsCFTeBxBs3kNGNU87WH6Q7GMMfxPzSr2',
      'FefAbVt2EgXMGxeJb6sB1k5pQJhiGPxw4mB1zeUohZLk',
      'BEaiMhcc4Kao7B4hoq6r9m8neUpfimUMwhzugKxtkZw6',
      '5VCwKtCXgCJ6kit5FybXjvriW3xELsFDhYrPSqtJNmcD',
      'APJmXrtC9TUAg5gcjbcsVUiVzeDv85xLZRLad1GiQTNE',
      '5kiqH41rz2wPoNH5FuDJ3x8dB3EEe3XGoSWy2485tAp9',
      '8dUc88Nss8uhqzzFvUQhepkwZaVrfzpoCfKjCXGkdzAG',
      '44DwSkZbY2PVo9wfFP21D7HG7xf5rw8QaF6xSLGSfm7P',
      '945SJTwsBSqwEEgtKMnhcLDnJowP6YpJUTEykMVK5k6q',
      '9un5wqE3q4oCjyrDkwsdD48KteCJitQX5978Vh7KKxHo',
      'FJS2rTjAQmFFRmVqtnkceGvLJrMwUPgCUfLjciuMYkSC',
      '7fGw3UURsxk1szQ4buxQyEkiF4P6z7vx7sN1MHEguTJg',
      'BhJrLQEyFyrcf1746pHATzAZQpC1uk3SJf2AHHK7LW3K',
      '5URmUviWsAtcciFXqgM7f1jmhvBULdQDT47dqDkrJUi',
      '6NnzUC7mrM7ZgKdcMq1jPAdqh9TMgdsaVR1DNq6kce3A',
      '7o9ukGhWvc71yYcjinKnrxMn2kFMyQD1iCG3romrzg7r',
      '7CtzEcGeYpMfR1aEi1Gbt8GRHDPH9uDB6GNTsBABqSmo',
      'GcFZHQVJ2icPGLrA9qPLq88b7eqBXSUcdL1utUtUfcSD',
      'BWZqi67kXsvf5crjd19Fb3gmf3DCipGE8eWWJT2YHDXQ',
      'CGZAHxBannZzYK3rzVdG1e3uNjMxrmaXDhLEZxQBbueq',
      'EBVigEhxvkWUwreG98kTh5FbZEjnXTXC5ANZtLz4YpHQ',
      'HnLezgQkNVWMp2AV6mcHM1Ljst32kfsoVnYUkvXuQpjg',
    ]
  },//SOL DONE
  ripple:{
    owners: [
      'r4G3oDV1FJu1TtTv5M2u1cGbMDHnZzZpdn',
      'rUzWJkXyEtT8ekSSxkBYPqCvHpngcy6Fks',
      'rag5wJXFyzEhHyfta2FWLRPHkP9SNe5iPk',
      'rnHhjhpjchURKdfH7a4mch8gWJ47eBTgrm',
      'rKyo92WeVbajD8bNR9pm5s4z6t2JrgcYP',
      'rhcr95EAN24JPLpgSEf3mJKCkVKQspSUhR',
    ]
  },//XRP DONE
  litecoin:{
    owners: [
      'LNz6qoXAu5XMvJVhNApjq7uz9wRnnN8jvk',
      'LPECByb5d3f1LuSoCqLX1fodnUYoYwjCMC',
      'Lcxdj5PnnMEhxpPJ5LKbRf4HP4soaZ5TDD',
      'LWCnL7CZpW3rvC7zeeMWPBZCBH4QPVnF1s',
      'LRPDqJ4MLoE8nGSqnH9GZYebnyUVjke9uK',
      'LesrR8ZiV5sRdVA3MBAc7qK9V7HDBpC3ou',
      'LagNsYWF6NfTeo9Zg26s61cxLG4Zcefycw',
      'LYPZ9r4W5zDHzsyH2bCuhNbFJcMNguZ6iN',
      'LYPo65ycrKHmh3feNWyfTW2GJefbs1zB9C',
      'ltc1qzvcgmntglcuv4smv3lzj6k8szcvsrmvk0phrr9wfq8w493r096ssm2fgsw',
      'LectSLekhkxEQBHofNFHa3pVHndnb4Z9fN',
      'MVEM6raMPCzMpBuogq9CDKyRaAhDMJ8YQK',
      'LX1H9qaPNp6ZeP5Qx1oWqkphmcQM4PPeH7',
      'LccrcG5qQnZyfBn2WSwyN7KuJnUXnTN7NW',
      'LbsP3WjJD3GMrVoMS9NbnhjPhX4k7AcrUY',
      'LKRP8rdFggMRKkYPvr4evciSWqgNKfj5Hf',
      'LNDjLV8UHjvh1QP1wuREz3vbE7ovV5x3pr',
      'MP1dDMMEgrBTLmsx482NR2HQ61rQZ85xwJ',
      'MPw9hcat2fyUNuidX51f1pmh2PXwg11g7x',
      'MKmCscoiaGDn6dfGtuBg6bH9Pr1A5nu7FF',
      'MDQkKgKEaaECDJ5k7VPTxJx2bYLjvNfhgQ',
      'MJQNNTeK9t55vukEUP6wQSCTXKHo47BmgE',
      'MQLBQczCgYsfjNwgFC2sPg83ujxfz4pdmN',
      'MR4PbY7SBt92b1Vr3b4kY8pZqee7YzgqbV',
      'MEmtM51WzUZ2L4AFhWxPQE9R5mScEF2XWx',
      'MNN2bPSdVn5jyEwpHfR3NYnrs7ZjncjNjk',
      'MR14teGawvyf7nvKWM9wc2PZvU8AZaD7Ed',
      'MTKahnNbmh5RNdu5T1eFrXFUmL4nq1MK8b',
      'MLtcgtn2bepDmN1SARLEM9ZiYvsHGGNcrb',
      'M7xE1c91NW6sTcJizdXHZjavQU3ugCaSHc',
      'MVbmLCzFEAMCrEsSBLYw6QPzwiuVEw8Raa',
      'MX75iUryuoewUjfaU6Jio3SkjxeW2R2Unz',
      'ltc1qguz6pay8hvv0qsd07wtptcfx5wjxa8tqququgurlvm2yfaj9txqsn8xsdv',
      'ltc1qzfcjzpcqr0kmedcenyhqaxlcsdfa8d2tul8e98w8g3r30cc28wxsk2ewaw',
      'MDSKJjS1dtcCckfsktvLK3Z9XbrrL82W8t',
      'MG96xwy6u76g8rgBr6vwY5FvLhe6X4i3ts',
      'MVpEAf93cAPUp9ixqDRgFhkrjMcvNY13dj',
      'MQdJv3Y6cmn8MeuvDu5VciT16c4V5Ri7iH',
      'MBGRVR6po6gbrkiYaoRz6NPbftr4wLvG75',
      'MRFFKFJigW4pmT4hLtwg42MJaQXZXConCX',
      'MSFMWBuyTmWDXfYRLyjasSiEoKkaRGyRCy',
      'MFLWZ94Hhzs9f2xaTx1zDS3sjqqxsKcvuK',
      'MQH7ZpEwwsTiBCDqtzarB4KJoAk3LUgtkc',
      'MVbVddfiVZ6YajEZqYHqxGYmmLm4yMchJ9',
      'M8rJRaPMXgDcUJCTB4vhZQitnqe3xtxgDk',
      'MSxufKuammcGnJTaEvWCypXotUdnbv7TKK',
      'MWUj8rC1UcGxi9XcWRmWSkCBicXf2e6Wuj',
      'MRD9UyU4WzzaRs9wZefMadWqzKoCWFxmj7',
      'M9yPiTqTkikzdRWMpwqhrFVKN4yVSxu8uu',
      'MM98sA4Rg8FDyxZ1coBvtGovh6i8AkXHKp',
      'MRTJvzoV3FLnsLCjYitWjbpJiyfTuK2JnZ',
      'MFHNWKDHJP5HKDSWCheyWAxrvyt721K5ev',
      'MNeFqZo7jV86ukG7Nf5sk7yqz3fSiSfK3M',
      'M97KqwFX7Z7HP7bWN1nwhKdWNfeJTVzdWH',
      'M7urfQU95Aib2TwSCTBprvXR8FBTXVLwae',
      'MH7Qru4KFC6tLSiSq7bTWUDyiXERwzdqKp',
      'MGLUZEgfyM87uKUHWAnB2se399TGZqbDnx',
      'MEe5pUSxXJcZZahvLfLC77VVKnTeoAtrmd',
      'MGRSgHVWnMvxzQ8ULxTiaHWvJhWcLPhQv1',
      'MWnVqWDN84U1tkDS8TkMyXEtQHrwRh4Ut3',
      'MGafMffeNhGozkABqUHyURQFbYqVhsjhZe',
      'MMYj754nyqB1JsmqE1ceXghXSVFmTKEXuS',
      'MLbaghBFZkvqYPwLDtnKw1mGAYbmsxo45h',
      'MSXtbMicQh4VKYCqTk1SXLxqH5HqvU7dvC',
      'MRRGqQGCs2sJttdWpCcnYpUkQrn13epetG',
      'MUji4pMnn9jdEHb1DsujTi65Fj4NzA6jQn',
      'MNKS9AYfnUstXBwkRTaUos6UoSGvLKnnwt',
      'MDTZowrzz3xxCZQnF8mAxjxhUY9aqNiyeH',
      'MGXKkfaL5Djaun31pru9dWcaVppj1VNY47',
      'MVP7V9W37o4KVkrk3hBfcpYTPr7d6bBZxq',
      'MMuQT9oNmRXsVApXwj85DoMy1B5WS62FFR',
      'MVpU3vCk26wwvVMHEBoGhkvrkCCAwSfLsD',
      'MSg6snnN1kNQBv8zZDnZS6LPtAcgPKAD2F',
      'M9YR5bkxSVaXGJtj1kUUtpZKEWcKkS1a3Q',
      'MTBKAsSvY9K9GJfgwwKQ8vY3WbXwyVVA9N',
      'MRuwsnHLjVcWktgVWYUUKvjEetTEgUfFQC',
      'MSCCo5DG9o2QN3T9zMaEurCyKT25v5Q5M5',
      'MRPebMGaTLvGsk7JrrkF2vs99jH5Nkcfm5',
      'MMi5X57vLxFtwZ7mLzmmtkwduQzgqXyCV4',
      'MK5jErYhVnk1FsUCMUb5qkJjnNicQJWu8K',
      'MNBaTApJTKwSWUBKgGMvWiMXK2FPKcnmWk',
      'MQHdZZgWhmomHRmhg7pRdsrBLNjMbaLwaU',
      'MScDvyyadDWVFFa2PZADxJ3mvoC7pkdSdH',
      'MTXKt1S4ZWZm4wmZjLUyDLxLJSTgBPrBF1',
      'MGDWrDaowmFZXaB2BkDf544Y7xvgNbA2n1',
      'MVx47taWrfuz4SjmP1NxENKsV9HFVBWYxf',
      'MRrzg8LyuNxxKPBSYcZCYXDtx2JWsXhC31',
    //  'M9Ru88MgyxaWzQD5rmFZ5nXLwb1Su6KhM8',
      'MNqEQhjQekp6aPwrxo5CocGiZUojE7FRVV',
      'MHSrpK7ANdTcdYov3r4D23ga4CX8qQ8Ldz',
      'MEcmipRZAFTU3PKTCtYqqGgptLfaze4xxW',
      'MEQfdN15WbcpUvGXDMCMTP5Q1Yo1EKLMwq',
      'MNh9SQWrPEVj5YoFdPufNR9qekJw8GLurT',
      'M8W6MNhggyf5hcsjYVDU6iftxpyMRjfiZt',
      'MVn7Z1bNxmeyL7nz4sLGdF6XBHuweMEaxD',
      'MDLNqKRF6maLJZYV8NHRNdTi52GG8XXGug',
      'MKFoCHsQjXpgUj34fA8obeMNj4z1enu6ro',
      'MMf2S745xTMPRYKjcjwJ5sMTmK9pwxsVzA',
      'MBi5YtMEELodRdmeHcU1pLYWiwTnKvJWpH',
      'MKSvHk2LzBD2Uw278HkStaQMAbLmyCvXSv',
      'MCQQFzkb2zU1ZDX1daB6h4ynSomR1TFhQa',
      'MJaNHxFebWxrCRJENBfRDwZoXxyrvsdiHQ',
      'MArBU4dXkYkZJbCZUSLLXVDWpEhvZ9BMyP',
      'MDjNonAsnF8iq8pDqiwiN5Fcstfkk3LUQX',
      'MHPGjRwQoGaip9kRLHSmiPv6VHLzMiGFLn',
      'MTpp5c4DpxMihE3EMu86vrbjfWPhvsnG3q',
      'MVAxrYXj8yeohaigVsgmQk89RnYBrffQ2y',
      'M969RrTxtF4Fo2h9QnB2sM36Ab89WWehZv',
      'M84TwFy5YHpWTxnCtQEAV5roEB6ozN97Lo',
      'MDfDd3sdKz2hF3zdNTJ6ahLSkoFgBiLi53',
      'M884Z6eQWyGKmcsAXPTWi3W9M5YX2JB9m3',
      'M8bH8zjba3zYPoHsMK6g44uJWap37j24Qa',
      'M8Awr1FzdLztksKTKqCjCTNj9Rotya7DiL',
      'MVH2jpnrn5FtfKC7Bqk7CdeYndZojR7BcT',
      'MNNHqGDS3nLCEGjBerLwvgjfekPJu1y2An',
      'MVT1BYi3H7qWZ7EEB2CsmznAJPm8wMFE4o',
      'MNLJFrkggC3LSY3FdQbNTWTpQcHcwhUJDy',
      'MT3uRreGbQPFLQpZWc8PnVcCfEZkQzhX85',
      'MGN9p7Foo4bAFbfCeWuj1Ngx7wJkxggHj5',
      'MBqStPHaH2yU8fG3uGCZJGUwce7mb8S6oV',
      'MLFJDh1kKkRNWqS3B5yNzddyCapTYBQPR5',
      'MRZ15mLqE18xTQfXvskJhdmEPfvgf9PvUi',
      'MGVr8XVsxtQAuAshCAfL6rjtc77DbzpQXT',
      'MGLhZLfV2qVj9hYXdS5EwMSUZjXeaDFj65',
      'MVDLfhsEic5PgXv42ubeBFcZvH8xn2ZDFf',
      'MECWwhSEAEG7V3mvMSPR36DVuggSJHebLK',
      'M9J1Y2EYHKoMzDq1rRrUTcuDxxpHpac6Px',
      'MMfdTujrCteCNoPDnX2GSAdtnJYCEtBKLB',
      'MBvbFWcBZBP8rcu5RYjfNd7wC5HmjnT1Aj',
      'MEYbWHJNctTDnFrnorrYocgXrHESvmFeDC',
      'MDpSThaXtQRgAu6483mP33YFp6jXVfomUD',
      'MR5hD6FVXghpXM2fCe3BDPSJ2tEmyoinsB',
      'MWpXpCs5gtRyvYPUAzF7ibJ2DwEU79j7bT',
      'ltc1qth4svxe90g4tmugzrv5kf7ej03t9j0ftfhezkv727pcr59vy7fwqd7t44g',
      'MB4QMWUkqEiPxS4gkucyHUSH3jWEwjBQUR',
      'MJudegZoSdECMmevzEvEVszZvM7Li3dK82',
      'MS2b5H9mBu3AY7dNDXKGs8iY1tKEtcUxsA',
      'MTerEFGvWbAgs4jdG5z1y9AnA4a4Dy8FFJ',
    ]
  },//LTC DONE wallets with more than 750 LTc
  linea:{
    owners: [
      '0xd3d7dbe73bbdd5a5c7a49ca322763c4d400fc240',
    ]
  },//Linea DONE
  polkadot:{
    owners: [
      '14B3z6xL9vGgKz8WptoZabPrgH6adH1ev2Ven4SiTcdznfqd',
      '15abPBmJrMY7QJeCEQJQbQ9a62A7ndfTo8KC7Wn4dzt9zMMg',
      '1xpD24SQ9UgeFPQ2P9eRc7dppjgU9hiHDULqvWNfH3g3U54',
      '16hp43x8DUZtU8L3cJy9Z8JMwTzuu8ZZRWqDZnpMhp464oEd',
      '1Dkx7zjy4pRMwLQwWkbhb9Jxy7EXLfkdHVRXufwvdLV73QV',
    ]
  },//polkadot DONE
  aptos:{
    owners: [
      '0x834d639b10d20dcb894728aa4b9b572b2ea2d97073b10eacb111f338b20ea5d7'
    ]
  },
  starknet:{
    owners: [
      '0x0269ea391a9c99cb6cee43ff589169f547cbc48d7554fdfbbfa7f97f516da700'
    ]
  }
}

module.exports = cexExports(config)

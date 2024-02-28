const ADDRESSES = require('../helper/coreAssets.json')
const { staking } = require('../helper/staking')
const { sumTokensAndLPsSharedOwners } = require('../helper/unwrapLPs')


const treasuryAddress = "0x7Dd4f0B986F032A44F913BF92c9e8b7c17D77aD7"
const daoWallet = "0x65A5076C0BA74e5f3e069995dc3DAB9D197d995c"

async function treasuryBalances(time, ethBlock, chainBlocks) {
  const balances = {}
  const transform = i => `polygon:${i}`
  await sumTokensAndLPsSharedOwners(balances, [
    // Stablecoins
    [ADDRESSES.polygon.USDC, false], // USDC.e
    [ADDRESSES.polygon.USDC_CIRCLE, false], // USDC
    [ADDRESSES.polygon.USDT, false], // USDT

    // Carbon
    ["0x2f800db0fdb5223b3c3f354886d907a671414a7f", false], // BCT
    ["0xD838290e877E0188a4A44700463419ED96c16107", false], // NCT
    ["0xAa7DbD1598251f856C12f63557A4C4397c253Cea", false], // MCO2
    ["0x03E3369af9390493CB7CC599Cd5233D50e674Da4", false], // MOSS
    ["0x2B3eCb0991AF0498ECE9135bcD04013d7993110c", false], // UBO
    ["0x6BCa3B77C1909Ce1a4Ba1A20d1103bDe8d222E48", false], // NBO
    ["0xad01DFfe604CDc172D8237566eE3a3ab6524d4C6", false], // C3
    ["0x672688C6Ee3E750dfaA4874743Ef693A6f2538ED", false], // CRISP-C
    ["0x82B37070e43C1BA0EA9e2283285b674eF7f1D4E2", false], // CCO2

    // LPs
    ["0x1E67124681b402064CD0ABE8ed1B5c79D2e02f64", true], // USDC.e-BCT Sushi LP
    ["0x9803c7ae526049210a1725f7487af26fe2c24614", true], // KLIMA-BCT Sushi LP
    ["0x5786b267d35F9D011c4750e0B0bA584E1fDbeAD1", true], // KLIMA-USDC.e Sushi LP
    ["0x64a3b8cA5A7e406A78e660AE10c7563D9153a739", true], // KLIMA-MCO2 Sushi LP
    ["0xbA3B82585355CcD047A96b86aaBe256d181c23D2", true], // KLIMA-USDC UniV3 LP
  ], [treasuryAddress, daoWallet], chainBlocks.polygon, "polygon", transform)
  return balances
}

module.exports = {
  polygon: {
    tvl: () => 0,
    staking: staking("0x25d28a24Ceb6F81015bB0b2007D795ACAc411b4d", "0x4e78011ce80ee02d2c3e649fb657e45898257815", "polygon")
  }
}
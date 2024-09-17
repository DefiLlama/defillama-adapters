const vault = "0x6D8E0Ac94fb79Cd3520f546ce1c23A6F27F16EaC";
const gmxPlugin = "0xD4497259a3535ae311AB0F6ad68Da43a676919Db";

const SPOT_TOKENS = [
  "0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f",
  "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
  "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
  "0x2bcC6D6CdBbDC0a4071e48bb3B969b06B3330c07",
  "0xFa7F8980b0f1E64A2062791cc3b0871572f1F7f0",
  "0xf97f4df75117a78c1A5a0DBb814Af92458539FB4",
  "0x912CE59144191C1204E64559FE8253a0e49E6548",
  "0xa9004A5421372E1D83fB1f85b0fc986c912f91f3",
  "0xba5DdD1f9d7F570dc94a51479a000E3BCE967196",
  "0x565609fAF65B92F7be02468acF86f8979423e514",
  "0xaC800FD6159c2a2CB8fC31EF74621eB430287a5A",
  "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
  "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8",
  "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1"
];

const POOL_TOKENS = [
  "0x47c031236e19d024b42f8AE6780E44A573170703",
  "0x70d95587d40A2caf56bd97485aB3Eec10Bee6336",
  "0x6853EA96FF216fAb11D2d930CE3C508556A4bdc4",
  "0x09400D9DB990D5ed3f35D7be61DfAEB900Af03C9",
  "0xc7Abb2C5f3BF3CEB389dF0Eecd6120D451170B50",
  "0x7f1fa204bb700853D36994DA19F830b6Ad18455C",
  "0xC25cEf6061Cf5dE5eb761b50E4743c1F5D7E5407",
  "0x0CCB4fAa6f1F1B30911619f1184082aB4E25813c",
  "0x2d340912Aa47e33c90Efb078e69E70EFe2B34b9B",
  "0x63Dc80EE90F26363B3FCD609007CC9e14c8991BE",
  "0x248C35760068cE009a13076D573ed3497A47bCD4",
  "0x1CbBa6346F110c8A5ea739ef2d1eb182990e4EB2",
  "0x7BbBf946883a5701350007320F525c5379B8178A",
  "0x4fDd333FF9cA409df583f306B6F5a7fFdE790739",
  "0xB686BcB112660343E6d15BDb65297e110C8311c4",
  "0x9C2433dFD71096C435Be9465220BB2B189375eA7",
  "0xe2fEDb9e6139a182B98e7C2688ccFa3e9A53c665",
  "0xD9535bB5f58A1a75032416F2dFe7880C30575a41"
 ];

async function tvl(api) {
  for (const token of SPOT_TOKENS) {
    const balance = await api.call({ abi: "erc20:balanceOf", target: token, params: [vault] })
    api.addToken(token, balance)
  }

  for (const token of POOL_TOKENS) {
    const balance = await api.call({ abi: "erc20:balanceOf", target: token, params: [gmxPlugin] })
    api.addToken(token, balance)
  }
}

module.exports = {
  methodology: 'To calculate the TVL for the Mozaic Theseus Vault, we take the sum of both the staked GMX holdings held in the GMX Plugin contract, and also any spot holdings in the main Vault contract.',
  arbitrum: { tvl },
};

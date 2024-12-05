const anchor = require('@coral-xyz/anchor');
const { PublicKey } = require("@solana/web3.js");
const DRIFT_PROGRAM_ID = new PublicKey('dRiftyHA39MWEi3m9aunc5MzRF1JYuBsbn6VPcn33UH')

const SPOT_MARKETS = {
  0: {
    name: 'USDC',
    mint: 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v',
    decimals: 6
  },
  1: {
    name: 'SOL',
    mint: 'So11111111111111111111111111111111111111112',
    decimals: 9
  },
  19: {
    name: 'JLP',
    mint: '27G8MtK7VtTcCHkpASjSDdkWWYfoqT6ggEuKidVJidD4',
    decimals: 6
  },
  28: {
    name: 'USDS',
    mint: 'USDSwr9ApdHk5bvJKMjzff41FfuX8bSxdKcR81vTwcA',
    decimals: 6
  }
};

const PERP_MARKETS = {
  0: {
    name: 'SOL-PERP',
    mint: 'So11111111111111111111111111111111111111112',
    baseDecimals: 9,
    quoteDecimals: 6
  },
  1: {
    name: 'BTC-PERP',
    mint: "3NZ9JMVBmGAqocybic2c7LQCJScmgsAZ6vQqTDzcqmJh",
    baseDecimals: 8,
    quoteDecimals: 6
  },
  2: {
    name: 'ETH-PERP',
    mint: "7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs",
    baseDecimals: 8,
    quoteDecimals: 6
  },
};

function getTokenMintFromMarketIndex(marketIndex) {
  if (!SPOT_MARKETS[marketIndex]) {
    throw new Error(`Market index ${marketIndex} not found`);
  }
  return SPOT_MARKETS[marketIndex].mint;
}

function getPerpTokenMintFromMarketIndex(marketIndex) {
  if (!PERP_MARKETS[marketIndex]) {
    throw new Error(`Perp market index ${marketIndex} not found`);
  }
  return PERP_MARKETS[marketIndex].mint;
}

function getDecimalsByMarketIndex(marketIndex, isPerp = false) {
  if (isPerp) {
    if (!PERP_MARKETS[marketIndex]) {
      throw new Error(`Perp market index ${marketIndex} not found`);
    }
    return PERP_MARKETS[marketIndex].baseDecimals;
  }

  if (!SPOT_MARKETS[marketIndex]) {
    throw new Error(`Spot market index ${marketIndex} not found`);
  }
  return SPOT_MARKETS[marketIndex].decimals;
}

function processSpotPosition(position) {
  const decimals = getDecimalsByMarketIndex(position.market_index);
  const decimalAdjustment = 9 - decimals;
  let balance = position.scaled_balance;

  // Apply decimal adjustment
  if (decimalAdjustment > 0) {
    balance /= BigInt(10 ** decimalAdjustment);
  }

  // Apply sign based on balance_type
  return position.balance_type === 1 ? -balance : balance;
}

function processPerpPosition(position) {

  //if perp market 0, amount needs to mul by 10 
  let baseBalance = position.market_index === 0 ? position.base_asset_amount : position.base_asset_amount / BigInt(10);

  let quoteBalance = position.quote_asset_amount;

  return { baseBalance, quoteBalance };
}



function getPerpMarketFundingRates(accountInfo) {
  if (!accountInfo) {
    throw new Error(`No account info found for market ${marketIndex}`);
  }
  let factorToPrecision = 1n;


  const CUMULATIVE_FUNDING_OFFSET = 8 + 48 + 32 + 256 + (16 * 15) + 24;

  const cumulativeFundingRateLong = accountInfo.data.readBigInt64LE(CUMULATIVE_FUNDING_OFFSET);
  const cumulativeFundingRateShort = accountInfo.data.readBigInt64LE(CUMULATIVE_FUNDING_OFFSET + 16);

  return {
    cumulativeFundingRateLong,
    cumulativeFundingRateShort,
    factorToPrecision
  };
}

module.exports = {
  getTokenMintFromMarketIndex,
  getDecimalsByMarketIndex,
  processSpotPosition,
  processPerpPosition,
  SPOT_MARKETS,
  PERP_MARKETS,
  getPerpMarketFundingRates,
  getPerpTokenMintFromMarketIndex,
  getVaultPublicKey,
};

function getVaultPublicKey(seed, marketIndex) {
  return PublicKey.findProgramAddressSync(
    [
      Buffer.from(anchor.utils.bytes.utf8.encode(seed)),
      new anchor.BN(marketIndex).toArrayLike(Buffer, 'le', 2),
    ], DRIFT_PROGRAM_ID)[0]
}
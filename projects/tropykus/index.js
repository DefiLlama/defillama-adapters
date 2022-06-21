const retry = require('async-retry');
const axios = require("axios");

const fetch = async function () {
  const url = 'https://us-central1-tropycofinance.cloudfunctions.net/getTVL';
  const comptroller = '0x962308fEf8edFaDD705384840e7701F8f39eD0c0';

  const tropykusTVL = await retry(async bail => await axios.get(`${url}?comptroller=${comptroller}`));
  return tropykusTVL.data.tvl;
};

module.exports = {
  methodology: "The TVL is calculated by adding the value of total deposits in all markets minus the total borrows.",
  fetch,
};

const { cexExports } = require('../helper/cex')

const config = {
  bitcoin: {
    owners: [
      '1HTGi4tfXSEtcXD4pk6S3vBs3s64hWY1pW'
    ],
  },
  solana: {
    owners: [
      'FvLsZiM3g2ZnehkK42c4EoLASBdchKnqzxyAEmGhViZq'
    ],
  },
  ripple: {
    owners: [
      'rHTG5htCXSNtcXDhFkaSsvB1s1ah6WYrFW'
    ],
  },
  litecoin: {
    owners: [
      'LbgDyHCVc6UwsKuDzt5jKwFdG5TLsN5tbf'
    ],
  },
  polkadot: {
    owners: [
      '161fEUkrGhhAog8QG1ik3sfch9UzPdvAJtUwRH6WZnsgqkuw'
    ],
  },
  cardano: {
    owners: [
      'addr1q976xcl3r2vt6he4q3rq6lyq8832v5mgpdds0e84z7vn0hma5d3lzx5ch40n2pzxp47gqw0z5efksz6mqlj029uexl0snqdsul'
    ],
  }
}

module.exports = cexExports(config)

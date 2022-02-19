require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/BnHz4YpfYbzWMEhre5Cra3GppRut6-8_', //http key from alchemy
      accounts: ['0351e0c79511530fca3660751d0991f8b1faa7caf4e597fa2eb534165ec6181a'] //metamask private key
    }
  }
}
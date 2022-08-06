require('@nomiclabs/hardhat-waffle');
require('dotenv').config({ path: __dirname + '/.env' });

const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: API_URL, //http key from alchemy
      accounts: [PRIVATE_KEY] //metamask private key
    }
  }
}
require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/p98Ewi5l0l1AsYndjWvmpvoSzU6xCnvR',
      accounts: [
        '3329d3c8c49b3099cffe95009e0afee25b7f61c78632e29c5379af49c7da8db2'
      ]
    }
  }
}
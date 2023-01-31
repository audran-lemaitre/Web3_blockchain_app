require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/zUKAK7pLE1NQvOmeYkhnU4eRc0aLyl-D',
      accounts: [''],
    },
  },
};
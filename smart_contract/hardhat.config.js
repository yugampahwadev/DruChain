// https://eth-goerli.g.alchemy.com/v2/VoqhO2AH0fOlz8Q-Zp2dpA_mvK23EjcH

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: "NETWORK_URL",
      accounts: ["ACCOUNT_PRIVATE_KEY"],
    },
  },
};

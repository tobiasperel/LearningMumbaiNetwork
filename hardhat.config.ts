import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const fs = require('fs');

let privateKey
try {
  privateKey = fs.readFileSync(".env").toString().trim();
} catch {
  console.log("No .env file found. Please create one with your privateKey phrase.")
}

module.exports = {
  defaultNetwork: "goerli",
  networks: {
    hardhat: {
    },
    mumbai: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [privateKey]
    }
  },
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 40000
  }
}


export default module.exports as HardhatUserConfig;

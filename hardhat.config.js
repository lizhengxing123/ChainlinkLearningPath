/*
 * @Descripttion:
 * @Author: lizhengxing
 * @Date: 2022-11-02 21:33:09
 * @LastEditTime: 2022-11-10 17:01:37
 */
// 测试
require("@nomiclabs/hardhat-waffle")
// etherscan 验证
require("@nomiclabs/hardhat-etherscan")
// 部署
require("hardhat-deploy")
// 测试覆盖率
require("solidity-coverage")
// gas消耗报告
require("hardhat-gas-reporter")

require("hardhat-contract-sizer")
// 环境变量
require("dotenv").config()

const {
    GOERLI_RPC_URL,
    GOERLI_PRIVATE_KEY,
    ETHERSCAN_API_KEY,
    COINMARKETCAP_API_KEY,
    MAINNET_RPC_URL,
} = process.env
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: {
        compilers: [
            {
                version: "0.8.17",
            },
            {
                version: "0.6.12",
            },
            {
                version: "0.4.19",
            },
        ],
    },
    defaultNetwork: "hardhat",
    networks: {
        hardhat: {
            chainId: 31337,
            blockConfirmations: 1,
            // forking: {
            //     url: MAINNET_RPC_URL,
            // },
        },
        localhost: {
            chainId: 31337,
            blockConfirmations: 1,
        },
        goerli: {
            chainId: 5,
            blockConfirmations: 6,
            url: GOERLI_RPC_URL,
            accounts: [GOERLI_PRIVATE_KEY],
        },
    },
    namedAccounts: {
        deployer: {
            default: 0,
        },
        player: {
            default: 1,
        },
    },
    mocha: {
        // 超时事件
        timeout: 600000,
    },
    // 用于etherscan合约验证
    etherscan: {
        apiKey: {
            goerli: ETHERSCAN_API_KEY,
        },
        customChains: [],
    },
}

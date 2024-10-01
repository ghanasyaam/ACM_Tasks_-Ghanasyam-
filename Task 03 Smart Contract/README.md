# SimpleToken Smart Contract

This project contains a basic smart contract written in Solidity that implements a simple token on the Ethereum blockchain. It includes functionality for minting new tokens, transferring tokens between accounts, and checking token balances. The contract is built for educational purposes and has been tested using the Remix IDE.

## Table of Contents

- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Contract Functions](#contract-functions)
- [Deployment](#deployment)
- [Testing](#testing)
- [Tools Used](#tools-used)
- [License](#license)

## Overview

The **SimpleToken** contract provides the following features:
- **Minting Tokens**: Allows an authorized user to create new tokens and assign them to a specific address.
- **Transferring Tokens**: Enables the transfer of tokens from one account to another.
- **Checking Balance**: Retrieves the token balance of any address.

### Smart Contract Details

- **Token Name**: `SimpleToken`
- **Symbol**: `STK`
- **Decimals**: `18`
- **Total Supply**: This variable will track the total supply of the tokens in circulation.

## Prerequisites

To deploy and interact with this contract, you'll need the following:

1. **Metamask**: A browser extension wallet to interact with the Ethereum blockchain.
2. **Remix IDE**: An online Solidity IDE for writing, compiling, and deploying smart contracts.
3. **Ether**: You can get Ether from Google faucets for test networks like Sepolia or Ropsten, and add it to your MetaMask wallet.

## Getting Started

### 1. Setup MetaMask
- Install the [MetaMask](https://metamask.io/) extension in your browser.
- Create a wallet if you haven't already and switch to the Sepolia test network (you can also use Ropsten if preferred).
- Obtain free test Ether from a [Google faucet](https://faucet.google.com/) and transfer it to your MetaMask wallet.

### 2. Open Remix IDE
- Open the [Remix IDE](https://remix.ethereum.org/).
- In Remix, create a new file and paste the smart contract code provided in this repository.

### 3. Compile the Contract
- In Remix, click on the **Solidity Compiler** tab and select the correct Solidity version (in this case, `^0.8.0`).
- Click on **Compile** to ensure the contract compiles successfully.

### 4. Deploy the Contract
- Switch to the **Deploy & Run Transactions** tab.
- Select "Injected Web3" from the environment dropdown to connect Remix to MetaMask.
- Make sure MetaMask is connected to the Sepolia network.
- Click on **Deploy** and confirm the transaction in MetaMask.

## Contract Functions

1. **Mint Tokens**:
   - Function: `mint(address _to, uint256 _value)`
   - Description: Mints new tokens and assigns them to the specified address.
   - Usage Example:
     ```javascript
     await contract.mint('0xYourAddress', 100);
     ```

2. **Transfer Tokens**:
   - Function: `transfer(address _to, uint256 _value)`
   - Description: Transfers tokens from the sender’s account to the specified account.
   - Usage Example:
     ```javascript
     await contract.transfer('0xRecipientAddress', 50);
     ```

3. **Check Balance**:
   - Function: `checkBalance(address _owner)`
   - Description: Returns the token balance of the specified address.
   - Usage Example:
     ```javascript
     const balance = await contract.checkBalance('0xOwnerAddress');
     ```

## Deployment

### Steps to Deploy on Sepolia or Ropsten Test Network:

1. Open Remix and connect MetaMask to Sepolia or Ropsten.
2. Compile the smart contract using the **Solidity Compiler**.
3. Go to the **Deploy & Run** tab and deploy the contract using MetaMask's connected account.
4. Confirm the deployment in MetaMask and wait for the transaction to complete.
5. Once deployed, you will see the contract's address and functions in the Remix interface.

### Example Transactions:
- **Mint Tokens**: Use the `mint` function to create new tokens for an address.
- **Transfer Tokens**: Use the `transfer` function to send tokens to other accounts.
- **Check Balance**: Call `checkBalance` with an address to view the token balance of that account.

## Testing

### Testing in Remix IDE:

1. **Minting Tokens**: After deploying the contract, use the `mint` function in Remix to mint tokens for your account.
2. **Transferring Tokens**: Use the `transfer` function to send tokens to another address.
3. **Checking Balance**: Call `checkBalance` for any address to confirm the token balances.

### Using Sepolia Testnet:
You can interact with the deployed contract by sending transactions from MetaMask and testing it on the Sepolia test network with the free Ether you obtained.

## Tools Used

- **Solidity**: Programming language for writing Ethereum smart contracts.
- **Remix IDE**: Online IDE for writing, compiling, and deploying smart contracts.
- **MetaMask**: Ethereum wallet and browser extension for managing Ethereum-based assets and interacting with dApps.

## License

This project is licensed under the MIT License. See the `SPDX-License-Identifier` in the contract for more details.

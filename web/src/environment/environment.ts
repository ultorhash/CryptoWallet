import abi from './transactions.json';

export const env = {
  contractABI: abi.abi,
  contractAddress: '0x6AD45e01E0caA323988DdC5BdD25DEe35e92f202',
  ethMethods: {
    accounts: 'eth_accounts',
    requestAccount: 'eth_requestAccounts',
    sendTransaction: 'eth_sendTransaction'
  }
}
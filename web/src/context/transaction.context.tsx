import React, { useEffect, useState } from "react";
import { env } from '../environment/environment';
import { ethers } from 'ethers';
import { ITransactionContext } from "../interfaces/transaction-context.interface";

export const TransactionContext = React.createContext<ITransactionContext>({
  currentAccount: '',
  formData: {
    addressTo: '',
    amount: 0,
    message: ''
  },
  setFormData: () => {},
  connectWallet: () => {},
  sendTransaction: () => {}
});

declare const window: any;
const { ethereum } = window;
const { contractAddress, contractABI } = env;

const getEthereumContract = (): ethers.Contract => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionContract = new ethers.Contract(contractAddress, contractABI, signer);

  return transactionContract;
}

export const TransactionProvider = ({ children }: any) => {

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentAccount, setCurrentAccount] = useState<string>('');
  const [formData, setFormData] = useState({
    addressTo: '',
    amount: 0,
    message: ''
  });

  const checkWalletConnection = async () => {
    try {
      if (!ethereum) return alert('Please install metamask');
      const accounts = await ethereum.request({ method: env.ethMethods.accounts });

      if (accounts.length > 0) {
        setCurrentAccount(accounts[0]);
      } else {
        console.log('No accounts found');
      }
    } catch (err) {
      console.log(err);
      throw new Error("No ethereum object");
    }
  }

  const connectWallet = async (): Promise<void> => {
    try {
      if (!ethereum) return alert('Please install metamask');
      const accounts = await ethereum.request({ method: env.ethMethods.requestAccount });
      setCurrentAccount(accounts[0]);
    } catch (err) {
      console.log(err);
      throw new Error("No ethereum object");
    }
  }

  const sendTransaction = async (): Promise<void> => {
    try {
      if (!ethereum) return alert('Please install metamask');
      const { addressTo, amount, message } = formData;
      const transactionContract = getEthereumContract();
      const parseAmount: ethers.BigNumber = ethers.utils.parseEther(amount.toString());

      await ethereum.request({
        method: env.ethMethods.sendTransaction,
        params: [{
          from: currentAccount,
          to: addressTo,
          gas: '0x5208',
          value: parseAmount._hex
        }]
      });

      const transactionHash = await transactionContract.addToBlockchain(addressTo, parseAmount, message);
      setIsLoading(true);
      await transactionHash.wait();
      setIsLoading(false);

      const transactionCount = await transactionContract.getTransactionCount();

    } catch (err) {
      console.log(err);
      throw new Error("No ethereum object");
    }
  }

  useEffect(() => {
    checkWalletConnection();
  }, [])

  return (
    <TransactionContext.Provider
      value={{
        currentAccount,
        formData,
        setFormData,
        connectWallet,
        sendTransaction
      }}
    >
      {children}
    </TransactionContext.Provider>
  )
}
import { ICardData } from './home.interface';

export const cards: ICardData[] = [
  {
    title: 'Connect to MetaMask',
    description: `To begin transaction connect to your MetaMask
    account and select account to manage ethereum.`,
    imageUrl: 'metamask.svg'
  },
  {
    title: 'Provide recipient data',
    description: `To send an ethereum recipient, go to the Transactions
    tab and then fill out the transfer form.`,
    imageUrl: 'payment.svg'
  },
  {
    title: 'Confirm transfer data',
    description: `Check that you have entered the correct address to
    which you want to send the ethereum. Then confirm the transaction
    again in MetaMask.`,
    imageUrl: 'blockchain.svg'
  }
]
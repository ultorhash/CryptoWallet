import { IFlowData } from './transactions.interface';

export const flowList: IFlowData[] = [
  {
    title: 'You Fill The Form',
    description: `Make sure that you provided data you
    want otherwise you won't be able to send any
    ethereum or even send to bad address`,
    imageUrl: 'person.svg',
    imageAlt: 'person'
  },
  {
    title: 'Accept Transaction Fee',
    description: `The MetaMask window will show
    acceptance of the transaction and the transfer fee.
    If you agree, then the transaction will be initiated.
    Confirmation is a two-step process`,
    imageUrl: 'transaction-fee.svg',
    imageAlt: 'fee'
  },
  {
    title: 'Wait A Few Seconds',
    description: `After acceptance, wait a while for the
    miners to approve your transaction request. This can
    take anywhere from a few seconds to several minutes
    depending on Ropstein network traffic`,
    imageUrl: 'timer.svg',
    imageAlt: 'timer'
  },
  {
    title: 'Check Your Account Balance',
    description: `You will be notified when the submission
    is complete in the form window. Then select the account
    in MetaMask and check whether ethereum amount arrived
    if you sent to the selected address or disappeared if
    you sent from the selected account to another`,
    imageUrl: 'account.svg',
    imageAlt: 'account'
  }
];
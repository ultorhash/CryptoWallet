import { IFormData } from './form-data.interface';
import { ITransaction } from './transaction.interface';

export interface ITransactionContext {
  currentAccount: string;
  formData: IFormData;
  transactions: ITransaction[];
  setFormData: (data: IFormData) => void;
  connectWallet: () => void;
  sendTransaction: () => void;
}
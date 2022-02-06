import { IFormData } from './form-data.interface';

export interface ITransactionContext {
  currentAccount: string;
  formData: IFormData;
  setFormData: (data: IFormData) => void;
  connectWallet: () => void;
  sendTransaction: () => void;
}
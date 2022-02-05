import * as Yup from 'yup';
import { IFormSchema } from './send-form.interface';

export const formInputSchema: IFormSchema = {
  addressTo: Yup
    .string()
    .required('Address is required'),

  amount: Yup
    .number()
    .required('Provide an amount'),

  message: Yup
    .string()
    .required('Enter a message')
};
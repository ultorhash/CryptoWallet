import React, { FC, useContext } from "react";
import {
  FormButtonStyle,
  FormContainer,
  FormInputProps,
  FormInputStyle,
  FormLabelProps,
  FormStyle
} from './styled-send-form';
import { useForm, FieldValues } from "react-hook-form";
import * as yup from 'yup';
import { formInputSchema } from "./send-form.data";
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Box,
  Button,
  Grid,
  Paper,
  TextField,
  Typography
} from "@mui/material";
import { BiWallet, BiSend } from 'react-icons/bi';
import { FormButtonIconStyle } from './styled-send-form';
import { TransactionContext } from '../../../context/transaction.context';

export const SendForm: FC = () => {

  const {
    currentAccount, formData,
    setFormData, connectWallet, sendTransaction
  } = useContext(TransactionContext);

  const formSchema = yup.object().shape(formInputSchema);
  const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>({
    resolver: yupResolver(formSchema),
    mode: 'onChange'
  });

  const submit = (data: FieldValues) => {
    setFormData({
      addressTo: data.addressTo,
      amount: data.amount,
      message: data.message
    });

    const { addressTo, amount, message } = formData;

    if (!addressTo || !amount || !message) return;

    sendTransaction();
  }

  return (
    <FormContainer>
      <Paper style={FormStyle}>
        <Box px={4} py={2}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={12}>
              <TextField
                style={FormInputStyle}
                inputProps={FormInputProps}
                InputLabelProps={FormLabelProps}
                required
                label="Address To"
                fullWidth
                placeholder="e.g. 0x5543...56"
                margin="dense"
                {...register('addressTo')}
              />
              <Typography
                variant="inherit"
                color="red"
              >
                {errors.addressTo?.message}
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={12}>
              <TextField
                style={FormInputStyle}
                inputProps={FormInputProps}
                InputLabelProps={FormLabelProps}
                required
                label="Amount"
                fullWidth
                placeholder="Number of Ethereum"
                margin="dense"
                type="number"
                {...register('amount')}
              />
              <Typography
                variant="inherit"
                color="red"
              >
                {errors.amount?.message}
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={12}>
              <TextField
                style={FormInputStyle}
                inputProps={FormInputProps}
                InputLabelProps={FormLabelProps}
                required
                label="Message"
                fullWidth
                placeholder="Your message"
                margin="dense"
                {...register('message')}
              />
              <Typography
                variant="inherit"
                color="red"
              >
                {errors.message?.message}
              </Typography>
            </Grid>
          </Grid>
          <Box
            py={4}
            sx={{
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            {!currentAccount && (<Button
              style={FormButtonStyle}
              variant="contained"
              onClick={connectWallet}
            >
              <Typography>
                Connect To Wallet
                <BiWallet style={FormButtonIconStyle}/>
              </Typography>
            </Button>)}
            <Button
              style={FormButtonStyle}
              variant="contained"
              onClick={handleSubmit(submit)}
            >
              <Typography>
                Send
                <BiSend style={FormButtonIconStyle}/>
              </Typography>
            </Button>
          </Box>
        </Box>
      </Paper>
    </FormContainer>
  )
}
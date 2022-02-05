import React, { FC } from "react";
import { TransactionsContainer } from "./styled-transactions";
import { SendForm } from "./send-form/send-form";

export const Transactions: FC = () => {
  return (
    <TransactionsContainer>
      <SendForm />
    </TransactionsContainer>
  )
}
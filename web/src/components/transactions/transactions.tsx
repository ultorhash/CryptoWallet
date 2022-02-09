import React, { FC } from "react";
import {
  FlowInfo,
  TransactionBox,
  TransactionPanel,
  TransactionsContainer
} from "./styled-transactions";
import { SendForm } from "./send-form/send-form";

export const Transactions: FC = () => {
  return (
    <TransactionsContainer>
      <TransactionPanel>
        <TransactionBox>
          <SendForm />
        </TransactionBox>
        <TransactionBox>
          
        </TransactionBox>
      </TransactionPanel>
      <FlowInfo>
        
      </FlowInfo>
    </TransactionsContainer>
  )
}
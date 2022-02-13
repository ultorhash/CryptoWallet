import React, { FC, useContext } from "react";
import {
  FlowInfo,
  TransactionBox,
  TransactionPanel,
  TransactionsContainer,
  TransactionsHistory
} from "./styled-transactions";
import { SendForm } from "./send-form/send-form";
import { TransactionContext } from "../../context/transaction.context";
import { ITransaction } from '../../interfaces/transaction.interface';
import { TransactionCard } from "./transaction-card/transaction-card";

export const Transactions: FC = () => {

  let allTransactions: ITransaction[] = [];
  const { transactions } = useContext(TransactionContext);

  if (transactions.length > 0) {;
    allTransactions = transactions;
  }

  return (
    <TransactionsContainer>
      <TransactionPanel>
        <TransactionBox>
          <SendForm />
        </TransactionBox>
        <TransactionBox>
          <TransactionsHistory>
            {allTransactions.map((item: ITransaction, index: number) => {
              return (
                <TransactionCard
                  {...item}
                  key={index}
                  isEven={index % 2 == 0}
                />
              )
            })}
          </TransactionsHistory>
        </TransactionBox>
      </TransactionPanel>
      <FlowInfo>
        
      </FlowInfo>
    </TransactionsContainer>
  )
}
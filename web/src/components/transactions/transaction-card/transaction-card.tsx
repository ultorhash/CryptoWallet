import React, { FC, useState } from "react";
import { ITransaction } from '../../../interfaces/transaction.interface';
import { BsArrowDownShort, BsArrowUpShort } from 'react-icons/bs';
import {
  Address,
  Addresses,
  BasicData,
  Details,
  DetailsButton,
  DetailsIconStyle,
  PersonIconStyle,
  TransactionCardComponent
} from './styled-transaction-card';
import {
  RiUserSharedLine,
  RiUserReceivedLine
} from 'react-icons/ri';
import moment from "moment";

export const TransactionCard: FC<ITransaction> = (props) => {

  const {
    sender,
    receiver,
    isEven,
    message,
    timestamp,
    amount
  } = props;

  const persons: string[] = [sender, receiver];
  const formattedDate = moment.unix(timestamp.toNumber()).toString();
  const [detailsOpen, setDetailsOpen] = useState<boolean>(false);

  const copyToClipboard = async (text: string): Promise<void> => {
    await navigator.clipboard.writeText(text);
  }

  return (
    <TransactionCardComponent isEven={isEven}>
      <BasicData>
        <Addresses>
          {persons.map((person: string, index: number) => {
            return (
              <Address key={index}>
                {index % 2 === 0
                  ? (<RiUserSharedLine style={PersonIconStyle} />)
                  : (<RiUserReceivedLine style={PersonIconStyle} />)}
                <button onClick={() => copyToClipboard(person)}>
                  <p>{person}</p>
                </button>
              </Address>
            )
          })}
        </Addresses>
      </BasicData>
      <DetailsButton onClick={() => setDetailsOpen(!detailsOpen)}>
        {detailsOpen ? (
          <BsArrowUpShort style={DetailsIconStyle}/>
        ) : (
          <BsArrowDownShort style={DetailsIconStyle}/>
        )}
      </DetailsButton>
      <Details isOpen={detailsOpen}>
        <p>Message: <span>{message}</span></p>
        <p>Amount: <span>{amount._hex}</span></p>
        <p>Time: <span>{formattedDate}</span></p>
      </Details>
    </TransactionCardComponent>
  )
}
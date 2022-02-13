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
import { BigNumber } from "ethers";
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

  const formattedDate = moment.unix(timestamp.toNumber()).toString();

  const [detailsOpen, setDetailsOpen] = useState<boolean>(false);

  return (
    <TransactionCardComponent isEven={isEven}>
      <BasicData>
        <Addresses>
          <Address>
            <RiUserSharedLine style={PersonIconStyle}/>
            <p>{sender}</p>
          </Address>
          <Address>
            <RiUserReceivedLine style={PersonIconStyle}/>
            <p>{receiver}</p>
          </Address>
        </Addresses>
      </BasicData>
      <DetailsButton onClick={() => setDetailsOpen(!detailsOpen)}>
        {detailsOpen ? (
          <BsArrowUpShort style={DetailsIconStyle}/>
        ) : (
          <BsArrowDownShort style={DetailsIconStyle}/>
        )}
      </DetailsButton>
      {detailsOpen && (
        <Details>
          <p>Message: <span>{message}</span></p>
          <p>Amount: <span>{amount._hex}</span></p>
          <p>Time: <span>{formattedDate}</span></p>
        </Details>
      )}
    </TransactionCardComponent>
  )
}
import styled, { CSSProperties } from "styled-components";
import { Colors } from "../../../colors/colors";
import { ITransactionCardProps, ITransactionDetailsProps } from './transaction-card.interface';

export const TransactionCardComponent = styled.li<ITransactionCardProps>`
  width: 100%;
  height: auto;
  min-height: 60px;
  background-image: linear-gradient(to right, ${Colors.Gray700}, ${Colors.Gray800});
  position: relative;
  margin-bottom: 10px;
  border-radius: 5px;
  list-style: none;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const BasicData = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
`;

export const Addresses = styled.div`
  width: 100%;
  height: 100%;
  min-height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
`;

export const Address = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 4px;

  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
    width: 75%;
    text-align: left;
  }

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    color: ${Colors.Gray400};
    font-weight: 600px;
  }
`;

export const DetailsButton = styled.button`
  width: 30px;
  height: 30px;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  border-radius: 5px;
  border: none;
  transition: all 0.2s ease-in;
  z-index: 10;

  &:hover {
    background-color: ${Colors.Orange700};
  }
`;

export const Details = styled.div<ITransactionDetailsProps>`
  display: ${props => props.isOpen ? 'block' : 'none'};
  width: 100%;
  height: auto;
  padding: 10px;
  transition: height 1s linear;

  p {
    line-height: 25px;
    color: ${Colors.Orange300};
    width: 85%;
  }

  span {
    color: ${Colors.White};
    font-weight: 600;
    font-size: 0.9rem;
  }
`;

export const ClipboardButton = styled.button`
  border: none;
  cursor: pointer;
  background-color: transparent;
  color: ${Colors.Gray400};
  margin: 0 10px;
  border-radius: 5px;
  padding: 5px;
`;

export const DetailsIconStyle: CSSProperties = {
  width: '100%',
  height: '100%'
}

export const CopyIconStyle: CSSProperties = {
  width: '15px',
  height: '15px'
}

export const PersonIconStyle: CSSProperties = {
  width: '40px',
  height: '25px',
  color: Colors.Orange500
}

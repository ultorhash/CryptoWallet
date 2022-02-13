import styled from "styled-components";
import { Colors } from "../../colors/colors";
import { FlexContainer, HalfBox } from '../../global-styles/styled-shared';

export const TransactionsContainer = styled.div`
  width: 100%;
  height: auto;
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.Gray900};
`;

export const TransactionPanel = styled(FlexContainer)`
  height: 500px;
  padding: 10px;
  
  @media (max-width: 768px) {
    height: auto;
    flex-direction: column;
  }
`;

export const TransactionBox = styled(HalfBox)`
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const TransactionsHistory = styled.ul`
  width: 100%;
  height: 500px;
  overflow-y: scroll;
  padding: 0 15px;

  &::-webkit-scrollbar-track {
    background-color: ${Colors.Gray500};
  }

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${Colors.Gray800};
  }

  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

export const FlowInfo = styled.div`
  width: 100%;
  height: 300px;
  border: 2px solid red;
`;
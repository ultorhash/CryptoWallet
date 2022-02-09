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
  background-color: ${Colors.Gray700};
`;

export const TransactionPanel = styled(FlexContainer)`
  margin: 20px 0;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const TransactionBox = styled(HalfBox)`
  border: 2px solid green;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const FlowInfo = styled.div`
  width: 100%;
  height: 300px;
  border: 2px solid red;
`;
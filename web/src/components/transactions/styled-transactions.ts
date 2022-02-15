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
  padding: 20px;
  
  @media (max-width: 976px) {
    height: auto;
    flex-direction: column;
  }
`;

export const TransactionBox = styled(HalfBox)`
  @media (max-width: 976px) {
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

  @media (max-width: 976px) {
    margin: 20px 0;
  }
`;

export const FlowInfo = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px;
`;

export const FlowCard = styled.div`
  width: 250px;
  height: 450px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: ${Colors.White};
  background-color: ${Colors.Gray800};
  text-align: center;
  box-shadow: -1px 1px 20px 10px rgba(210, 210, 210, 0.4);
  -webkit-box-shadow: -1px 1px 20px 10px rgba(210, 210, 210, 0.4);
  -moz-box-shadow: -1px 1px 20px 10px rgba(210, 210, 210, 0.4);
  transition: box-shadow 0.2s ease-out;
  cursor: pointer;

  &:hover {
    box-shadow: -1px 1px 25px 10px rgba(230, 230, 230, 0.6);
    -webkit-box-shadow: -1px 1px 25px 10px rgba(230, 230, 230, 0.6);
    -moz-box-shadow: -1px 1px 25px 10px rgba(230, 230, 230, 0.6);
  }

  h3 {
    margin: 10px;
  }

  p {
    margin: 0 10px;
    font-size: 0.9rem;
    line-height: 20px;
  }
`;

export const CardImageWrapper = styled.div`
  width: 100%;
  height: 200px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: ${Colors.Gray700};

  img {
    width: 100%;
    height: 100%;
    padding: 20px;
  }
`;
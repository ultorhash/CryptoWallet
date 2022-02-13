import { BigNumber } from "ethers";

export interface ITransaction {
  amount: BigNumber;
  message: string;
  receiver: string;
  sender: string;
  timestamp: BigNumber;
  isEven: boolean;
}
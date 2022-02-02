import { ProcessIcon, StepIcon } from './styled-home';
import {
  FaArrowRight,
  FaArrowLeft,
  FaArrowUp,
  FaArrowDown
} from 'react-icons/fa';
import { FiRefreshCw } from 'react-icons/fi';

export const steps: any[] = [
  {
    title: '1. Connect to MetaMask',
    text: 'In order to use our website you must enable your MetaMask account.'
  },
  {
    icon: <FaArrowRight style={StepIcon} />
  },
  {
    title: '2. Select account',
    text: 'Copy your address for transaction.'
  },
  {
    icon: <FaArrowUp style={StepIcon} />
  },
  {
    icon: <FiRefreshCw style={ProcessIcon} />
  },
  {
    icon: <FaArrowDown style={StepIcon} />
  },
  {
    title: '4. Enter data and send',
    text: 'Fill the essential recipient data and confirm deal.'
  },
  {
    icon: <FaArrowLeft style={StepIcon} />
  },
  {
    title: '3. Go to Transactions',
    text: '3. In Transactions tab you can send ethereum.'
  },
];

import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { FooterIconStyle } from './styled-footer';
import { IFooterData } from './footer.interface';

export const footerBoxesData: IFooterData[] = [
  {
    title: "Partners",
    partners: [
      {
        name: 'MetaMask',
        logoUrl: './metamask.svg',
        logoAlt: 'metamask'
      },
      {
        name: 'Blockchain',
        logoUrl: './blockchain.svg',
        logoAlt: 'blockchain',
      }
    ]
  },
  {
    title: "Contact",
    socials: [
      {
        icon: <AiFillGithub style={FooterIconStyle} />,
        to: 'https://github.com/ultorhash/ultorhash'
      },
      {
        icon: <AiFillLinkedin style={FooterIconStyle} />,
        to: 'https://www.linkedin.com/in/szymon-rajski-73177a21a/'
      }
    ]
  },
  {
    title: "Links",
    links: [
      {
        text: "Home",
        to: "/"
      },
      {
        text: "MetaMask",
        to: "https://metamask.io"
      },
      {
        text: "About",
        to: "/about"
      },
      {
        text: "Blockchain",
        to: "https://en.wikipedia.org/wiki/Blockchain"
      },
      {
        text: "Transactions",
        to: "/transactions"
      },
      { 
        text: "Ethereum",
        to: "https://en.wikipedia.org/wiki/Ethereum"
      },
    ]
  }
];

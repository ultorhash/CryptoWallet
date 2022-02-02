import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { FooterIconStyle } from './styled-footer';

export const footerBoxesData: any[] = [
  {
    title: "Partners",
    partners: [
      {
        logo: './metamask.svg',
        name: 'MetaMask'
      },
      {
        logo: './blockchain.svg',
        name: 'Blockchain'
      }
    ]
  },
  {
    title: "Contact",
    socials: [
      { icon: <AiFillGithub style={FooterIconStyle} />, to: "https://github.com/ultorhash/ultorhash" },
      { icon: <AiFillLinkedin style={FooterIconStyle} />, to: "https://www.linkedin.com" }
    ]
  },
  {
    title: "Links",
    data: [
      { text: "Home", to: "/" },
      { text: "MetaMask", to: "https://metamask.io" },
      { text: "About", to: "/about" },
      { text: "Blockchain", to: "https://en.wikipedia.org/wiki/Blockchain" },
      { text: "Transactions", to: "/transactions" },
      { text: "Ethereum", to: "https://en.wikipedia.org/wiki/Ethereum" },
    ]
  }
];

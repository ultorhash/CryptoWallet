import React, { FC, useState } from "react";
import {
  NavbarContainer,
  MenuLink,
  Logo,
  Menu,
  Hamburger,
  NavbarIconStyle
} from "./styled-navbar";
import { navbarLinks } from "./navbar.data";
import { INavbarLink } from "./navbar.interface";
import { IconImgSmall } from "../../global-styles/styled-icons";
import { FaHamburger } from 'react-icons/fa';

export const Navbar: FC = () => {

  const [isOpen, setIsOpen] = useState<boolean>(false);
  
  return (
    <NavbarContainer>
      <Logo to="/">
        Crypto Wallet
        <IconImgSmall
          src="./ethereum.svg"
          alt="metamask"
        />
      </Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <FaHamburger style={NavbarIconStyle} />    
      </Hamburger>
      <Menu isOpen={isOpen}>
        {navbarLinks.map((item: INavbarLink, index: number) => {
          return (
            <MenuLink
              key={index}
              to={item.path}
            >
              {item.name}
            </MenuLink>
          )
        })}
      </Menu>
    </NavbarContainer>
  )
}
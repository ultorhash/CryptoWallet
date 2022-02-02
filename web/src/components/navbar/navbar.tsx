import React, { FC } from "react";
import {
  NavbarContainer,
  NavMenu,
  NavbarLink
} from "./styled-navbar";
import { navbarLinks } from "./navbar.data";
import { INavbarLink } from "./navbar.interface";

export const Navbar: FC = () => {
  return (
    <NavbarContainer>
      <NavMenu>
        {navbarLinks.map((link: INavbarLink, index: number) => {
          return (
            <NavbarLink
              key={index}
              to={link.path}
            >
              {link.name}
            </NavbarLink>
          );
        })}
      </NavMenu>
    </NavbarContainer>
  )
}
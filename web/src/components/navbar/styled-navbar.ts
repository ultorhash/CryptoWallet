import styled, { CSSProperties } from "styled-components";
import { Link } from "react-router-dom";
import { Colors } from "../../colors/colors";
import { IMenuProps } from './navbar.interface';

export const NavbarContainer = styled.nav`
  width: 100%;
  height: 80px;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  position: fixed;
  top: 0;
  background-color: ${Colors.Black};
  z-index: 100;
`;

export const Logo = styled(Link)`
  padding: 1rem;
  color: ${Colors.Gray300};
  text-decoration: none;
  letter-spacing: 0.1rem;
  transition: all 0.2s ease-in;

  &:hover {
    color: ${Colors.White}
  }
`;

export const Menu = styled.div<IMenuProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    display: ${props => props.isOpen ? "flex" : "none"};
    width: 100%;
    position: fixed;
    flex-direction: column;
    top: 80px;
    left: 0;
    background-color: ${Colors.Black};
  }
`;

export const MenuLink = styled(Link)`
  padding: 1rem 1.5rem;
  margin: 0 10px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: ${Colors.Gray300};
  transition: all 0.2s ease-in;
  font-size: 0.9rem;
  letter-spacing: 2px;

  &:hover {
    color: ${Colors.White}
  }
`;

export const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const NavbarIconStyle: CSSProperties = {
  color: Colors.White,
  width: '30px',
  height: '30px'
}

import styled from "styled-components";
import { Link } from "react-router-dom";
import { Colors } from "../../colors/colors";

export const NavbarContainer = styled.div`
  width: 100%;
  background-color: ${Colors.Gray900};
  height: 70px;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
  position: fixed;
  top: 0;
`;

export const NavbarLink = styled(Link)`
  color: ${Colors.Gray200};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
`;
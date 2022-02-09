import { Link } from "react-router-dom";
import styled, { CSSProperties } from "styled-components";
import { Colors } from "../../colors/colors";

export const FooterContainer = styled.footer`
  background-color: orange;
  width: 100%;
  overflow: hidden;
  background-color: ${Colors.Black};
  padding: 10px;
`;

export const FooterBoxes = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const InfoBox = styled.div`
  width: 300px;
  height: 150px;
  color: ${Colors.White};
  text-align: center;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  h3 {
    font-weight: 600;
    margin-bottom: 10px;
  }
`;

export const InfoBoxContent = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
`;

export const FooterLinkLocal = styled(Link)`
  color: ${Colors.Gray400};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`;

export const FooterLinkWebsite = styled.a`
  color: ${Colors.Gray400};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`;

export const FooterSummary = styled.div`
  height: 30px;
  color: ${Colors.Gray300};
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FooterSocial = styled.a`
  margin: 0 10px;

  &:visited {
    color: ${Colors.White}
  }
`;

export const FooterPartnerWrapper = styled.div`
  margin: 0 10px;
`;

export const FooterIconStyle: CSSProperties = {
  width: '30px',
  height: '30px'
};

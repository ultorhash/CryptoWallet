import { Link } from "react-router-dom";
import styled, { CSSProperties } from "styled-components";
import { Colors } from "../../colors/colors";
import { FlexContainer, HalfBox } from "../../global-styles/styled-shared";
import { ICardProps } from "./home.interface";

export const HomeContainer = styled(FlexContainer)`
  width: 100%;
  height: 100%;
  display: flex;
  margin-top: 80px;
  flex-direction: column;
  justify-content: center;
`;

export const BannerWrapper = styled(FlexContainer)`
  height: 700px;
  background-color: ${Colors.Gray900};

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;

    h1 {
      margin-top: 20px;
    }
  }
`;

export const LogoColumn = styled(HalfBox)`
  img {
    width: 80%;
    height: 80%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const WelcomeColumn = styled(HalfBox)`
  text-align: center;

  h1 {
    color: ${Colors.Gray100};
  }

  p {
    color: ${Colors.Gray200};
    line-height: 30px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const GetStarted = styled(Link)`
  width: 200px;
  border-radius: 10px;
  height: 70px;
  margin-top: 20px;
  background-color: ${Colors.Blue800};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${Colors.White};
  font-size: 1.3rem;
  text-decoration: none;
  transition: all 0.1s ease-in;

  &:hover {
    background-color: ${Colors.Blue700};
  }
`;

export const UsageWrapper = styled(FlexContainer)`
  padding: 40px;
  justify-content: space-evenly;
  background-color: ${Colors.Gray900};

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Card = styled.div<ICardProps>`
  width: 350px;
  height: 300px;
  margin: 10px;
  position: relative;
  border: 3px solid ${Colors.Gray900};
  border-radius: 20px;
  text-align: center;
  background-image: url(${props => props.imageUrl});
  background-size: 80% 80%;
  background-repeat: no-repeat;
  background-position: center center;
  background-opacity: 0.5;
  box-shadow: inset 0px 0px 270px 3px ${Colors.Gray400};
`;

export const CardTitle = styled.div`
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;

  h2 {
    text-wrap: wrap;
    color: ${Colors.Orange300}
  }
`;

export const CardContent = styled.div`
  width: 100%;
  height: 140px;
  padding: 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 1.1rem;

  p {
    line-height: 25px;
  }
`;

export const CardNumber = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 10px;
  bottom: 10px;
  border-radius: 20px;
  padding: 10px;
  background-color: ${Colors.Gray800};

  span {
    text-align: center;
    font-weight: 600;
    font-size: 1.2rem;
    color: ${Colors.Orange900}
  }
`;

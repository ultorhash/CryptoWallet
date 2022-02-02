import React, { FC } from "react";
import { IconImgSmall } from "../../global-styles/styled.icons";
import { steps } from "./home.data";
import {
  BannerWrapper,
  HomeContainer,
  BannerColumn,
  ArticleWrapper,
  StepsWrapper,
  Step,
  StepsImageWrapper
} from './styled-home';

export const Home: FC = () => {
  return (
    <HomeContainer>
      <BannerWrapper>
        <BannerColumn>
          <img
            src="./ethereum.svg"
            alt="logo"
          />
        </BannerColumn>
        <BannerColumn>
          <h1>Welcome to Crypto Wallet</h1>
          <p>Manage your ethereum across the blockchain</p>
          <p>
            by using MetaMask.
            <IconImgSmall
              src="./metamask.svg"
              alt="metamask"
            />
          </p>
        </BannerColumn>
      </BannerWrapper>
      <ArticleWrapper>
        <StepsWrapper>
          {steps.map((item: any, index: number) => {
            return (
              <Step key={index}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                {item.icon}
              </Step>
            )
          })}
        </StepsWrapper>
        <StepsImageWrapper>
          <h2>How it actually works?</h2>
          <img
            src="./payment.svg"
            alt="payment"
          />
        </StepsImageWrapper>
      </ArticleWrapper>
    </HomeContainer>
  )
}
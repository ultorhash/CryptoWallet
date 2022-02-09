import React, { FC } from "react";
import { cards } from './home.data';
import { IconImgSmall } from "../../global-styles/styled-icons";
import { ICardData } from "./home.interface";
import {
  HomeContainer,
  LogoColumn,
  WelcomeColumn,
  BannerWrapper,
  UsageWrapper,
  Card,
  CardTitle,
  CardNumber,
  CardContent,
  GetStarted
} from './styled-home';

export const Home: FC = () => {
  return (
    <HomeContainer>
      <BannerWrapper>
        <LogoColumn>
          <img src="ethereum.svg" alt="logo" />
        </LogoColumn>
        <WelcomeColumn>
          <h1>Welcome to Crypto Wallet</h1>
          <p>Manage your Ethereum easy way</p>
          <GetStarted to="/transactions">
            Get started
            <IconImgSmall src="metamask.svg" />
          </GetStarted>
        </WelcomeColumn>
      </BannerWrapper>
      <UsageWrapper>
        {cards.map((card: ICardData, index: number) => {
          return (
            <Card
              key={index}
              imageUrl={card.imageUrl}
            >
              <CardTitle>
                <h2>{card.title}</h2>
              </CardTitle>
              <CardContent>
                <p>{card.description}</p>
              </CardContent>
              <CardNumber>
                <span>{index + 1}</span>
              </CardNumber>
            </Card>
          )
        })}
      </UsageWrapper>
    </HomeContainer>
  )
}
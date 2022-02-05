import React, { FC } from "react";
import {
  FooterBoxes,
  FooterContainer,
  FooterLinkLocal,
  FooterLinkWebsite,
  FooterPartnerWrapper,
  FooterSocial,
  FooterSummary,
  InfoBox,
  InfoBoxContent
} from "./styled-footer";
import { footerBoxesData } from "./footer.data";
import { FooterIconStyle } from './styled-footer';

export const Footer: FC = () => {

  const checkUrl = (url: string): boolean => {
    if (!url) {
      return false;
    } else {
      return url.startsWith("/");
    }
  }

  return (
    <FooterContainer>
      <FooterBoxes>
        {footerBoxesData.map((box: any, index: number) => {
          return (
            <InfoBox key={index}>
              <h3>{box.title}</h3>
              <InfoBoxContent>
                {box.partners?.map((item: any, index: number) => {
                  return (
                    <FooterPartnerWrapper key={index}>
                      <img
                        style={FooterIconStyle}
                        src={item.logo}
                      />
                      <p key={index}>{item.name}</p>
                    </FooterPartnerWrapper>
                  )
                })}
              </InfoBoxContent>
              <InfoBoxContent>
                {box.socials?.map((item: any, index: number) => {
                  return (
                    <FooterSocial
                      key={index}
                      href={item.to}
                    >
                      {item.icon}
                    </FooterSocial>
                  )
                })}
              </InfoBoxContent>
              <InfoBoxContent>
                {box.data?.map((item: any, index: number) => {
                  if (checkUrl(item.to)) {
                    return (
                      <FooterLinkLocal
                        key={index}
                        to={item.to}
                      >
                        {item.text}
                      </FooterLinkLocal>
                    )
                  } else {
                    return (
                      <FooterLinkWebsite
                        key={index}
                        href={item.to}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.text}
                      </FooterLinkWebsite>
                    )
                  }
                })}
              </InfoBoxContent>
            </InfoBox>
          );
        })}
      </FooterBoxes>
      <FooterSummary>
        Crypto Wallet 2022-2022. All rights reserved &reg;
      </FooterSummary>
    </FooterContainer>
  )
}
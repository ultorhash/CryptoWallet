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
import {
  IFooterData,
  ILink,
  IPartner,
  ISocial
} from "./footer.interface";
import { footerBoxesData } from "./footer.data";
import { FooterIconStyle } from './styled-footer';

export const Footer: FC = (): JSX.Element => {

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
        {footerBoxesData.map((box: IFooterData, index: number) => {
          return (
            <InfoBox key={index}>
              <h3>{box.title}</h3>
              <InfoBoxContent>
                {box.partners?.map((item: IPartner, index: number) => {
                  return (
                    <FooterPartnerWrapper key={index}>
                      <img
                        style={FooterIconStyle}
                        src={item.logoUrl}
                        alt={item.logoAlt}
                      />
                      <p key={index}>{item.name}</p>
                    </FooterPartnerWrapper>
                  )
                })}
              </InfoBoxContent>
              <InfoBoxContent>
                {box.socials?.map((item: ISocial, index: number) => {
                  return (
                    <FooterSocial
                      key={index}
                      href={item.to}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.icon}
                    </FooterSocial>
                  )
                })}
              </InfoBoxContent>
              <InfoBoxContent>
                {box.links?.map((item: ILink, index: number) => {
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
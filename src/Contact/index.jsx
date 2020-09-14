import React from "react";
import { PageHeader } from "../shared/Features";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { MarginedContainer, SectionContainer } from "../shared/Layout";
import { DarkAndLightText } from "../shared/Type";
import { mqNew } from "../theme";

import teamImage from "../assets/pop_band.jpg";

const MedHeader = styled.div`
  ${(p) => p.theme.fonts.medium_header};
  padding-bottom: 20px;
`;

const ImageContainer = styled.div`
  grid-column: span 12;
  background-image: url(${(p) => p.bgImage});
  background-size: cover;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 20px 0;
`;

const ContactLocationContainer = styled.div`
  grid-column: span 6;
  padding: 20px 20px 20px 0;

  ${mqNew(900)} {
    grid-column: span 12;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
  }
`;

const InfoLine = styled.div`
  ${(p) => p.theme.fonts.body_text}
  padding-bottom: 3px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
`;

const InfoHeader = styled.span`
  /* min-width: 90px; */
  display: inline-block;
  font-weight: bold;
  grid-column: span 3;
`;

const InfoText = styled.span`
  grid-column: span 9;
`;

const Contact = (props) => {
  return (
    <>
      <PageHeader {...props} text={"Contact Us"} />
      <SectionContainer>
        <MarginedContainer>
          <ContactLocationContainer>
            <MedHeader>
              <DarkAndLightText text={"Contact Info"} />
            </MedHeader>
            <InfoLine>
              <InfoHeader>Email:</InfoHeader>
              <InfoText>yukonliteracy@yukonliteracy.com</InfoText>
            </InfoLine>
            <InfoLine>
              <InfoHeader>Phone:</InfoHeader>
              <InfoText>(867) 668-6535</InfoText>
            </InfoLine>
            <InfoLine>
              <InfoHeader>Fax:</InfoHeader>
              <InfoText>(867) 668-6518</InfoText>
            </InfoLine>
          </ContactLocationContainer>
          {/* <ContactLocationContainer>
            <ImageContainer bgImage={teamImage}>hello</ImageContainer>
          </ContactLocationContainer> */}
          <ContactLocationContainer>
            <MedHeader>
              <DarkAndLightText text={"Hours And Location"} />
            </MedHeader>
            <InfoLine>
              <InfoHeader>Hours:</InfoHeader>{" "}
              <InfoText>from 9-5, Monday to Friday</InfoText>
            </InfoLine>
            <InfoLine>
              <InfoHeader>Address:</InfoHeader>{" "}
              <InfoText>
                Suite 207-100 Main Street Whitehorse, YT Y1A 2A8
              </InfoText>
            </InfoLine>
          </ContactLocationContainer>
          <ContactLocationContainer>
            <MedHeader>
              <DarkAndLightText text={"Family Literacy Centre"} />
            </MedHeader>
            <InfoLine>
              <InfoHeader>Address:</InfoHeader>{" "}
              <InfoText>
                Suite 207-100 Main Street Whitehorse, YT Y1A 2A8
              </InfoText>
            </InfoLine>
            <InfoLine>
              <InfoHeader>Phone:</InfoHeader>
              <InfoText>(867) 668-8698</InfoText>
            </InfoLine>
          </ContactLocationContainer>
          <ContactLocationContainer>
            <MedHeader>
              <DarkAndLightText text={"Pioneer Hotel"} />
            </MedHeader>
            <InfoLine>
              <InfoHeader>Location:</InfoHeader>{" "}
              <InfoText>Shipyards Park</InfoText>
            </InfoLine>
            <InfoLine>
              <InfoHeader>Season:</InfoHeader>{" "}
              <InfoText>May to August</InfoText>
            </InfoLine>
            <InfoLine>
              <InfoHeader>Phone:</InfoHeader>{" "}
              <InfoText>(867) 336-8577</InfoText>
            </InfoLine>
          </ContactLocationContainer>
          <ImageContainer>
            <img src={teamImage} alt="" />
          </ImageContainer>
        </MarginedContainer>
      </SectionContainer>
    </>
  );
};

export default Contact;

// Pioneer Hotel - Shipyards Park
// May to August
// Phone: (867) 336-8577

// Family Literacy Centre
// 2nd Floor of the Canada Games Centre
// 200 Hamilton Blvd.
// Whitehorse, YT
// Y1A 0A6
// ​Phone: (867) 668-8698

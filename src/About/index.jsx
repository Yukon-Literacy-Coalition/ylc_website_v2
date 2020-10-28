import React from "react";
import { Link } from "@reach/router";
import { PageHeader } from "../shared/Features";
import styled from "@emotion/styled";
import { MarginedContainer, SectionContainer } from "../shared/Layout";
import { LargeButton } from "../shared/Features";
import { DarkAndLightText } from "../shared/Type";
import { mqNew } from "../theme";

import what1 from "../assets/whatWeDoA.jpg";
import what2 from "../assets/whatWeDoB.jpg";

const MediumHeader = styled.div`
  ${(p) => p.theme.fonts.medium_header};
  grid-column: span 12;
`;

const MedHeaderCentered = styled(MediumHeader)`
  text-align: center;
`;

const Body = styled.div`
  ${(p) => p.theme.fonts.body_text}
  font-weight: normal;
  grid-column: span 12;
`;

const CenteredBody = styled(Body)`
  grid-column-start: 2;
  grid-column-end: 12;
  /* text-align: center; */
`;

const AboutUs = ({ text }) => {
  return (
    <SectionContainer>
      <MarginedContainer>
        <MedHeaderCentered>
          <DarkAndLightText text={"About Us"} />
        </MedHeaderCentered>
        <CenteredBody>{text}</CenteredBody>
      </MarginedContainer>
    </SectionContainer>
  );
};

const ImageSection = styled(MarginedContainer)`
  min-height: 400px;
  direction: ${(p) => (p.rightAligned ? "rtl" : "ltr")};
  ${mqNew(900)} {
    direction: ltr;
    min-height: auto;
  }
  > * {
    direction: ltr;
  }
`;

const HeaderAndBody = styled.div`
  grid-column: span 6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${mqNew(900)} {
    grid-column: span 12;
    padding-top: 50px;
  }
`;

const SectionImage = styled.div`
  background: grey;
  grid-column: span 6;
  div {
    width: 100%;
    height: 400px;
    background-image: url(${(p) => p?.image});
    background-size: cover;
  }

  ${mqNew(900)} {
    grid-column: span 12;
    div {
      width: auto;
      height: 400px;
    }
  }
`;

const SectionBody = styled(Body)`
  padding-top: 15px;
`;

const SideSection = ({ text, header, rightAligned, image }) => {
  return (
    <SectionContainer>
      <ImageSection rightAligned={rightAligned}>
        <SectionImage image={image}>
          {/* <img src={image && image} alt="" /> */}
          <div />
        </SectionImage>
        <HeaderAndBody>
          <MediumHeader>
            <DarkAndLightText text={header} />
          </MediumHeader>
          <SectionBody>{text || "text needed"}</SectionBody>
        </HeaderAndBody>
      </ImageSection>
    </SectionContainer>
  );
};

const StatementContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 0;
`;

const StatementsTitle = styled.span`
  ${(p) => p.theme.fonts.small_header}
  padding: 0 20px;
`;

const StatementLink = (props) => {
  return (
    <SectionContainer>
      <StatementContainer>
        <StatementsTitle>Annual Statements</StatementsTitle>
        <Link to={"/about/statements"}>
          <LargeButton>Download Here</LargeButton>
        </Link>
      </StatementContainer>
    </SectionContainer>
  );
};

const AboutText =
  "Founded in 2004, the Yukon Literacy Coalition is a registered non-profit organization dedicated to improving the lives of the people of the north by providing accessible and culturally appropriate learning opportunities. We serve the territory in many ways including: Literacy and Essential Skills (LES) embedded workshops and programs conducting and participating in regional and national community-based research projects operating the Family Literacy Centre (FLC) at the Canada Games Centre in Whitehorse and running a vibrant Yukon-wide outreach program We work in partnership with First Nation governments, Yukon government, municipalities and other non-profit organizations.";

const MissionText =
  "We are a society of people dedicated to improving the quality of life of all Yukoners. We do this by building the foundational skills required for lifelong learning; acknowledging we are all adapting to an ever-changing world.";

const AllianceText =
  "YLC has a long-standing formal collaboration with Ilitaqsiniq Nunavut Literacy Council and NWT Literacy Council working together for the same purpose, the same people, using the same approach. Together, we maximize our collective knowledge, skills and experiences to have a greater impact on people of the North.";

const WhatWeDo = (props) => (
  <div>
    <PageHeader {...props} text={"What We Do"} />
    <AboutUs text={AboutText} />
    <SideSection
      text={MissionText}
      header={"Our Mission Statement"}
      rightAligned={true}
      image={what1}
    />
    <SideSection
      text={AllianceText}
      header={"Our Northern Alliance"}
      image={what2}
    />
    <StatementLink />
  </div>
);

export default WhatWeDo;

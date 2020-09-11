import React from "react";
import styled from "@emotion/styled";
import { MarginedContainer as importMargined } from "../../shared/Layout";
import { mq } from "../../theme";

import kayaking from "../../assets/kayaking.jpg";

// NODE-SAFE IMPORTS
let TextLoop = undefined;
if (typeof document !== "undefined" && typeof window !== "undefined") {
  TextLoop = require("react-text-loop").default;
}

const SmallHeader = styled.div`
  ${(p) => p.theme.fonts.small_header};
  display: inline;
  ${mq[1]} {
    font-size: 20px;
  }
`;

const DarkSmall = styled(SmallHeader)`
  color: ${(p) => p.theme.colors.ylc_blue};
`;

const BigHeader = styled.div`
  ${(p) => p.theme.fonts.big_header}
  color: white;

  ${mq[3]} {
    font-size: 65px;
  }
  ${mq[2]} {
    font-size: 50px;
  }
  ${mq[1]} {
    font-size: 30px;
  }
  ${mq[0]} {
    font-size: 20px;
  }
`;

const DarkBig = styled(BigHeader)`
  color: ${(p) => p.theme.colors.ylc_blue};
  width: 100%;
`;

const MarginedContainer = styled(importMargined)`
  display: flex;
  flex-direction: column;
`;

const HeroContainer = styled.div`
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.05),
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0.1),
      rgba(212, 6, 250, 0.1)
    ),
    url(${kayaking});
  background-size: cover;
  background-position: top;
  padding: 150px 0;
  perspective: 10px;
  height: 800px;
  width: 100%;
`;

const displayText = ({ shuffledWords }) => (
  <DarkBig>
    {TextLoop ? (
      <TextLoop
        interval={2500}
        fade={false}
        mask={true}
        // adjustingSpeed={1000}
        springConfig={{
          stiffness: 300,
          damping: 80,
        }}
        children={shuffledWords}
        // children={["Hunting and Gathering"]}
      />
    ) : (
      "Learning"
    )}
  </DarkBig>
);

const Hero = ({ words }) => {
  const shuffledWords = words.sort(() => Math.random() - 0.5);
  return (
    <HeroContainer>
      <MarginedContainer>
        <div>
          <SmallHeader>At the </SmallHeader>
          <DarkSmall>Yukon Literacy Coalition</DarkSmall>
        </div>
        <DarkBig>Literacy is</DarkBig>
        {displayText({ shuffledWords })}
      </MarginedContainer>
    </HeroContainer>
  );
};

export default Hero;

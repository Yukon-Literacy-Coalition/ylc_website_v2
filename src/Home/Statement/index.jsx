import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { MarginedContainer, SectionContainer } from "../../shared/Layout";
import { LargeButton } from "../../shared/Features";
import { Link } from "@reach/router";
import { mq } from "../../theme";

const CatchyStatement = styled.div`
  ${(p) => p.theme.fonts.small_header}
  grid-column: span 4;
  ${mq[2]} {
    grid-column: span 12;
  }
`;

const StatementButton = styled.div`
  grid-column: span 8;
  ${mq[2]} {
    grid-column: span 12;
  }
`;
const OtherStatement = styled.div`
  ${(p) => p.theme.fonts.body_text}
  padding-top: 20px;
`;

const sectionStyles = (theme) => css`
  background: ${theme.colors.light_accent};
`;

const ButtonContainer = styled.div`
  width: 100%;
  text-align: center;
  padding-top: 20px;
`;

const Statement = (props) => {
  return (
    <SectionContainer css={sectionStyles}>
      <MarginedContainer>
        <CatchyStatement>
          We are a society of people dedicated to improving the quality of life
          of all Yukoners.
        </CatchyStatement>
        <StatementButton>
          <OtherStatement>
            We are passionate, experienced educators who are dedicated to
            developing and enhancing programs to empower learners of all ages.
            We offer Literacy and Essential Skills (LES) embedded workshops and
            programs at no cost throughout the Yukon.
          </OtherStatement>
          <ButtonContainer>
            <Link to={"/about"}>
              <LargeButton>Learn More</LargeButton>
            </Link>
          </ButtonContainer>
          <ButtonContainer>
            <Link to={"/aboutdd"}>
              <LargeButton>Learn More BRoken</LargeButton>
            </Link>
          </ButtonContainer>
        </StatementButton>
      </MarginedContainer>
    </SectionContainer>
  );
};

export default Statement;

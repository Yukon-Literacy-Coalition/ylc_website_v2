import React from "react";
import { StyledMarkdown, LargeButton } from "../../shared/Features";
import { MarginedContainer, SectionContainer } from "../../shared/Layout";
import { css } from "@emotion/core";
import styled from "@emotion/styled";

const Title = styled.div`
  grid-column: span 13;
  text-align: center;
  ${(p) => p.theme.fonts.small_header}
`;

const Body = styled.div`
  grid-column: span 13;
  text-align: center;
  ${(p) => p.theme.fonts.body_text}
`;

const ButtonContainer = styled.div`
  grid-column: span 13;
  text-align: center;
`;

const sectionStyles = (theme) => css`
  background: ${theme.colors.medium_grey};
`;

const Announcement = ({ announcement }) => {
  return (
    <SectionContainer css={sectionStyles}>
      <MarginedContainer>
        <Title>{announcement?.title}</Title>
        {/* <Body>{announcement?.body}</Body> */}
        <Body>
          <StyledMarkdown
            source={announcement?.body || "Body text needed"}
            escapeHtml={false}
          />
        </Body>
        {announcement?.link && (
          <ButtonContainer>
            <a href={announcement.link} target="_blank" rel="noreferrer">
              <LargeButton>Learn More</LargeButton>
            </a>
          </ButtonContainer>
        )}
      </MarginedContainer>
    </SectionContainer>
  );
};

export default Announcement;

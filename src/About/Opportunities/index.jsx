import React from "react";
import { withRouteData } from "react-static";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { MarginedContainer, SectionContainer } from "../../shared/Layout";
import { LargeButton, PageHeader } from "../../shared/Features";

const sectionStyles = (theme) => css`
  background: ${theme.colors.light_accent};
  height: 100%;
`;

const JobOpportunity = styled.div`
  grid-column-start: 2;
  grid-column-end: 12;
  background: white;
  border: ${(p) => p.theme.colors.medium_accent} 1px solid;
  padding: 20px;
  border-radius: 2px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const OppText = styled.div`
  ${(p) => p.theme.fonts.body_text_bold}
`;

const Opportunities = ({ jobOpportunities }) => {
  const opportunitiesArray =
    (!!jobOpportunities?.length && jobOpportunities) || [];
  return (
    <div>
      <PageHeader text={"Job Opportunities"} />
      <SectionContainer css={sectionStyles}>
        <MarginedContainer>
          {!!opportunitiesArray.length ? (
            opportunitiesArray.map((opp, i) => (
              <JobOpportunity key={opp.title + i}>
                <OppText>{opp.title}</OppText>
                <a href={opp.pdf} download>
                  <LargeButton>Download PDF</LargeButton>
                </a>
              </JobOpportunity>
            ))
          ) : (
            <JobOpportunity>
              <div>No current opportunities</div>
            </JobOpportunity>
          )}
        </MarginedContainer>
      </SectionContainer>
    </div>
  );
};

export default withRouteData(Opportunities);

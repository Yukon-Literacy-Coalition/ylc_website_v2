import React from "react";
import styled from "@emotion/styled";
import { MarginedContainer, SectionContainer } from "../../shared/Layout";
import { LargeButton, PageHeader } from "../../shared/Features";
import { DarkAndLightText } from "../../shared/Type";

const approachCopy =
  "We use a non-formal strength-based approach to meet the needs of learners. We believe in the importance of tapping into and building on the natural talents of participants by providing structured learning in a flexible way. We deliberately embed Literacy and Essential Skills (LES) into non-formal learning or training. Content, culture and LES are three strands braided seamlessly together to make a successful program.";

const approachCopy2 =
  "We deliver embedded LES programs, using non- formal learning which is structured learning planned in a flexible way. Our non- formal learning includes using a strength- based approach, making our programs learner centred, using clear language, offering a safe and respectful environment, making the programs accessible, and inclusion of healing and wellness.";

const approachCopy3 = "We are all learners.";

const litSkillsCopy =
  "LES are the skills that people need and use in all aspects of their lives including the workplace. These skills provide a foundation for learning other skills for work and life, and help workers advance in their jobs and adapt to changes in their workplaces.";

const litSkillsCopy2 = "For a breakdown of the nine essential  skills ";

const StyledCopy = styled.div`
  padding: 10px 0;
  grid-column-start: 2;
  grid-column-end: 12;
  ${(p) => p.theme.fonts.body_text};
`;

const CenteredCopy = styled(StyledCopy)`
  text-align: center;
`;

const MediumHeader = styled.div`
  ${(p) => p.theme.fonts.medium_header};
  grid-column: span 12;
`;

const MedHeaderCentered = styled(MediumHeader)`
  text-align: center;
`;

const ButtonContainer = styled.span`
  display: inline-block;
  padding: 10px;
`;

const Approach = (props) => {
  return (
    <div>
      <PageHeader text={"Our Approach"} />
      <SectionContainer>
        <MarginedContainer>
          <MedHeaderCentered>
            <DarkAndLightText text={"At the Yukon Literacy Coalition"} />
          </MedHeaderCentered>
          <StyledCopy>{approachCopy}</StyledCopy>
          <StyledCopy>{approachCopy2}</StyledCopy>
          <CenteredCopy>{approachCopy3}</CenteredCopy>
        </MarginedContainer>
      </SectionContainer>
      <SectionContainer>
        <MarginedContainer>
          <MedHeaderCentered>
            <DarkAndLightText text={"Literacy and Essential Skills"} />
          </MedHeaderCentered>
          <StyledCopy>{litSkillsCopy}</StyledCopy>
          <CenteredCopy>
            {litSkillsCopy2}{" "}
            <ButtonContainer>
              <a href="http://www.canada.ca/en/employment-social-development/programs/essential-skills/definitions.html">
                <LargeButton>Click Here</LargeButton>
              </a>
            </ButtonContainer>
          </CenteredCopy>
        </MarginedContainer>
      </SectionContainer>
    </div>
  );
};

export default Approach;

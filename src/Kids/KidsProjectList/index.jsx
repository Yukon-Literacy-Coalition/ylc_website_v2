import React, { useState } from "react";
import { withRouteData } from "react-static";
import Project from "../../shared/Project";
import { MarginedContainer, SectionContainer } from "../../shared/Layout";
import ProjectHighlight from "../../shared/ProjectHighlight";
import { LargeButton } from "../../shared/Features";
import styled from "@emotion/styled";

const ButtonContainer = styled.div`
  grid-column: span 12;
  padding: 20px 0;
  text-align: center;
`;

export const KidsProjectList = (props) => {
  const [isArchived, setIsArchived] = useState(false);
  const { about, projects = [] } = props;
  const currentProjects = projects.filter(
    (proj) => proj.isArchived === isArchived
  );
  return (
    <>
      <Project {...about} {...props} />
      <SectionContainer>
        <MarginedContainer>
          {!!currentProjects?.length &&
            currentProjects.map((resource, i) => (
              <ProjectHighlight
                project={{ ...resource }}
                projectslength={currentProjects.length}
                key={resource.title + i}
              />
            ))}
        </MarginedContainer>
        <MarginedContainer>
          <ButtonContainer>
            <LargeButton onClick={() => setIsArchived(!isArchived)}>
              {isArchived ? "Show Current" : "Show Archived"}
            </LargeButton>
          </ButtonContainer>
        </MarginedContainer>
      </SectionContainer>
    </>
  );
};

export default withRouteData(KidsProjectList);

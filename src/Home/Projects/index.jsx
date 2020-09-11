import React from "react";
import { MarginedContainer, SectionContainer } from "../../shared/Layout";
import { SmallSectionTitle } from "../../shared/Type";

import ProjectHighlight from "../../shared/ProjectHighlight";

const Projects = ({ projects }) => {
  return (
    <SectionContainer>
      <MarginedContainer>
        <SmallSectionTitle>
          <em>Project Highlights</em>
        </SmallSectionTitle>
      </MarginedContainer>
      <MarginedContainer>
        {!!projects?.length &&
          projects.map((project, i) => {
            return <ProjectHighlight project={project} key={"proj" + i} />;
          })}
      </MarginedContainer>
    </SectionContainer>
  );
};

export default Projects;

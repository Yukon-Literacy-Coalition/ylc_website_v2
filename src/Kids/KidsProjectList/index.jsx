import React, { useState } from "react";
import { withRouteData } from "react-static";
import Project from "../../shared/Project";
import { MarginedContainer, SectionContainer } from "../../shared/Layout";
import ProjectHighlight from "../../shared/ProjectHighlight";

export const Storytime = (props) => {
  const [isArchived, setIsArchived] = useState(false);
  const { about, projects } = props;
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
                projectsLength={currentProjects.length}
                key={resource.title + i}
              />
            ))}
        </MarginedContainer>
        <MarginedContainer>
          <button onClick={() => setIsArchived(!isArchived)}>
            {isArchived ? "Show Current" : "Show Archived"}
          </button>
        </MarginedContainer>
      </SectionContainer>
    </>
  );
};

export default withRouteData(Storytime);

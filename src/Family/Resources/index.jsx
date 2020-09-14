import React from "react";
import { PageHeader } from "../../shared/Features";
import { withRouteData } from "react-static";
import { MarginedContainer, SectionContainer } from "../../shared/Layout";
import ProjectHighlight from "../../shared/ProjectHighlight";

const Resources = (props) => {
  const familyResources = props?.familyResources;
  return (
    <>
      <PageHeader {...props} text="Family Literacy Resources" />
      <SectionContainer>
        <MarginedContainer>
          {!!familyResources?.length &&
            familyResources.map((resource, i) => (
              <ProjectHighlight project={resource} key={resource.title + i} />
            ))}
        </MarginedContainer>
      </SectionContainer>
    </>
  );
};

export default withRouteData(Resources);

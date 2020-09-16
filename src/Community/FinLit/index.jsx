import React from "react";
import { withRouteData } from "react-static";
import { MarginedContainer } from "../../shared/Layout";
import {
  SectionHeader,
  HeaderTitle,
  DarkAndLightText,
} from "../../shared/Type";
import Project from "../../shared/Project";
import ProjectHighlight from "../../shared/ProjectHighlight";

export const FinLit = (props) => {
  const { onlineTools, financialLiteracy } = props;
  return (
    <>
      <Project {...financialLiteracy} {...props}>
        <SectionHeader>
          <HeaderTitle>
            <DarkAndLightText text={"Online Tools"} />
          </HeaderTitle>
        </SectionHeader>
        <MarginedContainer>
          {!!onlineTools?.length &&
            onlineTools.map((tool, i) => {
              return (
                <ProjectHighlight project={tool} key={tool.title + i} title />
              );
            })}
        </MarginedContainer>
      </Project>
    </>
  );
};

export default withRouteData(FinLit);

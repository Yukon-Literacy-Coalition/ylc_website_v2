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

export const FinLit = ({ onlineTools, financialLiteracy }) => {
  return (
    <>
      <Project
        body={financialLiteracy?.body}
        title={financialLiteracy?.title}
        subTitle={financialLiteracy?.subTitle}
        link={financialLiteracy?.link}
        linkText={financialLiteracy?.linkText}
        images={financialLiteracy?.images}
      >
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

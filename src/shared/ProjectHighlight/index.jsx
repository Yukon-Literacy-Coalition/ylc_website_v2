import React from "react";
import { LargeButton, StyledMarkdown } from "../../shared/Features";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { lighten } from "polished";
import { DarkAndLightText } from "../Type";
import { mq } from "../../theme";
import { Link } from "@reach/router";
import { CharCount } from "../Layout";

const SingleProject = css`
  grid-column-start: 4;
  grid-column-end: 10;
  ${mq[3]} {
    grid-column-start: 3;
    grid-column-end: 11;
  }
  ${mq[2]} {
    grid-column: span 12;
  }
`;

const ProjectContainer = styled.div`
  transition: all 0.2s;
  /* padding: 10px 0; */
  grid-column: span 4;
  background: ${(p) => lighten("0.17", p.theme.colors.medium_accent)};
  border-radius: 3px;
  box-shadow: 1px 0px 4px 1px lightgray;
  display: flex;
  flex-direction: column;
  /* &:hover {
    ${(p) => p.theme.hover.box};
  } */
  ${mq[3]} {
    grid-column: span 6;
  }
  ${mq[2]} {
    grid-column: span 12;
  }
  ${(p) => p.projectslength === 1 && SingleProject}
`;

const ProjectContainerLink = styled(Link)`
  transition: all 0.2s;
  /* padding: 10px 0; */
  grid-column: span 4;
  background: ${(p) => lighten("0.17", p.theme.colors.medium_accent)};
  border-radius: 3px;
  box-shadow: 1px 0px 4px 1px lightgray;
  display: flex;
  flex-direction: column;
  &:hover {
    ${(p) => p.theme.hover.box};
  }
  ${mq[3]} {
    grid-column: span 6;
  }
  ${mq[2]} {
    grid-column: span 12;
  }
  ${(p) => p.projectslength === 1 && SingleProject}
`;

// IMAGE

const ImgContainer = styled.div`
  background-color: ${(p) => (p.isImage ? "white" : "grey")};
  height: 286px;
  border-radius: 3px 3px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-image: url(${(p) => p?.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const ProjImg = styled.img`
  align-self: flex-start;
  flex-shrink: 0;
  min-width: auto;
  min-height: 100%;
  max-height: 100%;
  border-radius: 3px;
`;

const BodyContainer = styled.div`
  /* min-height: 250px; */
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ProjTitle = styled.div`
  ${(p) => p.theme.fonts.extra_small_header};
  padding: 20px 0;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const ProjBody = styled.div`
  padding: 0 10px 10px;
  ${(p) => p.theme.fonts.body_text}
  font-size: 14px;
  position: relative;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 10px 20px;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const ProjectHighlight = (props) => {
  const isCMS = props?.isCMS;
  const project = props?.project;
  const projectslength = props?.projectslength;

  let image = project?.image || project?.thumbnail;
  let body = project?.body || project?.description || "Body text needed";

  const Content = () => (
    <>
      <ImgContainer isImage={image} image={image} />
      <BodyContainer>
        <div>
          <ProjTitle>
            <DarkAndLightText text={project?.title || "Project Title"} />
          </ProjTitle>
          <ProjBody>
            <StyledMarkdown source={body} escapeHtml={false} />
            {isCMS && <CharCount markdownBody={body} />}
          </ProjBody>
        </div>
        <>
          {project?.link ? (
            <ButtonContainer>
              <a href={project.link} target="_blank" rel="noreferrer">
                <LargeButton>
                  {project?.btnText || project?.linkText || "Learn More"}
                </LargeButton>
              </a>
            </ButtonContainer>
          ) : (
            project?.file && (
              <ButtonContainer>
                <a href={project.file} download>
                  <LargeButton>
                    {project?.btnText || project?.linkText || "Download Here"}
                  </LargeButton>
                </a>
              </ButtonContainer>
            )
          )}
        </>
        <>
          {(!!project?.linkObject?.linkLocation?.length ||
            !!project?.downloadObject?.downloadLink?.length) && (
            <ButtonsWrapper>
              {project?.linkObject?.linkLocation && (
                <ButtonContainer>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={project?.linkObject?.linkLocation}
                  >
                    <LargeButton>
                      {project?.linkObject?.linkText || "Learn More"}
                    </LargeButton>
                  </a>
                </ButtonContainer>
              )}
              {project?.downloadObject?.downloadLink && (
                <ButtonContainer>
                  <a href={project?.downloadObject?.downloadLink} download>
                    <LargeButton>
                      {project?.downloadObject?.downloadText || "Download Here"}
                    </LargeButton>
                  </a>
                </ButtonContainer>
              )}
            </ButtonsWrapper>
          )}
          {/* {!!project?.localLink && (
            <ButtonsWrapper>
              <Link to={project.localLink}>Let's go</Link>
            </ButtonsWrapper>
          )} */}
        </>
      </BodyContainer>
    </>
  );

  if (!!project.localLink) {
    return (
      <ProjectContainerLink
        to={project.localLink}
        projectslength={projectslength}
      >
        <Content />
      </ProjectContainerLink>
    );
  } else {
    return (
      <ProjectContainer projectslength={projectslength}>
        <Content />
      </ProjectContainer>
    );
  }
};

export default ProjectHighlight;

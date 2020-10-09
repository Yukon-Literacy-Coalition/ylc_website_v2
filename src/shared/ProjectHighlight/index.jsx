import React from "react";
import { LargeButton, StyledMarkdown } from "../../shared/Features";
import styled from "@emotion/styled";
import { lighten } from "polished";
import { DarkAndLightText } from "../Type";
import { mq } from "../../theme";

const ProjectContainer = styled.div`
  transition: all 0.2s;
  grid-column: span 4;
  background: ${(p) => lighten("0.17", p.theme.colors.medium_accent)};
  border-radius: 3px;
  box-shadow: 0px 2px 2px lightgray;
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
`;

// IMAGE

const ImgContainer = styled.div`
  background-color: ${(p) => (p.isImage ? "transparent" : "grey")};
  height: 286px;
  border-radius: 3px 3px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-image: url(${(p) => p?.image});
  background-size: contain;
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
  text-align: center;
`;

const ProjBody = styled.div`
  padding: 0 10px 10px;
  ${(p) => p.theme.fonts.body_text}
  font-size: 14px;
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

const ProjectHighlight = ({ project }) => {
  console.log({
    linkthing: project?.downloadObject?.downloadLink?.length,
    name: project?.downloadObject?.downloadLink,
  });
  return (
    <ProjectContainer>
      <ImgContainer isImage={project?.image} image={project?.image} />
      {/* {project?.image && <ProjImg src={project?.image} />} */}
      {/* </ImgContainer> */}
      <BodyContainer>
        <div>
          <ProjTitle>
            <DarkAndLightText text={project?.title || "Project Title"} />
          </ProjTitle>
          {/* <ProjBody>{project?.body || "Body text"}</ProjBody> */}
          <ProjBody>
            <StyledMarkdown
              source={project?.body || "Body text needed"}
              escapeHtml={false}
            />
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
                    href={project?.linkObject?.linkLocation}
                    target="_blank"
                    rel="noreferrer"
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
        </>
      </BodyContainer>
    </ProjectContainer>
  );
};

export default ProjectHighlight;

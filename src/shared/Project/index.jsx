import React from "react";
import { withRouteData } from "react-static";
// import Moment from "react-moment";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import {
  MarginedContainer,
  SectionContainer as SectionContainerImport,
  BodyText as BodyTextImport,
} from "../../shared/Layout";
import { PageHeader, LargeButton, StyledMarkdown } from "../../shared/Features";
import Carousel from "../../shared/Carousel";
import ProjectHighlight from "../../shared/ProjectHighlight";
import {
  SectionHeader as SectionHeaderImport,
  HeaderTitle,
  DarkAndLightText,
} from "../../shared/Type";
import { mq } from "../../theme";

const SectionHeader = styled(SectionHeaderImport)`
  padding: 0px 10px;
  padding-bottom: 0;
  ${mq[1]} {
    padding-top: 0;
    text-align: center;
  }
`;

const BodyText = styled(BodyTextImport)`
  /* margin-top: 20px; */
`;

const LinksContainer = styled.div`
  grid-column: span 12;
  display: flex;
  justify-content: center;
`;

const StyledLink = styled.a`
  text-align: center;
  padding: 0 5px;
`;

const buttonMarginedStyles = css`
  padding-top: 20px;
`;

const SectionContainer = styled(SectionContainerImport)`
  padding-top: ${(p) => (p?.subTitle ? "0px" : "auto")};
  padding-bottom: 0;
`;

const Author = styled.div`
  text-align: center;
  ${(p) => p.theme.fonts.body_text_bold}
  padding-top: 5px;
`;

const ProjectPageContainer = styled.div`
  padding: 20px 0 50px;
`;

const ContentSection = ({
  subTitle,
  author,
  body,
  link,
  linkText,
  links,
  children,
  images,
  downloads,
  downloadText,
  resources,
}) => {
  return (
    <>
      {subTitle && (
        <SectionHeader>
          <HeaderTitle>
            <DarkAndLightText text={subTitle} />
            {author && <Author>{"by: " + author}</Author>}
          </HeaderTitle>
        </SectionHeader>
      )}
      <SectionContainer subTitle={subTitle}>
        {body && (
          <MarginedContainer>
            <BodyText>
              <StyledMarkdown
                source={body || "Body text needed"}
                escapeHtml={false}
              />
            </BodyText>
          </MarginedContainer>
        )}
        {(link || !!downloads?.length || !!links?.length) && (
          <MarginedContainer css={buttonMarginedStyles}>
            <LinksContainer>
              {link && (
                <StyledLink href={`${link}`} target="_blank" rel="noreferrer">
                  <LargeButton>{linkText || "See More"}</LargeButton>
                </StyledLink>
              )}
              {!!links?.length &&
                links.map((currentLink, i) => {
                  return (
                    <>
                      {currentLink?.linkObject?.linkLocation && (
                        <StyledLink
                          href={`${currentLink?.linkObject?.linkLocation}`}
                          target="_blank"
                          key={"linkLocation" + i}
                          rel="noreferrer"
                        >
                          <LargeButton>
                            {currentLink?.linkObject?.linkText || "Visit Here"}
                          </LargeButton>
                        </StyledLink>
                      )}
                    </>
                  );
                })}
              {!!downloads?.length &&
                downloads.map((dl, i) => {
                  return (
                    <>
                      {dl?.downloadObject?.downloadLink && (
                        <StyledLink
                          href={`${dl?.downloadObject?.downloadLink}`}
                          target="_blank"
                          rel="noreferrer"
                          key={dl.downloadObject.downloadLink + i}
                        >
                          <LargeButton>
                            {dl?.downloadObject?.downloadText ||
                              "Download Here"}
                          </LargeButton>
                        </StyledLink>
                      )}
                    </>
                  );
                })}
            </LinksContainer>
          </MarginedContainer>
        )}
        {children}
        {!!images?.length && <Carousel images={images} />}
        {!!resources?.length && (
          <MarginedContainer>
            {resources.map((project, i) => {
              return (
                <ProjectHighlight
                  project={project?.resourceObject}
                  key={"proj" + i}
                />
              );
            })}
          </MarginedContainer>
        )}
      </SectionContainer>
    </>
  );
};

const Project = (props) => {
  return (
    <>
      <PageHeader {...props} text={props?.title || "Title Needed"} />
      <ProjectPageContainer>
        {!props?.contentBlocks?.length && <ContentSection {...props} />}
        {!!props?.contentBlocks?.length &&
          props?.contentBlocks.map((block, i) => {
            return <ContentSection key={"block" + i} {...block?.contentBlock} />;
          })}
      </ProjectPageContainer>
    </>
  );
};

export default withRouteData(Project);

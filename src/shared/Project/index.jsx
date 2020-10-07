import React from "react";
import { withRouteData } from "react-static";
// import Moment from "react-moment";
import Markdown from "react-markdown";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import {
  MarginedContainer,
  SectionContainer as SectionContainerImport,
  BodyText as BodyTextImport,
} from "../../shared/Layout";
import { PageHeader, LargeButton } from "../../shared/Features";
import Carousel from "../../shared/Carousel";
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

const StyledMarkdown = styled(Markdown)`
  img {
    width: 100%;
  }
`;

const ContentSection = ({
  subTitle,
  author,
  body,
  link,
  linkText,
  children,
  images,
  download,
  downloadText,
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
        <MarginedContainer>
          <BodyText>
            <StyledMarkdown
              source={body || "Body text needed"}
              escapeHtml={false}
            />
          </BodyText>
        </MarginedContainer>
        {(link || download) && (
          <MarginedContainer css={buttonMarginedStyles}>
            <LinksContainer>
              {link && (
                <StyledLink href={`${link}`} target="_blank" rel="noreferrer">
                  <LargeButton>{linkText || "See More"}</LargeButton>
                </StyledLink>
              )}
              {download && (
                <StyledLink
                  href={`${download}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <LargeButton>{downloadText || "Download Here"}</LargeButton>
                </StyledLink>
              )}
            </LinksContainer>
          </MarginedContainer>
        )}
        {children}
        {!!images?.length && <Carousel images={images} />}
      </SectionContainer>{" "}
    </>
  );
};

const Project = (props) => {
  const {
    date,
    title,
    subTitle,
    body,
    images,
    children,
    link,
    linkText,
    author,
    contentBlocks,
  } = props;
  return (
    <>
      <PageHeader {...props} text={title || "Title Needed"} />
      <ProjectPageContainer>
        {!contentBlocks?.length && (
          <ContentSection
            {...{
              date,
              title,
              subTitle,
              body,
              images,
              children,
              link,
              linkText,
              author,
            }}
          />
        )}
        {!!contentBlocks?.length &&
          contentBlocks.map((block, i) => {
            return <ContentSection {...block?.contentBlock} />;
          })}
      </ProjectPageContainer>
    </>
  );
};

export default withRouteData(Project);

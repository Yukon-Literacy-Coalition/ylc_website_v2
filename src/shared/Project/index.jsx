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

const StyledLink = styled.a`
  grid-column: span 12;
  text-align: center;
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
  children,
  images,
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
            <Markdown source={body || "Body text needed"} escapeHtml={false} />
          </BodyText>
        </MarginedContainer>
        {link && (
          <MarginedContainer css={buttonMarginedStyles}>
            <StyledLink href={`${link}`} target="_blank" rel="noreferrer">
              <LargeButton>{linkText || "See More"}</LargeButton>
            </StyledLink>
          </MarginedContainer>
        )}
        {children}
        {!!images?.length && <Carousel images={images} />}
      </SectionContainer>{" "}
    </>
  );
};

const Project = (props) => {
  console.log({ projProps: props });
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
            console.log({ block });
            return <ContentSection {...block?.contentBlock} />;
          })}
      </ProjectPageContainer>
    </>
  );
};

export default withRouteData(Project);

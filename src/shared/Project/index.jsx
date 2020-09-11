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
  HeaderText,
  HeaderTitle,
  DarkAndLightText,
} from "../../shared/Type";
import { mq } from "../../theme";

const SectionHeader = styled(SectionHeaderImport)`
  padding: 20px 10px;
  padding-bottom: 0;
  ${mq[1]} {
    padding-top: 0;
    text-align: center;
  }
`;

const BodyText = styled(BodyTextImport)`
  /* margin-top: 20px; */
`;

const ButtonWrapper = styled.a`
  grid-column: span 12;
  text-align: center;
`;

const buttonMarginedStyles = css`
  padding-top: 20px;
`;

const SectionContainer = styled(SectionContainerImport)`
  padding-top: ${(p) => (p?.subTitle ? "0px" : "auto")};
`;

const Author = styled.div`
  text-align: center;
  ${(p) => p.theme.fonts.body_text_bold}
  padding-top: 5px;
`;

const Project = ({
  date,
  title,
  subTitle,
  body,
  images,
  children,
  link,
  linkText,
  author,
}) => {
  return (
    <>
      <PageHeader text={title || "Title Needed"} />
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
        <MarginedContainer css={buttonMarginedStyles}>
          {link && (
            <ButtonWrapper href={`${link}`}>
              <LargeButton>{linkText || "See More"}</LargeButton>
            </ButtonWrapper>
          )}
        </MarginedContainer>
        {children}
        {!!images?.length && <Carousel images={images} />}
      </SectionContainer>
    </>
  );
};

export default withRouteData(Project);

// const EventTitle = styled.div`
//   grid-column: span 12;
//   ${(p) => p.theme.fonts.medium_header}
//   text-align: center;
// `;

// <Moment format="MMMM Do, YYYY">{date}</Moment>

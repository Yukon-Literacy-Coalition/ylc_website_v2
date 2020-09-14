import React from "react";
import { withRouteData } from "react-static";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { MarginedContainer, SectionContainer } from "../../shared/Layout";
import { LargeButton, PageHeader } from "../../shared/Features";
import {
  SectionHeader,
  HeaderTitle,
  DarkAndLightText,
} from "../../shared/Type";
import { mqO } from "../../theme";

const Logo = styled.div`
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-image: url(${(p) => p?.image});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  ${mqO({
    gridColumn: ["span 3", "span 4", null, "span 6", "span 12"],
  })}
`;

const Logos = ({ images = [] }) => {
  return images.map((image, i) => (
    <Logo key={image + i} image={image?.image} />
  ));
};

const SectionStyles = css`
  padding-top: 0;
`;

export const SupportersLogos = ({ supObj }) => (
  <>
    <SectionHeader>
      <HeaderTitle>
        <DarkAndLightText text={"Our " + supObj?.title} />
      </HeaderTitle>
    </SectionHeader>
    <MarginedContainer>
      <Logos images={supObj?.images} />
    </MarginedContainer>
  </>
);

const Supporters = (props) => {
  const supporters = props?.supporters;
  return (
    <>
      <PageHeader {...props} text={"Our Supporters"} />
      <SectionContainer css={SectionStyles}>
        {!!supporters?.length &&
          supporters.map((supObj, i) => {
            return <SupportersLogos supObj={supObj} key={supObj.title + i} />;
          })}
      </SectionContainer>
    </>
  );
};

export default withRouteData(Supporters);

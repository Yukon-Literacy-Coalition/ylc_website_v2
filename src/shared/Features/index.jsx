import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { MarginedContainer } from "../Layout";
import { DarkAndLightText } from "../Type";

import img1 from "../../assets/tombstones_banner.jpg";
import img2 from "../../assets/yukon_river_banner.jpg";
import img3 from "../../assets/klondike_banner.jpg";
import img4 from "../../assets/dempster_sky_banner.jpg";
import img5 from "../../assets/dawson_sky_banner.jpg";

const SmallButtonStyled = styled.button`
  transition: all 0.2s;
  background: ${(p) => p.theme.colors.medium_accent};
  border: none;
  width: 70px;
  color: white;
  border-radius: 2px;
  height: 20px;
  cursor: pointer;
  ${(p) => p.theme.fonts.small_button_text}
  &:hover {
    background: ${(p) => p.theme.colors.ylc_blue};
    /* color: ${(p) => p.theme.colors.ylc_blue}; */
  }
`;

export const SmallButton = ({ children, className }) => {
  return (
    <SmallButtonStyled className={className}>
      {children || "See More"}
    </SmallButtonStyled>
  );
};

const LargeButtonStyled = styled.button`
  transition: all 0.2s;
  background: ${(p) => p.theme.colors.ylc_blue};
  border: none;
  min-width: 102px;
  color: white;
  border-radius: 2px;
  height: 29px;
  padding: 0 10px;
  cursor: ${(p) => (p.disabled ? "normal" : "pointer")};
  ${(p) => p.theme.fonts.large_button_text};
  &:hover {
    background: ${(p) => (p.disabled ? "lightgrey" : p.theme.colors.text)};
  }
  background: ${(p) => p.disabled && "lightgrey"};
`;

const InvertedLargeButtonStyled = styled(LargeButtonStyled)`
  border: ${(p) => p.theme.colors.ylc_blue} solid 1px;
  color: ${(p) => p.theme.colors.ylc_blue};
  background: white;
  &:hover {
    background: ${(p) => p.theme.colors.ylc_blue};
    color: white;
  }
`;

export const LargeButton = ({ children, className, onClick, disabled }) => {
  return (
    <LargeButtonStyled
      onClick={onClick}
      className={className}
      disabled={disabled}
    >
      {children || "Learn More"}
    </LargeButtonStyled>
  );
};

export const InvertedLargeButton = ({ children, className }) => {
  return (
    <InvertedLargeButtonStyled className={className}>
      {children || "Learn More"}
    </InvertedLargeButtonStyled>
  );
};

const BigHeader = styled.span`
  ${(p) => p.theme.fonts.big_header};
  color: ${(p) => p.theme.colors.text};
`;

const PageHeaderStyles = css`
  grid-column: span 12;
  align-self: center;
`;

const PageHeaderContainer = styled.div`
  /* background: ${(p) => p.theme.colors.light_accent}; */
  margin-top: 64px;
  height: 240px;
`;

const PageHeaderBackground = styled.div`
  height: 100%;
  /* background: red; */
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0.2)
    ),
    url(${(p) => p.bgImage});
  background-size: cover;
`;

const getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

export const PageHeader = (props) => {
  const { text = "Title Needed", className, bgImage, isCMS } = props;
  const imageArray = [img1, img2, img3, img4, img5];
  const randomBgImage = imageArray[getRndInteger(1, imageArray.length + 1) - 1];
  return (
    <PageHeaderContainer>
      <PageHeaderBackground
        bgImage={bgImage || isCMS ? imageArray[0] : randomBgImage}
      >
        <MarginedContainer
          css={css`
            height: 100%;
          `}
        >
          <div css={PageHeaderStyles}>
            <BigHeader>
              <DarkAndLightText text={text} />
            </BigHeader>
          </div>
        </MarginedContainer>
      </PageHeaderBackground>
    </PageHeaderContainer>
  );
};

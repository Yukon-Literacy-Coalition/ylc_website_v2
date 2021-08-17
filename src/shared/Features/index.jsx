import React, { useMemo, useState } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { MarginedContainer } from "../Layout";
import { DarkAndLightText } from "../Type";
import Markdown from "react-markdown";
import ReactPlayer from "react-player";
import { Link } from "@reach/router";
import { mq } from "../../theme";

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
  background: ${(p) => p.theme.colors.light_accent};
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0.2)
    ),
    url(${(p) => p?.bgImage});
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
        bgImage={bgImage || isCMS ? undefined : randomBgImage}
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

export const StyledMarkdown = styled(Markdown)`
  img {
    width: 100%;
  }
  a {
    font-weight: bold;
    color: ${(p) => p.theme.colors.ylc_blue};
  }
`;

const VideoPlaceholder = styled.div`
  background: ${(p) => p.theme.colors.medium_accent};
  display: flex;
  justify-content: center;
  align-items: center;
  font: 18px;
  font-weight: bold;
  color: ${(p) => p.theme.colors.ylc_blue};
  padding: 30px;
`;

const VideoContainer = styled.div`
  position: relative;
`;

const ShowVideoButton = styled(LargeButtonStyled)`
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const VideoPlayer = ({ url, isCMS, ...rest }) => {
  const myUrl = useMemo(() => url, [url]);
  const [showVideo, setShowVideo] = useState(false);
  return (
    <VideoContainer>
      {isCMS && (
        <ShowVideoButton onClick={() => setShowVideo(!showVideo)}>
          {showVideo ? "Hide Video" : "Show Video"}
        </ShowVideoButton>
      )}
      {isCMS && showVideo !== true ? (
        <VideoPlaceholder
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            height: "360px",
            width: "640px",
          }}
          {...rest}
        >
          Video Placeholder to stop flickering of video while editing.
        </VideoPlaceholder>
      ) : (
        <ReactPlayer
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            // height: "100%",
          }}
          controls={true}
          fallback={<div>Video Loading</div>}
          playsinline={true}
          {...rest}
          url={myUrl}
        />
      )}
    </VideoContainer>
  );
};

export const CircleImgContainer = ({ img, text, link }) => {
  const ImgWrapper = styled(Link)`
    grid-column: span 6;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px 0;

    ${mq[2]} {
      grid-column: span 12;
    }
  `;

  const Circle = styled.div`
    border-radius: 100%;
    width: 300px;
    height: 300px;
    overflow: hidden;
    box-shadow: 5px 5px 10px 5px ${(p) => p.theme.colors.medium_accent};
    text-align: center;
    background-image: url(${(p) => p.img});
    background-size: cover;
    background-position: center;
  `;

  const Text = styled.div`
    ${(p) => p.theme.fonts.small_header};
    color: ${(p) => p.theme.colors.ylc_blue};
    padding: 25px 0;
  `;

  return (
    <ImgWrapper to={link}>
      <Circle img={img} />
      <Text>{text}</Text>
    </ImgWrapper>
  );
};

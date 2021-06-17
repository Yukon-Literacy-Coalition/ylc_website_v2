import React, { useState } from "react";
import styled from "@emotion/styled";
// import { css } from "@emotion/core";
import Carousel from "react-elastic-carousel";
import {
  MarginedContainer,
  SectionContainer as ImportedSectionContainer,
} from "../Layout";
import { ModalLayer, ModalContent } from "../Modal";
import { useWindowDimensions } from "../../utilsJSX";
import { mq, mqO } from "../../theme";
import { VideoPlayer } from "../Features";

const CarouselContainer = styled.div`
  grid-column: span 12;
  ${mq[2]} {
    .rec-arrow {
      box-shadow: none;
      background: none;
    }
  }
`;

const MediaWrapper = styled.div`
  background-color: ${(p) => p.mediaLength > 1 && p.theme.colors.light_accent};
  width: 100%;
  padding: 2px;
  margin: 5px;
  height: ${(p) => (p.mediaLength === 1 ? "300px" : "240px")};
`;

const Img = styled.div`
  height: 100%;
  margin: 5px;

  background-image: url(${(p) => p?.image});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const VideoContainer = styled.div`
  height: 100%;
  margin: 5px;
  display: flex;
  justify-content: center;
`;

const SectionContainer = styled(ImportedSectionContainer)`
  /* background-color: ${(p) => p.theme.colors.light_accent}; */
  padding: 0;
  margin: 25px 0;
`;

const CarouselComponent = (props) => {
  const { width } = useWindowDimensions();
  const [modalVisible, setModalVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState(false);
  const { images, media, isCMS } = props;

  const mediaToShow =
    (images?.length || media?.length) === 1
      ? 1
      : width > 800 && images?.length > 2
      ? 3
      : width > 800 && images?.length === 2
      ? 2
      : width > 700
      ? 2
      : 1;

  const onOverlayClick = () => setCurrentImage(false);

  return (
    <>
      <SectionContainer>
        <MarginedContainer>
          <CarouselContainer>
            <Carousel
              itemsToShow={mediaToShow}
              {...props}
              pagination={false}
              showArrows={images?.length > 2 || media?.length > 2}
            >
              {!!images?.length
                ? images?.map(({ image }, i) => (
                    <MediaWrapper
                      mediaLength={images?.length}
                      onClick={() => {
                        setModalVisible(true);
                        setCurrentImage(image);
                      }}
                      key={image + i}
                    >
                      <Img image={image} />
                    </MediaWrapper>
                  ))
                : !!media?.length &&
                  media?.map((element, i) => {
                    const isImg = !!element?.imagesVideos?.image;

                    return (
                      <MediaWrapper
                        mediaLength={media?.length}
                        onClick={() => {
                          if (isImg) {
                            setModalVisible(true);
                            setCurrentImage(element?.imagesVideos?.image);
                          }
                        }}
                        key={
                          (element?.imagesVideos?.image ||
                            element?.imagesVideos?.videoLink) + i
                        }
                      >
                        {isImg ? (
                          <Img image={element?.imagesVideos?.image} />
                        ) : (
                          <VideoContainer>
                            <VideoPlayer
                              width={media?.length === 1 && "400px"}
                              url={element?.imagesVideos?.videoLink}
                              isCMS={isCMS}
                            />
                          </VideoContainer>
                        )}
                      </MediaWrapper>
                    );
                  })}
            </Carousel>
          </CarouselContainer>
        </MarginedContainer>
      </SectionContainer>
      <ModalLayer {...{ modalVisible, setModalVisible, onOverlayClick }}>
        <ModalContent>
          <img src={currentImage ? currentImage : undefined} alt="" />
        </ModalContent>
      </ModalLayer>
    </>
  );
};

export default CarouselComponent;

import React, { useState } from "react";
import styled from "@emotion/styled";
// import { css } from "@emotion/core";
import Carousel from "react-elastic-carousel";
import {
  MarginedContainer as ImportedMarginedContainer,
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
  /* margin: 5px; */
  /* max-width: ${(p) => p.isLibrary && "200px"}; */
  height: ${(p) =>
    p.isLibrary ? "100px" : p.mediaLength === 1 ? "300px" : "240px"};
  /* display: flex; */
  /* justify-content: center;
  align-items: center; */
`;

const Img = styled.div`
  height: 100%;
  /* margin: 5px; */

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
  margin: ${(p) => (p.isLibrary ? "0 0" : "25px 0")};
`;

const MarginedContainer = styled(ImportedMarginedContainer)`
  padding: ${(p) => p.isLibrary && 0};
`;

const CustomCarouselButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CarouselButton = styled.span`
  border: solid 1px ${(p) => p.theme.colors.medium_accent};
  border-radius: 50px;
  /* padding: 5px; */
  width: 20px;
  height: 20px;
  background: ${(p) => p.theme.colors.light_accent};
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;

export const ModalLayerComponent = ({
  modalVisible,
  setModalVisible,
  onOverlayClick,
  currentImage,
}) => (
  <ModalLayer {...{ modalVisible, setModalVisible, onOverlayClick }}>
    <ModalContent>
      <img src={currentImage ? currentImage : undefined} alt="" />
    </ModalContent>
  </ModalLayer>
);

const CarouselComponent = (props) => {
  let { width } = useWindowDimensions();
  const [modalVisible, setModalVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState(false);
  const {
    images,
    media,
    isCMS,
    isLibrary,
    ModalLayerExterior,
    modalVisibleProp,
    setModalVisibleProp,
    currentImageProp,
    setCurrentImageProp,
  } = props;

  let modalVisibleCur = modalVisibleProp ? modalVisibleProp : modalVisible;
  let setModalVisibleCur = setModalVisibleProp
    ? setModalVisibleProp
    : setModalVisible;
  let currentImageCur = currentImageProp ? currentImageProp : currentImage;
  let setCurrentImageCur = setCurrentImageProp
    ? setCurrentImageProp
    : setCurrentImage;

  const mediaToShow = isLibrary
    ? 1
    : (images?.length || media?.length) === 1
    ? 1
    : width > 800 && images?.length > 2
    ? 3
    : width > 800 && images?.length === 2
    ? 2
    : width > 700
    ? 2
    : 1;

  width = props.width ? props.width : width;

  return (
    <>
      <SectionContainer isLibrary={isLibrary}>
        <MarginedContainer isLibrary={isLibrary}>
          <CarouselContainer>
            <Carousel
              itemsToShow={mediaToShow}
              {...props}
              pagination={false}
              showArrows={
                (isLibrary && (images?.length > 1 || media?.length > 1)) ||
                images?.length > 2 ||
                media?.length > 2
              }
              renderArrow={
                isLibrary &&
                ((props) => {
                  return (
                    <CustomCarouselButtonContainer onClick={props.onClick}>
                      {props.type === "PREV" ? (
                        <CarouselButton>{"<"}</CarouselButton>
                      ) : (
                        <CarouselButton>{">"}</CarouselButton>
                      )}
                    </CustomCarouselButtonContainer>
                  );
                })
              }
            >
              {!!images?.length
                ? images?.map(({ image }, i) => (
                    <MediaWrapper
                      isLibrary={isLibrary}
                      mediaLength={images?.length}
                      onClick={() => {
                        setModalVisibleCur(true);
                        setCurrentImageCur(image);
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
                        isLibrary={isLibrary}
                        mediaLength={media?.length}
                        onClick={() => {
                          if (isImg) {
                            setModalVisibleCur(true);
                            setCurrentImageCur(element?.imagesVideos?.image);
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
      {!ModalLayerExterior && (
        <ModalLayerComponent
          {...{
            modalVisible: modalVisibleCur,
            setModalVisible: setModalVisibleCur,
            onOverlayClick: () => setCurrentImageCur(false),
            currentImage: currentImageCur,
          }}
        />
      )}
    </>
  );
};

export default CarouselComponent;

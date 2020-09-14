import React, { useState } from "react";
import styled from "@emotion/styled";
// import { css } from "@emotion/core";
import Carousel from "react-elastic-carousel";
import { MarginedContainer, SectionContainer } from "../Layout";
import { ModalLayer, ModalContent } from "../Modal";
import { useWindowDimensions } from "../../utilsJSX";

const CarouselContainer = styled.div`
  grid-column: span 12;
`;

const ImgWrapper = styled.div`
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Image = styled.img`
  align-self: flex-start;
  flex-shrink: 0;
  min-width: 100%;
  min-height: 100%;
  max-height: 120%;
`;

const CarouselComponent = (props) => {
  const { width } = useWindowDimensions();
  const [modalVisible, setModalVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState(false);
  const { images } = props;

  const imagesToShow = width > 800 ? 3 : width > 500 ? 2 : 1;

  return (
    <>
      <SectionContainer>
        <MarginedContainer>
          <CarouselContainer>
            <Carousel
              itemsToShow={imagesToShow}
              {...props}
              pagination={false}
              showArrows={images?.length > 2}
            >
              {!!images.length &&
                images.map(({ image }, i) => (
                  <ImgWrapper key={image + i}>
                    <Image
                      onClick={() => {
                        setModalVisible(true);
                        setCurrentImage(image);
                      }}
                      src={image}
                      alt=""
                    />
                  </ImgWrapper>
                ))}
            </Carousel>
          </CarouselContainer>
        </MarginedContainer>
      </SectionContainer>
      <ModalLayer {...{ modalVisible, setModalVisible }}>
        <ModalContent>
          <img src={currentImage ? currentImage : undefined} alt="" />
        </ModalContent>
      </ModalLayer>
    </>
  );
};

export default CarouselComponent;
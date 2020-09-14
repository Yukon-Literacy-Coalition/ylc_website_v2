import React, { useState } from "react";
import styled from "@emotion/styled";

const ModalLayerContainer = styled.div`
  visibility: ${(p) => (p.modalVisible ? "visible" : "hidden")}};
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: ${(p) => p.theme.zIndex.top};
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalOverlay = styled.div`
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  height: 100vh;
  width: 100vw;
  z-index: ${(p) => p.theme.zIndex.top - 1};
`;

export const ModalLayer = ({ children, modalVisible, setModalVisible }) => {
  return (
    <ModalLayerContainer modalVisible={!!modalVisible}>
      {children}
      <ModalOverlay onClick={() => setModalVisible(!modalVisible)} />
    </ModalLayerContainer>
  );
};

const ContentContainer = styled.div`
  max-width: calc(100% - 100px);
  max-height: calc(100% - 100px);
  background: white;
  padding: 20px;
  z-index: ${(p) => p.theme.zIndex.top};
  img {
    max-width: 100%;
    width: auto;
    max-height: 70vh;
    height: auto;
    display: block;
  }
`;

export const ModalContent = (props) => {
  return <ContentContainer>{props.children}</ContentContainer>;
};

// import React from "react";
/** @jsx jsx */
import { jsx, css, keyframes } from "@emotion/core";
import styled from "@emotion/styled";
import logo from "../../assets/dark_flake.png";

const rotation = keyframes` 
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`;

const LoaderContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    max-height: 25vw;
    opacity: 0.5;
  }
`;

const Loader = () => {
  return (
    <LoaderContainer>
      <img
        css={css`
          animation: ${rotation} 4s infinite linear;
        `}
        src={logo}
        alt=""
      />
    </LoaderContainer>
  );
};

export default Loader;

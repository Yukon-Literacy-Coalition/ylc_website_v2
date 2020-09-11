import React from "react";
import { withRouteData } from "react-static";
// import styled from "@emotion/styled";
// import { css } from "@emotion/core";
import Project from "../../shared/Project";

export const Imagine = ({ imaginationLibrary }) => {
  return (
    <Project
      body={imaginationLibrary?.body}
      title={imaginationLibrary?.title}
      subTitle={imaginationLibrary?.subTitle}
      link={imaginationLibrary?.link}
      linkText={imaginationLibrary?.linkText}
      images={imaginationLibrary?.images}
    />
  );
};

export default withRouteData(Imagine);

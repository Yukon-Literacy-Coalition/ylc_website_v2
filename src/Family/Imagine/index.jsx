import React from "react";
import { withRouteData } from "react-static";
// import styled from "@emotion/styled";
// import { css } from "@emotion/core";
import Project from "../../shared/Project";

export const Imagine = (props) => {
  const { imaginationLibrary } = props;
  return <Project {...imaginationLibrary} {...props} />;
};

export default withRouteData(Imagine);

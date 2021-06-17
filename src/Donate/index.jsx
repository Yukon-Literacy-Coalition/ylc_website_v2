import React from "react";
import { withRouteData } from "react-static";
// import styled from "@emotion/styled";
import Project from "../shared/Project";

export const Donate = (props) => {
  const { donate } = props;
  return <Project {...donate} {...props} />;
};

export default withRouteData(Donate);

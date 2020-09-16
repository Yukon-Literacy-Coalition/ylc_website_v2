import React from "react";
import { withRouteData } from "react-static";
// import styled from "@emotion/styled";
import Project from "../shared/Project";

export const AboutCommunity = (props) => {
  const { aboutCommunity } = props;
  return <Project {...aboutCommunity} {...props} />;
};

export default withRouteData(AboutCommunity);

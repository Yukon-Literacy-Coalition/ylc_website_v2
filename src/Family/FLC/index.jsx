import React from "react";
import { withRouteData } from "react-static";
import Project from "../../shared/Project";

export const FLC = (props) => {
  const { flc } = props;
  return <Project {...flc} {...props} />;
};

export default withRouteData(FLC);

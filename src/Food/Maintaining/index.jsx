import React from "react";
import { withRouteData } from "react-static";
import Project from "../../shared/Project";

export const Maintaining = (props) => {
  const { maintaining } = props;
  return <Project {...maintaining} {...props} />;
};

export default withRouteData(Maintaining);

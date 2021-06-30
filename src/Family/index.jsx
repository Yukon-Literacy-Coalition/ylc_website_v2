import React from "react";
import { withRouteData } from "react-static";
import Project from "../shared/Project";

export const AboutFamily = (props) => {
  const { aboutFamily } = props;
  return <Project {...aboutFamily} {...props} />;
};

export default withRouteData(AboutFamily);

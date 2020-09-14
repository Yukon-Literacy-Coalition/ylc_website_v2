import React from "react";
import { withRouteData } from "react-static";
import Project from "../../shared/Project";

export const Initiative = (props) => {
  const { initiative } = props;
  return <Project {...initiative} {...props} />;
};

export default withRouteData(Initiative);

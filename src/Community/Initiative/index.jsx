import React from "react";
import { withRouteData } from "react-static";
import Project from "../../shared/Project";

export const Initiative = ({ initiative }) => {
  return <Project {...initiative} />;
};

export default withRouteData(Initiative);

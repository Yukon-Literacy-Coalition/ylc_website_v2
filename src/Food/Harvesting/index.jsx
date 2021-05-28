import React from "react";
import { withRouteData } from "react-static";
import Project from "../../shared/Project";

export const Harvesting = (props) => {
  const { harvesting } = props;
  return <Project {...harvesting} {...props} />;
};

export default withRouteData(Harvesting);

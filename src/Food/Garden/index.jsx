import React from "react";
import { withRouteData } from "react-static";
import Project from "../../shared/Project";

export const CommunityGarden = (props) => {
  const { communityGarden } = props;
  return <Project {...communityGarden} {...props} />;
};

export default withRouteData(CommunityGarden);

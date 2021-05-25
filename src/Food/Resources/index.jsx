import React from "react";
import { withRouteData } from "react-static";
import Project from "../../shared/Project";

export const FoodSecurityResources = (props) => {
  const { foodSecurityResources } = props;
  return (
    <>
      <Project {...foodSecurityResources} {...props} />
      <div>Four Sections Here</div>
    </>
  );
};

export default withRouteData(FoodSecurityResources);

import React from "react";
import { withRouteData } from "react-static";
import Project from "../../shared/Project";

export const FoodSecurityPrograms = (props) => {
  const { foodSecurityPrograms } = props;
  return <Project {...foodSecurityPrograms} {...props} />;
};

export default withRouteData(FoodSecurityPrograms);

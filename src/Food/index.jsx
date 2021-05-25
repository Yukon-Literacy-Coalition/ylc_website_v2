import React from "react";
import { withRouteData } from "react-static";
import Project from "../shared/Project";

export const AboutFoodSecurity = (props) => {
  const { AboutFoodSecurity } = props;
  return <Project {...AboutFoodSecurity} {...props} />;
};

export default withRouteData(AboutFoodSecurity);

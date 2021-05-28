import React from "react";
import { withRouteData } from "react-static";
import Project from "../shared/Project";

export const AboutFoodSecurity = (props) => {
  const { aboutFoodSecurity } = props;
  return <Project {...aboutFoodSecurity} {...props} />;
};

export default withRouteData(AboutFoodSecurity);

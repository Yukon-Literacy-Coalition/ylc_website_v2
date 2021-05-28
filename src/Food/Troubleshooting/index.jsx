import React from "react";
import { withRouteData } from "react-static";
import Project from "../../shared/Project";

export const Troubleshooting = (props) => {
  const { troubleshooting } = props;
  return <Project {...troubleshooting} {...props} />;
};

export default withRouteData(Troubleshooting);

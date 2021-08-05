import React from "react";
import { withRouteData } from "react-static";
import Project from "../../shared/Project";

export const KidsProject = (props) => {
  const { data } = props;
  return <Project {...data} {...props} />;
};

export default withRouteData(KidsProject);

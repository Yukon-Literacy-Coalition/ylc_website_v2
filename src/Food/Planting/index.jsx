import React from "react";
import { withRouteData } from "react-static";
import Project from "../../shared/Project";

export const Planting = (props) => {
  const { planting } = props;
  return <Project {...planting} {...props} />;
};

export default withRouteData(Planting);

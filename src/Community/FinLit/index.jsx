import React from "react";
import { withRouteData } from "react-static";
import Project from "../../shared/Project";

export const FinLit = (props) => {
  const { financialLiteracy } = props;
  return (
    <>
      <Project {...financialLiteracy} {...props} />
    </>
  );
};

export default withRouteData(FinLit);

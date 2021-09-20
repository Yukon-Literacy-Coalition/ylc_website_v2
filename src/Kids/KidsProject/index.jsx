import React from "react";
import { withRouteData } from "react-static";
import Project from "../../shared/Project";

export const KidsProject = (props) => {
  const { data } = props;
  console.log({ data });
  return (
    <Project
      {...{ ...data, title: data?.localTitle || data?.title }}
      {...props}
    />
  );
};

export default withRouteData(KidsProject);

import React from "react";
import { withRouteData } from "react-static";
import Project from "../../shared/Project";

export const FLC = (props) => {
  const { flc } = props;
  return (
    <Project
      body={flc?.body}
      title={flc?.title}
      subTitle={flc?.subTitle}
      link={flc?.link}
      linkText={flc?.linkText}
      images={flc?.images}
      {...props}
    />
  );
};

export default withRouteData(FLC);

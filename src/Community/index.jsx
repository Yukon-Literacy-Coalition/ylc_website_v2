import React from "react";
import { withRouteData } from "react-static";
// import styled from "@emotion/styled";
import Project from "../shared/Project";

export const AboutCommunity = (props) => {
  const { aboutCommunity } = props;
  return (
    <Project
      body={aboutCommunity?.body}
      title={aboutCommunity?.title}
      subTitle={aboutCommunity?.subTitle}
      link={aboutCommunity?.link}
      linkText={aboutCommunity?.linkText}
      images={aboutCommunity?.images}
      {...props}
    />
  );
};

export default withRouteData(AboutCommunity);

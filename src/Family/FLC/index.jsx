import React from "react";
import { withRouteData } from "react-static";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import Project from "../../shared/Project";

export const FLC = ({ flc }) => {
  return (
    <Project
      body={flc?.body}
      title={flc?.title}
      subTitle={flc?.subTitle}
      link={flc?.link}
      linkText={flc?.linkText}
      images={flc?.images}
    />
  );
};

export default withRouteData(FLC);

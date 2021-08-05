import React from "react";
import { withRouteData } from "react-static";
import Project from "../shared/Project";
import { MarginedContainer, SectionContainer } from "../shared/Layout";
import { CircleImgContainer } from "../shared/Features";

// IMAGES
import planting from "../assets/planting.jpg";
import maintaining from "../assets/maintaining.jpg";
import harvest from "../assets/harvest.jpg";
import trouble from "../assets/trouble.jpg";

export const AboutForKids = (props) => {
  const { aboutForKids } = props;
  return (
    <>
      <Project {...aboutForKids} {...props} />
      <MarginedContainer>
        <CircleImgContainer
          img={planting}
          text={"Storytime"}
          link={"/kids/storytime"}
        />
        <CircleImgContainer
          img={harvest}
          text={"Fun with Food"}
          link={"/kids/kids_food"}
        />
        <CircleImgContainer
          img={harvest}
          text={"1,2,3 Craft with Me"}
          link={"/kids/craft"}
        />
        <CircleImgContainer
          img={maintaining}
          text={"Songs and Rhymes"}
          link={"/kids/songs"}
        />
        <CircleImgContainer
          img={trouble}
          text={"Science Magic"}
          link={"/kids/science"}
        />
        <CircleImgContainer
          img={harvest}
          text={"Caregiver Resources"}
          link={"/kids/caregiver"}
        />
      </MarginedContainer>
    </>
  );
};

export default withRouteData(AboutForKids);

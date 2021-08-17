import React from "react";
import { withRouteData } from "react-static";
import Project from "../shared/Project";
import { MarginedContainer, SectionContainer } from "../shared/Layout";
import { CircleImgContainer } from "../shared/Features";

// IMAGES
import caregiver from "../assets/kids_caregiver.jpg";
import craft from "../assets/kids_craft.jpg";
import food from "../assets/kids_food.jpg";
import science from "../assets/kids_science.jpg";
import songs from "../assets/kids_songs.jpg";
import storytime from "../assets/kids_storytime.jpg";

export const AboutForKids = (props) => {
  const { aboutForKids } = props;
  return (
    <>
      <Project {...aboutForKids} {...props} />
      <MarginedContainer>
        <CircleImgContainer
          img={storytime}
          text={"Storytime"}
          link={"/kids/storytime"}
        />
        <CircleImgContainer
          img={food}
          text={"Fun with Food"}
          link={"/kids/kids_food"}
        />
        <CircleImgContainer
          img={craft}
          text={"1,2,3 Craft with Me"}
          link={"/kids/craft"}
        />
        <CircleImgContainer
          img={songs}
          text={"Songs and Rhymes"}
          link={"/kids/songs"}
        />
        <CircleImgContainer
          img={science}
          text={"Science Magic"}
          link={"/kids/science"}
        />
        <CircleImgContainer
          img={caregiver}
          text={"Caregiver Resources"}
          link={"/kids/caregiver"}
        />
      </MarginedContainer>
    </>
  );
};

export default withRouteData(AboutForKids);

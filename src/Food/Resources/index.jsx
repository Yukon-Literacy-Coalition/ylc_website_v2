import React from "react";
import { withRouteData } from "react-static";
import { MarginedContainer, SectionContainer } from "../../shared/Layout";
import { CircleImgContainer } from "../../shared/Features";

// IMAGES
import Project from "../../shared/Project";
import planting from "../../assets/planting.jpg";
import maintaining from "../../assets/maintaining.jpg";
import harvest from "../../assets/harvest.jpg";
import trouble from "../../assets/trouble.jpg";

export const AboutFoodResources = (props) => {
  const { aboutFoodResources } = props;

  return (
    <>
      <Project {...aboutFoodResources} {...props} />
      <MarginedContainer>
        <CircleImgContainer
          img={planting}
          text={"Planting"}
          link={"/food/resources/planting"}
        />
        <CircleImgContainer
          img={maintaining}
          text={"Maintaining"}
          link={"/food/resources/maintaining"}
        />
        <CircleImgContainer
          img={trouble}
          text={"Troubleshooting"}
          link={"/food/resources/troubleshooting"}
        />
        <CircleImgContainer
          img={harvest}
          text={"Harvesting"}
          link={"/food/resources/harvesting"}
        />
      </MarginedContainer>
    </>
  );
};

export default withRouteData(AboutFoodResources);

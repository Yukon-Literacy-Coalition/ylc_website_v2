import React from "react";
import { withRouteData } from "react-static";
import styled from "@emotion/styled";
import { Link } from "@reach/router";
import Project from "../../shared/Project";
import planting from "../../assets/planting.jpg";
import maintaining from "../../assets/maintaining.jpg";
import harvest from "../../assets/harvest.jpg";
import trouble from "../../assets/trouble.jpg";
import { MarginedContainer, SectionContainer } from "../../shared/Layout";
import { mq } from "../../theme";

export const AboutFoodResources = (props) => {
  const { aboutFoodResources } = props;

  const ImgContainer = ({ img, text, link }) => {
    const ImgWrapper = styled(Link)`
      grid-column: span 6;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 40px 0;

      ${mq[2]} {
        grid-column: span 12;
      }
    `;

    const Circle = styled.div`
      border-radius: 100%;
      width: 300px;
      height: 300px;
      overflow: hidden;
      box-shadow: 5px 5px 10px 5px ${(p) => p.theme.colors.medium_accent};
      img {
        width: 150%;
      }
    `;

    const Text = styled.div`
      ${(p) => p.theme.fonts.small_header};
      color: ${(p) => p.theme.colors.ylc_blue};
      padding: 25px 0;
    `;

    return (
      <ImgWrapper to={link}>
        <Circle>
          <img src={img} alt="" />
        </Circle>
        <Text>{text}</Text>
      </ImgWrapper>
    );
  };

  return (
    <>
      <Project {...aboutFoodResources} {...props} />
      <MarginedContainer>
        <ImgContainer
          img={planting}
          text={"Planting"}
          link={"/food/resources/planting"}
        />
        <ImgContainer
          img={maintaining}
          text={"Maintaining"}
          link={"/food/resources/maintaining"}
        />
        <ImgContainer
          img={trouble}
          text={"Troubleshooting"}
          link={"/food/resources/troubleshooting"}
        />
        <ImgContainer
          img={harvest}
          text={"Harvesting"}
          link={"/food/resources/harvesting"}
        />
      </MarginedContainer>
    </>
  );
};

export default withRouteData(AboutFoodResources);

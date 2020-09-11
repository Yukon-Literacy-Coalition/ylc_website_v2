import React from "react";
import { PageHeader } from "../shared/Features";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { MarginedContainer, SectionContainer } from "../shared/Layout";
import Project from "../shared/Project";

const FamilyCopy = styled.div`
  grid-column: span 12;
`;

const body =
  "Family literacy is parents/caregivers and children learning together. A child’s literacy development begins at birth and is shaped by their experiences in the home environment. By supporting parents/caregivers in their role as their children’s first teachers, we can provide a positive impact on the child’s emerging literacy skills and attitudes toward learning. Family literacy can apply to all families, and to most activities that take place within the everyday life at home. Young children mostly learn through the power of play, which helps to nurture the imagination and to give a child a sense of adventure. Through play, they can learn essential skills such as problem solving, sharing, emotional development, gross and fine motor skills, language and so much more. It has been proven that when parents/caregivers learn together with the child, through a wide variety of daily activities, they assist their children and themselves in becoming lifelong learners.";

const FamilyAbout = () => (
  <Project
    body={body}
    title={"Family Literacy"}
    subTitle={"What Is Family Literacy?"}
  />
);

export default FamilyAbout;

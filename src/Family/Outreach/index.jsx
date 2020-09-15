import React, { useState } from "react";
import { withRouteData } from "react-static";
import styled from "@emotion/styled";
import { Link as ScrollLink } from "react-scroll";
import Carousel from "../../shared/Carousel";
import { MarginedContainer } from "../../shared/Layout";
import { DarkAndLightText } from "../../shared/Type";
import { mq } from "../../theme";

// LARGE STYLES

const OutreachContainer = styled.div`
  padding-top: 64px;
  padding-bottom: 40px;
`;

const ProjectsContainer = styled.div`
  grid-column: span 12;
  margin-left: 150px;
  padding: 30px 20px 0;
  ${mq[2]} {
    margin-left: 0;
  }
`;

// SIDE MENU

const SideMenuStyled = styled.div`
  transition: all 0.2s;
  width: 150px;
  display: flex;
  flex-direction: column;
  position: fixed;
  background: white;
  height: 100%;
  padding-left: 10px;
  grid-column: span 2;

  border-radius: 0 3px 3px 0;
  z-index: ${(p) => p.theme.zIndex.first};
  ${mq[2]} {
    z-index: ${(p) => p.theme.zIndex.third};
    left: ${(p) => (p.sideMenuOpen ? 0 : "-150px")};
    border-right: ${(p) => p.theme.colors.ylc_blue} 1px solid;
    border-top: ${(p) => p.theme.colors.ylc_blue} 1px solid;
  }
`;

const SideMenuButton = styled.span`
  position: absolute;
  top: 10px;
  right: -99px;
  background: white;
  width: 100px;
  height: 35px;
  display: none;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 0 15px 15px 0;
  border: ${(p) => p.theme.colors.ylc_blue} 1px solid;
  border-left: white 1px solid;
  color: ${(p) => p.theme.colors.ylc_blue};
  ${mq[2]} {
    display: flex;
  }
`;

const SideTitle = styled.div`
  ${(p) => p.theme.fonts.small_header}
  padding: 30px 0;
`;

const SideMenuItemStyled = styled.span`
  ${(p) => p.theme.fonts.body_text}
  padding: 5px 0;
`;

const SideMenuItem = ({ link, setSideMenuOpen }) => (
  <SideMenuItemStyled>
    <ScrollLink
      activeClass="active"
      to={link}
      spy={true}
      smooth={true}
      offset={-64}
      duration={500}
      onClick={() => setSideMenuOpen(false)}
    >
      {link}
    </ScrollLink>
  </SideMenuItemStyled>
);

const SideMenu = ({ projects, sideMenuOpen, setSideMenuOpen }) => (
  <SideMenuStyled sideMenuOpen={sideMenuOpen}>
    <SideMenuButton onClick={() => setSideMenuOpen(!sideMenuOpen)}>
      {sideMenuOpen ? "Close Menu" : "All projects"}
    </SideMenuButton>
    <SideTitle>
      <DarkAndLightText text={"Outreach Projects"} />
    </SideTitle>
    <SideMenuItem setSideMenuOpen={setSideMenuOpen} link={"About"} />
    {projects.map((proj, i) => (
      <SideMenuItem
        setSideMenuOpen={setSideMenuOpen}
        link={proj.title}
        key={proj.title + i}
      />
    ))}
  </SideMenuStyled>
);

// OUTREACH PROJECT

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 0;
  background: ${(p) => (p.isBlue ? p.theme.colors.light_accent : "white")};
`;

const AboutProjectContainer = styled(ProjectContainer)`
  padding-top: 0;
  background: ${(p) => p.theme.colors.light_accent};
`;

const ProjectTitle = styled.div`
  ${(p) => p.theme.fonts.medium_header}
  padding: 20px 0;
  text-align: center;
`;

const ProjectBody = styled.div`
  ${(p) => p.theme.fonts.body_text}
  padding: 0 30px 20px;
`;

const ProjectContentWrapper = styled.div`
  grid-column: span 12;
`;

export const OutreachProject = ({ project, index = 1 }) => {
  return (
    <div>
      <div id={project?.title} />
      <ProjectContainer isBlue={index % 2 !== 0}>
        <ProjectTitle>
          <DarkAndLightText text={project?.title} />
        </ProjectTitle>
        <ProjectBody>{project?.body}</ProjectBody>
        {!!project?.images?.length && <Carousel images={project?.images} />}
      </ProjectContainer>
    </div>
  );
};

const Projects = ({ projects }) => (
  <ProjectsContainer>
    <div id="About" />
    <AboutProjectContainer>
      <ProjectContentWrapper>
        <ProjectTitle>
          <DarkAndLightText text={"What are Outreach Projects?"} />
        </ProjectTitle>
        <ProjectBody>{aboutText}</ProjectBody>
      </ProjectContentWrapper>
    </AboutProjectContainer>
    {projects.map((proj, i) => (
      <OutreachProject project={proj} key={proj.title + i} index={i} />
    ))}
  </ProjectsContainer>
);

const aboutText =
  "Our Community Outreach program takes family literacy out of the Family Literacy Centre and into the community. Through this program, YLC staff bring fun, inclusive, and free literacy-based activities to children and families across the Yukon. Whether we’re working in partnership with territorial governments and community organizations, or on independent projects, you’ll find us at culture camps, local cultural events, holiday celebrations, and much more. Supporting all communities in the Yukon is important to us. Our outreach program connects us to all Yukoners, and to the rich tapestry of projects taking place across the territory. Some of our current outreach work includes professional development workshops for childcare workers, providing activities for children and families at large-scale cultural events such as Haa Kusteeyí, The Moosehide Gathering, Carcross Commons openings, and the Adäka Festival and attending culture camps in partnership with local schools and First Nations.";

const Outreach = ({ outreachProjects }) => {
  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  const projects = outreachProjects || [];
  return (
    <OutreachContainer>
      <MarginedContainer>
        <SideMenu
          projects={projects}
          sideMenuOpen={sideMenuOpen}
          setSideMenuOpen={setSideMenuOpen}
        />
        <Projects aboutText={aboutText} projects={projects} />
      </MarginedContainer>
    </OutreachContainer>
  );
};

export default withRouteData(Outreach);

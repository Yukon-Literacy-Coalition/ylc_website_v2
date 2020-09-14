import React, { useState, useEffect } from "react";
import { Link as RRLink } from "@reach/router";
import { useSiteData } from "react-static";

import styled from "@emotion/styled";
import logo from "../../assets/dark_flake.png";
import ham from "../../assets/ham.svg";
import { mq } from "../../theme";

import { MarginedContainer } from "../Layout";
import facebookIcon from "../../assets/fb.svg";
import instaIcon from "../../assets/insta.svg";
import youtubeIcon from "../../assets/yt.svg";

import { SideMenu } from "./SideMenu";

import aboutMenuImage from "../../assets/book_bike.jpg";
import familyMenuImage from "../../assets/wallTent.jpg";
import communityMenuImage from "../../assets/whitehorse.jpg";
// import Loader from "../Loader";

//
// DROP DOWN
//

const DropDownContentContainer = styled.div`
  transition: all 0.3s;
  visibility: hidden;
  opacity: 0;
  display: flex;
  width: 100%;
  min-height: 266px;
  position: absolute;
  top: 64px;
  left: 0px;
  background: ${(p) => p.theme.colors.light_accent};
`;

const DDButtonStyles = styled.span`
  transition: all 0.3s;
  height: 100%;
  text-align: center;
  display: flex;
  align-content: center;
  justify-content: center;
  font-family: Noto Sans;
  font-size: 15px;
  font-weight: bold;
  a,
  span {
    margin: auto;
    border-bottom: 2px transparent solid;
    cursor: ${(p) => p.to && `pointer`}
    padding: 0;
  }
  &:hover {
    transition: 0.3s cubic-bezier(0.26, 0.84, 0.4, 0.97);
    a,
    span {
      border-bottom: 2px ${(p) => p.theme.colors.ylc_blue} solid;
    }
  }
`;

const DropDownContainer = styled.div`
  &:hover > ${DropDownContentContainer} {
    transition: 0.3s cubic-bezier(0.26, 0.84, 0.4, 0.97);
    visibility: visible;
    opacity: 1;
  }
  &:hover > ${DDButtonStyles} {
    transition: 0.3s cubic-bezier(0.26, 0.84, 0.4, 0.97);
    a {
      border-bottom: 2px ${(p) => p.theme.colors.ylc_blue} solid;
    }
  }
  height: 100%;
`;

const MarginedDDContent = styled(MarginedContainer)`
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;

const DDImgContainer = styled.div`
  height: 210px;
  background: grey;
  grid-column-start: 3;
  grid-column-end: 7;
  div {
    background-image: url(${(p) => p.image});
    background-size: cover;
    width: 100%;
    height: 100%;
  }
`;

const DropDownContent = (props) => {
  return (
    <DropDownContentContainer>
      <MarginedDDContent>{props.children}</MarginedDDContent>
    </DropDownContentContainer>
  );
};

const DDButton = ({ to, text }) => (
  <DDButtonStyles>
    {to ? <RRLink to={to}>{text}</RRLink> : <span>{text}</span>}
  </DDButtonStyles>
);

//
// NAV
//

const NavContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 64px;
  background-color: ${({ scrollPosition, isHome }) =>
    isHome && scrollPosition < 100 ? "rgba(255,255,255,0.4)" : "white"};
  z-index: ${(p) => p.theme.zIndex.fourth};
  transition: all 0.2s;
  color: ${({ scrollPosition, theme }) =>
    scrollPosition > 100 ? theme.colors.ylc_blue : theme.colors.text};
  &:hover {
    background: ${(p) => p.theme.colors.light_accent};
  }
`;

const Nav = styled(MarginedContainer)`
  height: 64px;
  justify-content: space-between;
  align-items: center;
  a {
    padding: 3px 0 3px;
  }
`;

const BasicNavContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const TopNavLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  grid-column-start: 3;
  grid-column-end: 11;
  ${mq[2]} {
    display: none;
  }
`;

export const BasicNav = (props) => {
  return (
    <BasicNavContainer>
      <DDButton to="/about" text="About" />
      <DDButton to="/family" text="Family Literacy" />
      <DDButton to="/community" text="Community Initiatives" />
      <DDButton to="/news" text="News" />
      <DDButton to="/events" text="Events" />
      <DDButton to="/contact" text="Contact" />
    </BasicNavContainer>
  );
};

//
// LINKS
//

const LinksContainer = styled.span`
  display: flex;
  flex-direction: column;
  /* justify-content: space-around; */
  padding: 20px 0;
  grid-column-start: 7;
  grid-column-end: 13;
  min-height: 210px;
`;

const SubLinkContainer = styled.div`
  padding-bottom: 5px;
  ${(p) => p.theme.fonts.body_text_bold}
  font-size: 15px;
  &:hover a {
    border-bottom: 2px solid ${(p) => p.theme.colors.ylc_blue};
  }
`;

const aboutLinksArray = [
  <RRLink to="/about">What We Do</RRLink>,
  <RRLink to="/about/approach">Our Approach</RRLink>,
  <RRLink to="/about/team">Our Team</RRLink>,
  <RRLink to="/about/supporters">Supporters</RRLink>,
  <RRLink to="/about/opportunities">Job Opportunities</RRLink>,
];

const AboutLinks = () => (
  <LinksContainer>
    {aboutLinksArray.map((lnk, i) => (
      <SubLinkContainer key={"boutLinks" + i}>{lnk}</SubLinkContainer>
    ))}
  </LinksContainer>
);

const familyLinksArray = [
  <RRLink to="/family">What is Family Literacy?</RRLink>,
  <RRLink to="/family/flc">Family Literacy Centre</RRLink>,
  <RRLink to="/family/imagination">Imagination Library</RRLink>,
  <RRLink to="/family/outreach">Outreach Projects</RRLink>,
  <RRLink to="/family/resources">Resources</RRLink>,
];

const FamilyLinks = () => (
  <LinksContainer>
    {familyLinksArray.map((lnk, i) => (
      <SubLinkContainer key={"famLink" + i}>{lnk}</SubLinkContainer>
    ))}
  </LinksContainer>
);

const getCommunityLinksArray = ({ communityLinks }) => {
  const generatedLinks =
    !!communityLinks?.length &&
    communityLinks.map((init, i) => {
      return (
        <RRLink
          key={init.slug + i}
          to={`/community/initiative/${init.slug || "NAME/LINK_NEEDED"}`}
        >
          {init?.title || "Title Needed"}
        </RRLink>
      );
    });

  const linksArray = generatedLinks || [];
  return [
    <RRLink to="/community">About Community Initiatives</RRLink>,
    <RRLink to="/community/financial_literacy">Financial literacy</RRLink>,
    ...linksArray,
  ];
};

const CommunityLinks = ({ communityLinks }) => {
  const communityLinksArray = getCommunityLinksArray({ communityLinks });
  return (
    <LinksContainer>
      {communityLinksArray.map((lnk, i) => (
        <SubLinkContainer key={"sub" + i}>{lnk}</SubLinkContainer>
      ))}
    </LinksContainer>
  );
};

//
// LOGO & SOCIALS
//

const Logo = styled.img`
  height: 50px;
  width: 50px;
`;

const SocialsMainNav = styled.span`
  grid-column-start: 11;
  grid-column-end: 13;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 2px;
  padding-left: 20px;
  ${mq[2]} {
    display: none;
  }
`;

const LogoSection = styled.div`
  display: flex;
  justify-content: center;
  ${mq[2]} {
    grid-column-start: 6;
    grid-column-end: 8;
  }
`;

const SocialImg = styled.img`
  width: 20px;
  height: 20px;
`;

const SocialLinks = () => (
  <>
    <a
      href="https://www.facebook.com/Yukon-Family-Literacy-Centre-193726640688169/"
      target="_blank"
      rel="noreferrer"
    >
      <SocialImg src={facebookIcon} alt="facebook icon" />
    </a>
    <a
      href="https://www.youtube.com/channel/UCsoAKkydC9BSeKIXJTNwXGQ"
      target="_blank"
      rel="noreferrer"
    >
      <SocialImg src={youtubeIcon} alt="youtube icon" />
    </a>
    <a
      href="https://www.instagram.com/yukonfamilyliteracycentre/"
      target="_blank"
      rel="noreferrer"
    >
      <SocialImg src={instaIcon} alt="instagram icon" />
    </a>
  </>
);

//
// SIDE MENU
//

const HamburgerContainer = styled.div`
  grid-column: span 2;
  display: none;
  cursor: pointer;
  ${mq[2]} {
    display: block;
  }
`;

//
// MAIN COMPONENT
//

const Navigation = (props) => {
  const { communityLinks } = useSiteData();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [sideMenuVisible, setSideMenuVisible] = useState(false);

  const handleScroll = () => {
    const position = typeof window !== "undefined" ? window.pageYOffset : 0;
    setScrollPosition(position);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll, { passive: true });

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  });

  return (
    <NavContainer isHome={props.isHome} scrollPosition={scrollPosition}>
      <Nav>
        <SideMenu
          {...{
            sideMenuVisible,
            setSideMenuVisible,
            SocialLinks,
            DDButtonStyles,
            DDButton,
            communityLinks,
            getCommunityLinksArray,
            aboutLinksArray,
            familyLinksArray,
          }}
        />
        <HamburgerContainer>
          <img
            src={ham}
            alt="hamburger menu"
            onClick={() => setSideMenuVisible(true)}
          />
        </HamburgerContainer>
        <LogoSection>
          <RRLink to="/">
            <Logo src={logo} alt="" />
          </RRLink>
        </LogoSection>
        <TopNavLinks>
          <DropDownContainer>
            <DDButton text="About" />
            <DropDownContent>
              <DDImgContainer image={aboutMenuImage}>
                <div />
              </DDImgContainer>
              <AboutLinks />
            </DropDownContent>
          </DropDownContainer>
          <DropDownContainer>
            <DDButton text="Family Literacy" />
            <DropDownContent>
              <DDImgContainer image={familyMenuImage}>
                <div />
              </DDImgContainer>
              <FamilyLinks />
            </DropDownContent>
          </DropDownContainer>
          <DropDownContainer>
            <DDButton text="Community Initiatives" />
            <DropDownContent>
              <DDImgContainer image={communityMenuImage}>
                <div />
              </DDImgContainer>
              <CommunityLinks communityLinks={communityLinks} />
            </DropDownContent>
          </DropDownContainer>
          <DDButton to="/news" text="News" />
          <DDButton to="/events" text="Events" />
          <DDButton to="/contact" text="Contact" />
        </TopNavLinks>
        <SocialsMainNav>
          <SocialLinks />
        </SocialsMainNav>
      </Nav>
    </NavContainer>
  );
};

// const ExportedNav = (
//   <React.Suspense fallback={<div />}>
//     <Navigation />
//   </React.Suspense>
// );

export default Navigation;

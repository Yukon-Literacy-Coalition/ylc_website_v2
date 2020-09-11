import React from "react";
import { Link as RRLink } from "@reach/router";
import styled from "@emotion/styled";

import { Menu } from "antd";

import "antd/dist/antd.min.css";
import "./corrections.css";

import logo from "../../assets/dark_flake.png";
import closeIcon from "../../assets/close.png";
const { SubMenu } = Menu;

const SideMenuContainer = styled.div`
  transition: all 0.2s;
  width: 300px;
  height: 100vh;
  position: absolute;
  left: ${(p) => (p.sideMenuVisible ? 0 : `-300px`)};
  top: 0;
  background: white;
  text-align: left;
  overflow-y: scroll;
`;

const SocialsSideBar = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  /* padding: 20px 0; */
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 20px 0;
`;

const Logo = styled.img`
  height: 50px;
  width: 50px;
`;

const CloseImg = styled.img`
  position: absolute;
  top: 20px;
  right: 20px;
  height: 20px;
  width: 20px;
  color: ${(p) => p.theme.colors.ylc_blue};
  cursor: pointer;
`;

export const SideMenu = ({
  sideMenuVisible,
  setSideMenuVisible,
  SocialLinks,
  DDButton,
  DDButtonStyles,
  communityLinks,
  getCommunityLinksArray,
  aboutLinksArray,
  familyLinksArray,
}) => {
  const communityLinksArray = getCommunityLinksArray({ communityLinks });
  return (
    <SideMenuContainer sideMenuVisible={sideMenuVisible}>
      <CloseImg
        src={closeIcon}
        alt="close side menu"
        onClick={() => setSideMenuVisible(false)}
      />
      <Menu mode="inline" style={{ height: "100%" }}>
        <Menu.Item style={{ height: 100 }}>
          <LogoContainer>
            <RRLink onClick={() => setSideMenuVisible(false)} to="./">
              <Logo src={logo} alt="" />
            </RRLink>
          </LogoContainer>
        </Menu.Item>

        <SubMenu title={<span>About</span>} style={{ width: 256 }}>
          {aboutLinksArray.map((lnk, i) => {
            return (
              <Menu.Item
                onClick={() => setSideMenuVisible(false)}
                key={"about" + i}
              >
                {lnk}
              </Menu.Item>
            );
          })}
        </SubMenu>
        <SubMenu title={<span>Family Literacy</span>} style={{ width: 256 }}>
          {familyLinksArray.map((lnk, i) => {
            return (
              <Menu.Item
                onClick={() => setSideMenuVisible(false)}
                key={"about" + i}
              >
                {lnk}
              </Menu.Item>
            );
          })}
        </SubMenu>
        <SubMenu
          title={<span>Community Initiatives</span>}
          style={{ width: 256 }}
        >
          {communityLinksArray.map((lnk, i) => {
            return (
              <Menu.Item
                onClick={() => setSideMenuVisible(false)}
                key={"about" + i}
              >
                {lnk}
              </Menu.Item>
            );
          })}
        </SubMenu>

        <Menu.Item>
          <RRLink onClick={() => setSideMenuVisible(false)} to="./news">
            News
          </RRLink>
        </Menu.Item>
        <Menu.Item>
          <RRLink onClick={() => setSideMenuVisible(false)} to="./events">
            Events
          </RRLink>
        </Menu.Item>
        <Menu.Item>
          <RRLink onClick={() => setSideMenuVisible(false)} to="./contact">
            Contact
          </RRLink>
        </Menu.Item>
        <Menu.Item>
          <SocialsSideBar>
            <SocialLinks />
          </SocialsSideBar>
        </Menu.Item>
      </Menu>
    </SideMenuContainer>
  );
};

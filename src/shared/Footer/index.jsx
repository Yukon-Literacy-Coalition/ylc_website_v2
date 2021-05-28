import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { mq } from "../../theme";
import logo from "../../assets/dark_flake.png";
import { MarginedContainer } from "../Layout";

import { BasicNav as NavImport } from "../Navigation";

const FooterContainer = styled.div`
  background: ${(p) => p.theme.colors.medium_grey};
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 230px;
  overflow: hidden;
  padding: 0 20px;
  margin-top: 0px;
  ${mq[1]} {
    height: 180px;
  }
  z-index: ${(p) => p.theme.zIndex.second};
`;

const FooterLogo = styled.img`
  height: 300px;
  position: absolute;
  bottom: -150px;
  right: calc(50% - 150px);
  overflow: hidden;
`;

const MarginedFooter = styled(MarginedContainer)`
  padding-top: 20px;
`;

const BasicNavContainer = styled.div`
  grid-column-start: 1;
  grid-column-end: 13;
  ${mq[2]} {
    display: none;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <MarginedFooter>
        <BasicNavContainer>
          <NavImport />
        </BasicNavContainer>
        <FooterLogo src={logo} alt="" />
      </MarginedFooter>
    </FooterContainer>
  );
};

export default Footer;

import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { returnSplitText } from "../utilsJSX";

export const SmallSectionTitle = styled.span`
  ${(p) => p.theme.fonts.small_header}
  color: ${(p) => p.theme.colors.text};
  padding-bottom: 50px;
  grid-column: span 13;
`;

export const SectionHeader = styled.div`
  ${(p) => p.theme.fonts.medium_header};
  height: ${(p) => p?.height};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${(p) => p.theme.colors.text};
  padding: 30px 0;
`;

export const HeaderText = styled.div`
  ${(p) => p.theme.fonts.body_text};
  margin: 0 auto;
  padding: 0 40px;
  text-align: center;
  grid-column: span 12;
`;

export const HeaderTitle = styled.div`
  padding: 20px 0;
`;

const DarkSpan = styled.span`
  color: ${(p) => p.theme.colors.text};
`;

const LightSpan = styled.span`
  color: ${(p) => p.theme.colors.ylc_blue};
`;

export const DarkAndLightText = ({ text }) => {
  const splitText = text ? returnSplitText(text) : [];
  let darkText = "";
  let lightText = "";
  if (!!splitText[1]?.length) {
    darkText = splitText[0];
    lightText = splitText[1];
  } else {
    lightText = splitText[0];
  }
  return (
    <span>
      <DarkSpan>{darkText} </DarkSpan>
      <LightSpan>{lightText}</LightSpan>
    </span>
  );
};

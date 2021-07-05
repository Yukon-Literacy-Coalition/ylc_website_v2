// import React from "react";
import styled from "@emotion/styled";
import { mq } from "../theme";

export const MarginedContainer = styled.div`
  margin: 0 auto;
  max-width: 1060px;
  padding: 0 10px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 20px;
  ${(p) => p.className}
`;

export const InnerMarginedContainer = styled(MarginedContainer)`
  padding: 0;
`;

export const SectionContainer = styled.div`
  padding: 50px 0;
`;

export const BodyText = styled.div`
  grid-column-start: 2;
  grid-column-end: 12;
  ${(p) => p.theme.fonts.body_text}
`;
export const BodyTextSideBySide = styled.div`
  grid-column: span 12;
  ${(p) => p.theme.fonts.body_text}
  padding: 0 10px;
  max-width: 100%;
  ${mq[2]} {
    padding: 0;
    grid-column-start: 2;
    grid-column-end: 12;
  }
`;

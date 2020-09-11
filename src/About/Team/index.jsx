import React from "react";
import { withRouteData } from "react-static";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import {
  MarginedContainer,
  SectionContainer as SectionContainerImport,
} from "../../shared/Layout";
import { LargeButton, PageHeader } from "../../shared/Features";
import {
  SectionHeader,
  HeaderText,
  HeaderTitle,
  DarkAndLightText,
} from "../../shared/Type";
import { mq, mqO } from "../../theme";

// staff styling

const StaffContainer = styled.div`
  background: ${(p) => (p.odd ? p.theme.colors.light_accent : "white")};
  min-height: 350px;
  padding: 20px 0;
`;

const StaffMarginedContainer = styled(MarginedContainer)`
  height: 100%;

  ${mq[2]} {
    direction: rtl;
  }
`;

const ImgSection = styled.div`
  grid-column: span 4;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  min-height: 250px;

  ${mq[2]} {
    grid-column: span 12;
  }
`;

const ImgContainer = styled.div`
  height: 250px;
  width: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  img {
    flex-shrink: 0;
    min-width: 100%;
    min-height: 100%;
  }
  background: lightgrey;
  /* ${mq[2]} {
    height: 175px;
    width: 175px;
  } */
`;

const TextContent = styled.div`
  grid-column: span 8;
  padding-right: 20px;
  ${mq[2]} {
    grid-column: span 12;
    text-align: left;
  }
`;

const NameAndRole = styled.div`
  display: flex;
  justify-content: space-between;
  ${(p) => p.theme.fonts.extra_small_header}
  span:last-child {
    color: ${(p) => p.theme.colors.ylc_blue};
  }
  ${mq[2]} {
    flex-direction: column;
  }
`;

const Bio = styled.div`
  padding: 10px 0;
  ${(p) => p.theme.fonts.body_text}
`;

// BOARD STYLES

const MemberContainer = styled.div``;

const MemberText = styled.div`
  padding: 20px 0;
  grid-column-start: 2;
  grid-column-end: 12;
  display: flex;
  span {
    width: 33%;
  }
  ${(p) => p.theme.fonts.extra_small_header}
  ${mq[2]} {
    grid-column-start: 1;
    grid-column-end: 13;
    flex-direction: column;
    align-items: center;
  }
  ${mqO({
    fontSize: [null, null, null, "16px"],
  })}
`;

const blueStyle = (theme) => css`
  color: ${theme.colors.ylc_blue};
`;

const SectionContainer = styled(SectionContainerImport)`
  padding-top: 0;
`;

export const StaffMember = ({ staff, i = 1 }) => (
  <StaffContainer odd={i % 2 === 0}>
    <StaffMarginedContainer>
      <ImgSection image={staff.image}>
        <ImgContainer>
          <img src={staff.image} alt="" />
        </ImgContainer>
      </ImgSection>
      <TextContent>
        <NameAndRole>
          <span>
            <DarkAndLightText text={staff?.name} />
          </span>
          <span>{staff?.role}</span>
        </NameAndRole>
        <Bio>{staff.bio}</Bio>
      </TextContent>
    </StaffMarginedContainer>
  </StaffContainer>
);

const Team = ({ staff, board }) => {
  return (
    <>
      <PageHeader text={"Our Team"} />
      <SectionHeader>
        <HeaderTitle>
          <DarkAndLightText text={"Our Staff"} />
        </HeaderTitle>
      </SectionHeader>
      {!!staff.length &&
        staff.map((staff, i) => {
          return <StaffMember staff={staff} i={i} key={staff.name + i} />;
        })}
      <SectionContainer>
        <SectionHeader height="200px">
          <HeaderTitle>
            <DarkAndLightText text={"Our Board"} />
          </HeaderTitle>
          <MarginedContainer>
            <HeaderText>
              The Yukon Literacy Coalition board is representative of 8 Yukon
              regions with representation from the Yukon French community and
              holds a designated seat for a Yukon First Nations Elder.
            </HeaderText>
          </MarginedContainer>
        </SectionHeader>
        {!!board.length &&
          board.map((member, i) => {
            return (
              <MemberContainer key={member.name + i}>
                <MarginedContainer>
                  <MemberText>
                    <span>{member?.name}</span>
                    <span css={blueStyle}>{member?.role}</span>
                    <span>{member?.location}</span>
                  </MemberText>
                </MarginedContainer>
              </MemberContainer>
            );
          })}
      </SectionContainer>
    </>
  );
};

export default withRouteData(Team);

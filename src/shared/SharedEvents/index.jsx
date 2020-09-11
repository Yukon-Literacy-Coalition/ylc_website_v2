import React from "react";
import moment from "moment";
import styled from "@emotion/styled";
import { Link } from "@reach/router";
import { mq } from "../../theme";

const EventItem = styled(Link)`
  transition: all 0.5s;
  border: 1px solid transparent;
  border-right: 1px solid
    ${(p) => (p.border ? "transparent" : p.theme.colors.faded_text)};
  height: 200px;
  background: white;
  cursor: pointer;
  padding-left: 10px;
  grid-column: span 3;
  border-radius: 2px;
  ${mq[3]} {
    grid-column: span 4;
  }
  ${mq[2]} {
    grid-column: span 6;
    border-bottom: 1px solid
      ${(p) => (p.border ? "transparent" : p.theme.colors.faded_text)};
    border-right: none;
  }
  ${mq[1]} {
    grid-column: span 12;
  }
`;

const DateText = styled.div`
  ${(p) => p.theme.fonts.extra_small_header};
  color: ${(p) => p.theme.colors.ylc_blue};
  padding: 10px 0;
`;

const EventText = styled(DateText)`
  color: ${(p) => p.theme.colors.text};
`;

export const EventListing = ({ event, className, border }) => {
  const { date, subTitle, slug } = event;
  return (
    <EventItem
      to={`./events/event/${slug}`}
      className={className}
      border={border ? "true" : undefined}
    >
      <div>
        <DateText>
          <div>{moment(date).format("DD MMMM YYYY")}</div>
          <div>{moment(date).format("h:MM a")}</div>
        </DateText>
        <EventText>{subTitle}</EventText>
      </div>
    </EventItem>
  );
};

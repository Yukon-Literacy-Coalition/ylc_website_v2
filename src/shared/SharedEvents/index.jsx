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
  ${(p) => p.theme.fonts.body_text_bold};
  color: ${(p) => p.theme.colors.ylc_blue};
  padding: 10px 0;
  span {
    display: inline-block;
    width: 100%;
  }
  ${mq[3]} {
    span {
      display: inline;
    }
  }
`;

const EventText = styled(DateText)`
  color: ${(p) => p.theme.colors.text};
  ${(p) => p.theme.fonts.extra_small_header};
  display: flex;
`;

export const EventListing = ({ event, className, border }) => {
  const { startDate, endDate, eventTitle, slug, showEventTime } = event;
  return (
    <EventItem
      to={`/events/event/${slug}`}
      className={className}
      border={border ? "true" : undefined}
    >
      <div>
        <EventText>{eventTitle}</EventText>
        <DateText>
          <span>
            {moment(startDate).format("DD MMMM YYYY")}
            {showEventTime && <> {moment(startDate).format("LT")}</>}
          </span>
          {endDate && (
            <span>
              {" "}
              - {moment(endDate).format("DD MMMM YYYY")}
              {showEventTime && <> {moment(endDate).format("LT")}</>}
            </span>
          )}
        </DateText>
      </div>
    </EventItem>
  );
};

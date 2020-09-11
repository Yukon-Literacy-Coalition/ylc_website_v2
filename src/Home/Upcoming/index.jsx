import React from "react";
import styled from "@emotion/styled";
import { Link } from "@reach/router";
// import { css } from "@emotion/core";
import { SmallSectionTitle as TitleImport } from "../../shared/Type";
import { EventListing } from "../../shared/SharedEvents";
import { MarginedContainer, SectionContainer } from "../../shared/Layout";
import { InvertedLargeButton } from "../../shared/Features";
import { useWindowDimensions } from "../../utilsJSX";

const SmallSectionTitle = styled(TitleImport)`
  grid-column: span 12;
  display: flex;
  justify-content: space-between;
`;

const Upcoming = ({ events }) => {
  const { height, width } = useWindowDimensions();
  const upcomingAmount = width <= 1060 && width >= 800 ? 3 : 4;
  const upcomingEvents =
    events?.length > upcomingAmount
      ? events?.slice(0, upcomingAmount)
      : events || [];
  const eventsLength = upcomingEvents.length;

  return (
    <SectionContainer>
      <MarginedContainer>
        <SmallSectionTitle>
          <em>Upcoming Events</em>
          <Link to={"./events"}>
            <InvertedLargeButton>More Events</InvertedLargeButton>
          </Link>
        </SmallSectionTitle>
      </MarginedContainer>
      <MarginedContainer>
        {!upcomingEvents.length && <div>No Upcoming Events</div>}
        {!!upcomingEvents.length &&
          upcomingEvents.map((event, i) => {
            return (
              <EventListing
                event={event}
                key={event.date + event.title}
                border={eventsLength - 1 === i}
              />
            );
          })}
      </MarginedContainer>
    </SectionContainer>
  );
};

export default Upcoming;

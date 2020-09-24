import React from "react";
import { withRouteData } from "react-static";
import { MarginedContainer, SectionContainer } from "../shared/Layout";
import { PageHeader } from "../shared/Features";
import { EventListing } from "../shared/SharedEvents";
import { usePosts, Pagination } from "../shared/Pagination";
import styled from "@emotion/styled";
import { SectionHeader, HeaderTitle, DarkAndLightText } from "../shared/Type";

const EventsOverview = (props) => {
  const allItems = props?.events;
  const [
    getDeeperItems,
    getShallowerItems,
    itemsStart,
    itemsEnd,
    currentItems,
  ] = usePosts({ allItems });

  const NoEvents = styled.div`
    grid-column: span 12;
  `;

  return (
    <>
      <PageHeader {...props} text={"Upcoming Events"} />
      <SectionContainer>
        {!!currentItems?.length ? (
          <MarginedContainer>
            {currentItems.map((event, i) => {
              const eventNumber = i + 1;
              return (
                <EventListing
                  event={event}
                  key={event.date + event.title}
                  border={eventNumber % 4 === 0}
                />
              );
            })}
            <Pagination
              {...{
                getDeeperItems,
                getShallowerItems,
                itemsStart,
                itemsEnd,
                allItems,
                firstButton: "Sooner",
                secondButton: "Later",
              }}
            />
          </MarginedContainer>
        ) : (
          <MarginedContainer>
            <NoEvents>
              <SectionHeader>
                <HeaderTitle>
                  <DarkAndLightText text={"No Upcoming Events"} />
                </HeaderTitle>
              </SectionHeader>
            </NoEvents>
          </MarginedContainer>
        )}
      </SectionContainer>
    </>
  );
};

export default withRouteData(EventsOverview);

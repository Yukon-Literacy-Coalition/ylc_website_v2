import React from "react";
import { withRouteData } from "react-static";
import { MarginedContainer, SectionContainer } from "../shared/Layout";
import { PageHeader } from "../shared/Features";
import { EventListing } from "../shared/SharedEvents";
import { usePosts, Pagination } from "../shared/Pagination";

const EventsOverview = (props) => {
  const allItems = props?.events;
  const [
    getDeeperItems,
    getShallowerItems,
    itemsStart,
    itemsEnd,
    currentItems,
  ] = usePosts({ allItems });

  return (
    <>
      <PageHeader {...props} text={"Upcoming Events"} />
      <SectionContainer>
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
      </SectionContainer>
    </>
  );
};

export default withRouteData(EventsOverview);

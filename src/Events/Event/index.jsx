import React from "react";
import { withRouteData } from "react-static";
import moment from "moment";
import Project from "../../shared/Project";

export const Event = (props) => {
  const event = props?.event;
  console.log({ event });
  console.log(event?.startDate);
  let startDate = event?.startDate
    ? moment(event?.startDate).format("MMMM Do, YYYY")
    : "";
  let endDate = event?.endDate
    ? " - " + moment(event?.endDate).format("MMMM Do, YYYY")
    : "";
  const eDate = `${startDate} ${endDate}`;

  // const eDate = moment(event?.date).format("MMMM Do, YYYY");
  return <Project {...event} {...props} title={eDate} />;
};

export default withRouteData(Event);

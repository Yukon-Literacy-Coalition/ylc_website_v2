import React from "react";
import { withRouteData } from "react-static";
import moment from "moment";
import Project from "../../shared/Project";

export const Event = ({ event }) => {
  const eDate = moment(event?.date).format("MMMM Do, YYYY");
  return <Project {...event} title={eDate} />;
};

export default withRouteData(Event);

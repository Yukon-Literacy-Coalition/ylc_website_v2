import React from "react";
import { withRouteData } from "react-static";
import moment from "moment";
import Project from "../../shared/Project";

export const Event = (props) => {
  const event = props?.event;
  const eDate = moment(event?.date).format("MMMM Do, YYYY");
  return <Project {...event} {...props} title={eDate} />;
};

export default withRouteData(Event);

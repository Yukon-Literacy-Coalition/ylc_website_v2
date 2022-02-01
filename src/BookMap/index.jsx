import React from "react";
import { withRouteData } from "react-static";

export const BookMap = () => {
  return (
    <div>
      <div>The Book Map</div>
    </div>
  );
};

export default withRouteData(BookMap);

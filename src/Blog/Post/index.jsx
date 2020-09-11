import React from "react";
import { withRouteData } from "react-static";
import moment from "moment";
import Project from "../../shared/Project";

export const Post = ({ post }) => {
  const postDate = moment(post?.date).format("MMMM Do, YYYY");
  return <Project {...post} title={postDate} />;
};

export default withRouteData(Post);

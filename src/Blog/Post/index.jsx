import React from "react";
import { withRouteData } from "react-static";
import moment from "moment";
import Project from "../../shared/Project";

export const Post = (props) => {
  const { post } = props;
  const postDate = moment(post?.date).format("MMMM Do, YYYY");
  return <Project {...post} {...props} title={postDate} />;
};

export default withRouteData(Post);

import React from "react";
import { withRouteData } from "react-static";
import { PageHeader } from "../shared/Features";
import { PostListing } from "../shared/SharedBlog";
import { MarginedContainer, SectionContainer } from "../shared/Layout";
import { usePosts, Pagination } from "../shared/Pagination";

const Blog = (props) => {
  const allItems = props?.posts;
  const [
    getDeeperItems,
    getShallowerItems,
    itemsStart,
    itemsEnd,
    currentItems,
  ] = usePosts({ allItems });

  return (
    <div>
      <PageHeader {...props} text={"The News"} />
      <SectionContainer>
        <MarginedContainer>
          {currentItems?.map((post, i) => (
            <PostListing post={post} key={post.date + post.title} />
          ))}
          <Pagination
            {...{
              getDeeperItems,
              getShallowerItems,
              itemsStart,
              itemsEnd,
              allItems,
            }}
          />
        </MarginedContainer>
      </SectionContainer>
    </div>
  );
};

export default withRouteData(Blog);

import React from "react";
import { Link } from "@reach/router";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { SmallSectionTitle as TitleImport } from "../../shared/Type";
import { PostListing } from "../../shared/SharedBlog";
import { MarginedContainer, SectionContainer } from "../../shared/Layout";
import { InvertedLargeButton } from "../../shared/Features";
import { useWindowDimensions } from "../../utilsJSX";

const SmallSectionTitle = styled(TitleImport)`
  grid-column: span 12;
  display: flex;
  justify-content: space-between;
`;

const PostStyles = css`
  grid-column: span 3;
`;

const sectionStyles = (theme) => css`
  background: ${theme.colors.light_accent};
`;

const RecentPosts = (props) => {
  const { height, width } = useWindowDimensions();
  const upcomingAmount = width <= 1060 ? 3 : 4;
  const { posts } = props;
  const recentPosts =
    posts?.length > upcomingAmount
      ? posts?.slice(0, upcomingAmount)
      : posts || [];
  return (
    <SectionContainer css={sectionStyles}>
      <MarginedContainer>
        <SmallSectionTitle>
          <em>News</em>
          <Link to={"/news"}>
            <InvertedLargeButton>More News</InvertedLargeButton>
          </Link>
        </SmallSectionTitle>
      </MarginedContainer>
      <MarginedContainer>
        {!recentPosts.length && <div>No Recent News</div>}
        {!!recentPosts.length &&
          recentPosts.map((post, i) => {
            return (
              <PostListing
                css={PostStyles}
                post={post}
                key={post.date + post.title}
              />
            );
          })}
      </MarginedContainer>
    </SectionContainer>
  );
};

export default RecentPosts;

import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import moment from "moment";
import { Link as RRLink } from "@reach/router";
import removeMd from "remove-markdown";
import { SmallButton } from "../Features";
import { lighten } from "polished";
import { truncate } from "../../utilsJSX";
import { mq } from "../../theme";

const ImgContainer = styled.div`
  width: calc(100% - 10px);
  height: calc(170px - 10px);
  background-image: url(${(p) => p.thumbnail});
  /* background-color: ${(p) => p.theme.colors.faded_text}; */
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 2px 2px 0 0;
  margin: 5px;
`;

const PostText = styled.div`
  ${(p) => p.theme.fonts.body_text_bold};
  color: ${(p) => p.theme.colors.ylc_blue};
  position: absolute;
  top: -25px;
`;

const Title = styled.div`
  ${(p) => p.theme.fonts.body_text_bold};
  font-size: 14px;
  position: relative;
  color: ${(p) => p.theme.colors.text};
  padding: 20px 10px;
  height: 75px;
`;

const PostBodyContainer = styled.div`
  /* background-color: white; */
  text-align: center;
  padding: 0 5px;
`;

const PostBody = styled.div`
  ${(p) => p.theme.fonts.small_body_text}
  padding: 0 10px 10px;
`;

const Post = styled.div`
  background-image: linear-gradient(
      transparent,
      transparent 48%,
      transparent 50%,
      lightgrey 51%,
      white 53%,
      white
    ),
    url(${(p) => p.thumbnail});
  /* background-position: top; */
  background-size: cover;
  transition: all 0.4s;
  height: 350px;
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* background: white; */
  border-radius: 2px;
  &:hover {
    ${(p) => p.theme.hover.box}/* background: ${(p) =>
      lighten("0.17", p.theme.colors.medium_accent)}; */
  }
`;

const SmallButContainer = styled.div`
  text-align: center;
  padding-bottom: 20px;
`;

const Link = styled(RRLink)`
  grid-column: span 3;
  ${mq[3]} {
    grid-column: span 4;
  }
  ${mq[2]} {
    grid-column: span 6;
  }
  ${mq[1]} {
    grid-column: span 12;
  }
`;

export const PostListing = ({ post, className }) => {
  console.log({ post });
  const { date, slug, thumbnail, contentBlocks, articleTitle } = post;
  const blockWithBody = contentBlocks?.find((c) => {
    console.log({ c });
    return c?.contentBlock?.body?.length;
  });
  const blockWithSubTitle = contentBlocks?.find((c) => {
    console.log("2", { c });
    return c?.contentBlock?.subTitle?.length;
  });
  return (
    <Link className={className} to={`/news/post/${slug}`}>
      <Post thumbnail={thumbnail}>
        <div
          css={css`
            position: relative;
          `}
        >
          <PostText>{moment(date).format("DD MMMM YYYY")}</PostText>
          <ImgContainer />
          <PostBodyContainer>
            <Title>
              {articleTitle || blockWithSubTitle?.contentBlock?.subTitle}
            </Title>
            <PostBody>
              {truncate(removeMd(blockWithBody?.contentBlock?.body) || "", 13)}
              ...
            </PostBody>
          </PostBodyContainer>
        </div>
        <SmallButContainer>
          <SmallButton>Read</SmallButton>
        </SmallButContainer>
      </Post>
    </Link>
  );
};

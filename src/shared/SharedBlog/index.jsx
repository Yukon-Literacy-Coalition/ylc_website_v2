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
  width: 100%;
  height: 170px;
  background-image: url(${(p) => p.thumbnail});
  /* background-color: ${(p) => p.theme.colors.faded_text}; */
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 2px 2px 0 0;
`;

const PostText = styled.div`
  ${(p) => p.theme.fonts.body_text_bold};
  color: ${(p) => p.theme.colors.ylc_blue};
  position: absolute;
  top: -25px;
`;

const Title = styled.div`
  ${(p) => p.theme.fonts.body_text_bold};
  position: relative;
  color: ${(p) => p.theme.colors.text};
  padding: 20px 10px;
  height: 75px;
`;

const PostBodyContainer = styled.div`
  text-align: center;
  padding: 0 5px;
`;

const PostBody = styled.div`
  ${(p) => p.theme.fonts.small_body_text}
  padding: 0 10px 10px;
`;

const Post = styled.div`
  transition: all 0.4s;
  height: 350px;
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: white;
  border-radius: 2px;
  &:hover {
    ${(p) => p.theme.hover.box}
    background: ${(p) => lighten("0.17", p.theme.colors.medium_accent)};
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
  const { date, subTitle, slug, thumbnail, body } = post;
  return (
    <Link className={className} to={`/news/post/${slug}`}>
      <Post>
        <div
          css={css`
            position: relative;
          `}
        >
          <PostText>{moment(date).format("DD MMMM YYYY")}</PostText>
          <ImgContainer thumbnail={thumbnail} />
          <PostBodyContainer>
            <Title>{subTitle}</Title>
            <PostBody>{truncate(removeMd(body), 13)}...</PostBody>
          </PostBodyContainer>
        </div>
        <SmallButContainer>
          <SmallButton>Read</SmallButton>
        </SmallButContainer>
      </Post>
    </Link>
  );
};

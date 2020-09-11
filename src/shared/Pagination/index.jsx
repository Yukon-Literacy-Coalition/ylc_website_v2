import React, { useState, useEffect } from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { LargeButton as ButtonImport } from "../Features";

export const usePosts = ({ allItems }) => {
  const postsPerPage = 12;
  const [currentItems, setCurrentPosts] = useState([]);
  const [itemsStart, setPostsStart] = useState(0);
  const [itemsEnd, setPostsEnd] = useState(postsPerPage);

  useEffect(() => {
    setCurrentPosts(allItems.slice(itemsStart, itemsEnd));
  }, [allItems, itemsStart, itemsEnd]);

  const getDeeperItems = () => {
    setCurrentPosts(allItems.slice(itemsEnd, itemsEnd + postsPerPage));
    setPostsStart(itemsEnd);
    setPostsEnd(itemsEnd + postsPerPage);
  };

  const getShallowerItems = () => {
    setCurrentPosts(allItems.slice(itemsStart - postsPerPage, itemsStart));
    setPostsStart(itemsStart - postsPerPage);
    setPostsEnd(itemsStart);
  };

  return [
    getDeeperItems,
    getShallowerItems,
    itemsStart,
    itemsEnd,
    currentItems,
  ];
};

const LargeButton = styled(ButtonImport)`
  margin: 0 10px;
`;

const PaginationContainer = styled.div`
  grid-column: span 12;
  text-align: center;
  padding: 15px 0;
`;

export const Pagination = ({
  itemsStart = 0,
  itemsEnd = 0,
  allItems = [],
  getShallowerItems = () => {},
  getDeeperItems = () => {},
  firstButton = "Newer",
  secondButton = "Older",
}) => (
  <PaginationContainer>
    <LargeButton disabled={itemsStart <= 0} onClick={() => getShallowerItems()}>
      {`< ${firstButton}`}
    </LargeButton>
    <LargeButton
      disabled={itemsEnd >= allItems.length}
      onClick={() => getDeeperItems()}
    >
      {`${secondButton} >`}
    </LargeButton>
  </PaginationContainer>
);

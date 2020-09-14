import React from "react";
import { withRouteData } from "react-static";
import moment from "moment";
import styled from "@emotion/styled";
import { MarginedContainer, SectionContainer } from "../../shared/Layout";
import { LargeButton, PageHeader } from "../../shared/Features";
import { mq, mqO } from "../../theme";

const StatementContainer = styled.div`
  grid-column: span 2;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid ${(p) => p.theme.colors.medium_accent};
  border-radius: 4px;
  height: 110px;
  ${mq[3]} {
    grid-column: span 3;
  }
  ${mq[2]} {
    grid-column: span 4;
  }
  ${mq[1]} {
    grid-column: span 12;
  }
`;

const StatementTitle = styled.div`
  ${(p) => p.theme.fonts.extra_small_header}
  padding-bottom: 10px;
`;

const Statement = ({ statement }) => (
  <StatementContainer>
    <StatementTitle>{statement.title}</StatementTitle>
    <a href={statement.pdf} download>
      <LargeButton>Download</LargeButton>
    </a>
  </StatementContainer>
);

const Statements = (props) => {
  const statements = props?.statements;
  const sortArray = (a, b) => {
    const first = moment(a.statementYear).format("YYYY");
    const second = moment(b.statementYear).format("YYYY");
    return second - first;
  };

  const sortedArray = !!statements?.length ? statements.sort(sortArray) : [];

  return (
    <>
      <PageHeader {...props} text={"Annual Statements"} />
      <SectionContainer>
        <MarginedContainer>
          {!!sortedArray.length ? (
            sortedArray.map((statement, i) => {
              return (
                <Statement statement={statement} key={statement?.title + i} />
              );
            })
          ) : (
            <div>No statements available.</div>
          )}
        </MarginedContainer>
      </SectionContainer>
    </>
  );
};

export default withRouteData(Statements);

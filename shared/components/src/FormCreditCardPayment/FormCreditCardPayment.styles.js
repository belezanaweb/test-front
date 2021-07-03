import styled from "styled-components";

export const Grid = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const GridColumn = styled.div`
  &:first-of-type {
    flex-shrink: 1;
    margin-right: 20px;
  }

  &:last-of-type {
    flex-grow: 2;
  }
`;

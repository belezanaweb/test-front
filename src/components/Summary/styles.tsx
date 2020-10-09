import styled, { css } from 'styled-components';

interface SummaryItemProps {
  highlight?: boolean;
  bolder?: boolean;
}

export const Container = styled.div`
  border: 1px solid #ccc;
  border-radius: 3px;
  padding: 12px;
  width: 100%;
`;

export const SummaryItem = styled.p<SummaryItemProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  & + p:not(:last-child) {
    margin-top: 10px;
  }
  &:last-child {
    margin-top: 16px;
  }

  ${props =>
    props.highlight &&
    css`
      &,
      span {
        color: #ff7800;
      }
    `}

  ${props =>
    props.bolder &&
    css`
      &,
      span {
        font-weight: 700;
      }
    `}
`;

import styled, { css } from "styled-components";

const baseTitleStyle = css`
  text-transform: uppercase;
  color: #999;
  font-weight: 700;
  line-height: 17px;
`;

export const H1 = styled.h1`
  font-size: 1.2rem;
  ${baseTitleStyle}
`;

export const H2 = styled.h2`
  font-size: 1rem;
  ${baseTitleStyle}
`;

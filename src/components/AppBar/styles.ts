import styled from "styled-components";

export const Container = styled.div`
  height: 4.5rem;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.default};
  display: flex;
  flex-direction: row;
`;

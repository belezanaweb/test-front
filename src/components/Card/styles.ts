import styled from "styled-components";

export const Wrapper = styled.div`
  border-radius: 3px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);
  width: 100%;
  padding: 1.4rem 1.5rem;
  display: inline-block;
`;

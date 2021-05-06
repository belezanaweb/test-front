import styled from "styled-components";

export const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  border-radius: 3px;
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
  padding: 1.4rem 1.5rem;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;

  > div + div {
    margin-top: 0.8rem;
  }

  > div:last-child {
    margin-top: 1.6rem;
  }
`;

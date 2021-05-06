import styled from "styled-components";

export const ProductsList = styled.div`
  > div + div {
    margin-top: 1.5rem;
  }
`;

export const Content = styled.section`
  flex: 1;
  padding: 1rem;

  > div + div,
  > div + button {
    margin-top: 2rem;
  }
`;

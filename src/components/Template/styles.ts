import styled from "styled-components";

export const Content = styled.section`
  flex: 1;
  padding: 1rem;

  > div + div,
  > div + button,
  > div + a {
    margin-top: 2rem;
  }

  > div > h2 {
    margin-left: 1.5rem;
  }
`;

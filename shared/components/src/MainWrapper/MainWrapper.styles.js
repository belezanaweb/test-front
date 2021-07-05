import styled from "styled-components";

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;

  padding: 0 12px;

  @media (min-width: 1024px) {
    max-width: 980px;
    margin: 0 auto;

    flex-direction: row;
    justify-content: space-between;
    align-content: flex-end;

    > section {
      margin-right: 20px;
    }

    section:last-of-type {
      flex-grow: 2;
      margin: 22px 0 0 0;
    }
  }
`;

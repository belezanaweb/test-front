import styled from 'styled-components'

export const ProductContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 2.5fr;
  border: 1px solid rgba(204, 204, 204, 0.5);
  border-radius: 3px;
  margin: 0.5rem;

  &&:not(:nth-child(1)) {
    margin: 1rem 0.5rem 0.5rem 0.5rem;
  }

  div {
    margin: 1rem 1rem 1rem 0;
  }

  div img {
    width: 100%;
    margin: 0 0 0 1rem;
  }

  .title-price {
    display: flex;
    flex-direction: column;
    padding: 0 0 0 0.5rem;

    p {
      font-size: 0.75rem;
      font-family: 'Helvetica 65 Medium', sans-serif;
    }
  }
`

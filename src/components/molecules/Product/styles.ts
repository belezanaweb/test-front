import styled from 'styled-components'

export const ProductContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  border: 1px solid #cccccc;
  border-radius: 3px;
  margin: 0.5rem;

  &&:not(:nth-child(1)) {
    margin: 1rem 0.5rem;
  }

  div {
    margin: 1rem;
  }

  div img {
    width: 100%;
  }

  .title-price {
    display: flex;
    flex-direction: column;
  }
`

import styled from 'styled-components'

export const PriceCard = styled.div`
  border: 1px solid #cccccc;
  margin: 0.5rem;
  padding: 0.5rem;
  border-radius: 5px;
  width: 90%;

  @media (min-width: 360px) {
    width: 92%;
  }

  @media (min-width: 400px) {
    width: 94%;
  }

  @media (min-width: 500px) {
    width: 96%;
  }

  @media (min-width: 767px) {
    width: 100%;
    max-width: 753px;
  }

  div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 0.5rem;
  }
`

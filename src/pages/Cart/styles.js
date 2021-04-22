import styled from 'styled-components'

export const Container = styled.div`
  @media (min-width: 1000px) {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 16% 42% 42%;
  }
`

export const ProductWrapper = styled.div`
  @media (min-width: 1000px) {
    grid-column: 1 / 2;
    margin: 5%;
  }
`

export const ContainerWrapper = styled.div`
  @media (min-width: 1000px) {
    height: 40rem;
    padding: 10%;
  }
`

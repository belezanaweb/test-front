import styled from 'styled-components'

export const ContainerStyled = styled.section`

  @media only screen and (min-width: 768px) {
    padding-top: 24px
  }

  @media only screen and (min-width: 1200px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    max-width: 1200px;
    margin: 0 auto;

    .next {
      padding-top: 27px;
    }
  }

  @media only screen and (min-width: 1800px) {
    grid-template-columns: 2fr 1fr;
    max-width: 1800px;
  }

`
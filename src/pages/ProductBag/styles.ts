import styled, { css } from 'styled-components'

export const ProdctBagStyled = styled('section')`
  padding: 2rem 0;
  h3 {
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.textGrey};
  }

  @media (max-width: 767px) {
    padding: 1.5rem 0;
  }
`

import styled from 'styled-components'

export const Container = styled.div(
  ({ theme }) => `
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    gap: 20px;
    grid-template-areas:
      'product-paper'
      'bag-details';
    @media (min-width: ${theme.breakpoints.deskop}) {
      grid-template-columns: 2fr 1fr;
      grid-template-areas:
        'product-paper bag-details';
      align-items: center;
    }
  `
)

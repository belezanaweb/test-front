import styled from 'styled-components'

export const Container = styled.div(
  ({ theme }) => `
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    gap: 20px;
    grid-template-areas:
      'success-box'
      'payment-confirmation'
      'product-paper'
      'bag-details';
    @media (min-width: ${theme.breakpoints.deskop}) {
      grid-template-areas:
        'success-box success-box'
        'product-paper payment-confirmation'
        'product-paper bag-details';
      grid-template-columns: 2fr 1fr;
    }
    align-items: flex-start;
  `
)

export const SuccessBox = styled.section`
  grid-area: success-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const CheckImage = styled.img`
  margin: 2px 0 12px;
`

export const SuccessParagraph = styled.p(
  ({ theme }) => `
    color: ${theme.colors.accent};
    font-size: ${theme.fonts.highlightText};

    text-align: center;
    font-weight: 700;
    line-height: 17px;
    text-transform: uppercase;
    margin: 0;
  `
)

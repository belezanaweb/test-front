import styled from 'styled-components'

export const Container = styled.section`
  grid-area: payment-confirmation;
`

export const ConfirmationDataParagraph = styled.section(
  ({ theme }) => `
    grid-area: payment-confirmation;
    color: ${theme.colors.black};
    font-size: ${theme.fonts.highlightText};
    margin: 0;
    text-transform: uppercase;
    line-height: 17px;
  `
)

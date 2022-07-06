import styled from 'styled-components'

export const FormContainer = styled.form(
  ({ theme }) => `
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    gap: 20px;
    grid-template-areas:
      'payment-form'
      'bag-details';
    @media (min-width: ${theme.breakpoints.deskop}) {
      grid-template-areas:'payment-form bag-details';
      grid-template-columns: 2fr 1fr;
    }
    align-items: center;
  `
)

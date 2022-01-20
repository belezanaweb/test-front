import styled from 'styled-components'

/* icone de confirmacao de pagamento */
export const PaymentConfirmationImage = styled.img`
  margin: 5px 0 10px 0;
  font-weight: 700;
`

/* texto de confirmacao de pagamento */
export const PaymentConfirmationText = styled.p`
  text-transform: uppercase;
  color: ${({ color }) => color};
  font-size: 14px;
  font-weight: 400;

  @media (min-width: 500px) {
    font-size: 1.3rem;
  }
`

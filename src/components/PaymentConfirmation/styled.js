import styled from 'styled-components'

/* texto de confirmacao de pagamento */
export const PaymentConfirmationText = styled.p`
  text-transform: uppercase;
  color: ${({ color }) => color};
  font-size: 14px;
  font-weight: 700;

  @media (min-width: 500px) {
    font-size: 1.3em;
  }
`
/* icone de confirmacao de pagamento */
export const PaymentConfirmationImage = styled.img`
  margin: 5px 0 10px 0;
  font-weight: 700;
`

export const PaymentConfirmationContainerImage = styled.div`
  width: 39.51px;
`

export const PaymentConfirmationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`

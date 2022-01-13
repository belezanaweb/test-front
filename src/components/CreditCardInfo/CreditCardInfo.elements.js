import styled from 'styled-components'

export const CreditCardInfoTitle = styled.span`
  margin: 2rem 1rem 0.5rem;
  color: #999;
  font-weight: bold;
  display: block;
`

export const CreditCardInfoContainer = styled.div`
  padding: 2rem;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 1px 1px 5px rgba(0, 0, 29, 0.22);

  display: flex;
  flex-direction: column;

  @media (max-width: 720px) {
    padding: 1rem;

    & div + div {
      margin-top: 1rem;
    }
  }
`

export const CreditCardInfoText = styled.p`
  font-weight: bold;
  color: #212122;
  line-height: 1.5rem;
`

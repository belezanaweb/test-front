import styled from 'styled-components'

export const PaymentBackgroud = styled.div`
  @media only screen and (max-width: 412px) {
    max-width: 412px;
  }

  @media only screen and (min-width: 412px) and (max-width: 736px) {
    max-width: 736px;
    margin-left: 30px;
  }
`

export const PaymentDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

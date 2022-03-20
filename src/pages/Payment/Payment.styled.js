import styled from 'styled-components'

export const PaymentDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const PaymentWrapper = styled.div`
  height: 325px;
  width: 341px;
  display: flex;
  flex-direction: column;
  border-radius: 3px;
  background-color: #fff;
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);
  align-items: center;

  .input-wrapper {
    display: flex;
    width: 100%;
    margin-left: 30px;
  }
`

export const PaymentBackgroud = styled.div`
  @media only screen and (max-width: 412px) {
    max-width: 412px;
  }

  @media only screen and (min-width: 412px) and (max-width: 736px) {
    max-width: 736px;
    margin-left: 30px;
  }
`

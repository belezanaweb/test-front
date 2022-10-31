import styled from 'styled-components'

export const Container = styled.div`
  padding: 12px;
  h1 {
    text-transform: uppercase;
    font-weight: bold;
    color: #999;
    margin-left: 12px;
    margin-bottom: 8px;
    font-size: 14px;
  }
`
export const SuccessWarper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 12px 0 8px;
  img {
    width: 40px;
    height: 39px;
    margin-bottom: 12px;
  }
  p {
    text-transform: uppercase;
    font-size: 14px;
    text-align: center;
    font-weight: bold;
    color: #ff7800;
  }
`

export const PaymentContainer = styled.div`
  margin-bottom: 20px;
  p {
    color: #000;
    font-size: 14px;
    text-transform: uppercase;
  }
`

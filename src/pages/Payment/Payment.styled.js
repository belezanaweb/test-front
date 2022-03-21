import styled from 'styled-components'

export const PaymentDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const PaymentWrapper = styled.div`
  height: 215px;
  width: 341px;
  display: flex;
  flex-direction: column;
  border-radius: 3px;
  background-color: #fff;
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
  padding-top: 8px;

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

//Prices display

export const PaymentValuesWrapper = styled.div`
  box-sizing: border-box;
  height: 129px;
  width: 341px;
  border-radius: 3px;
  border: 1px solid #ccc;
  margin: 15px 0px;

  .products-display {
    display: flex;
    width: 320px;
    margin: 5px;
    margin-top: 10px;
    justify-content: space-between;
  }

  p {
    margin: 0px;
    width: 80px;
    text-align: end;
  }

  .change-color {
    color: #ff7800;
  }
`

export const PaymentValuesP = styled.div(
  ({ color }) => `
  height: 17px; 
  width: 220px;
  margin-left: 15px;
  color: ${color};
  font-size: 14px;
  letter-spacing: NaNpx;
  line-height: 17px;
`
)

import styled from 'styled-components'

export const PaymentDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

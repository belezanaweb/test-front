import styled from 'styled-components'

export const PaymentBackgroud = styled.div`
  @media only screen and (max-width: 412px) {
    max-width: 412px;
  }

  .input-display {
    box-sizing: border-box;
    height: 45px;
    width: 320px;
    border-radius: 3px;
    background-color: #fff;
    border: 1px solid #e7e7e7;
    box-shadow: inset 0 1px 2px 0 rgba(0, 0, 0, 0.2);
    margin-left: 5px;
  }

  .input-display-error {
    box-sizing: border-box;
    height: 45px;
    width: 320px;
    border-radius: 3px;
    background-color: #fff;
    border: 1px solid red;
    box-shadow: inset 0 1px 2px 0 rgba(0, 0, 0, 0.2);
    margin-left: 5px;
  }

  input::-webkit-input-placeholder,
  textarea::-webkit-input-placeholder {
    padding-left: 10px;
    color: #e0e7ee;
  }

  input:-moz-placeholder,
  textarea:-moz-placeholder {
    padding-left: 10px;
    color: #e0e7ee;
  }

  .input-display:focus {
    outline: 1px solid #a43287;
  }

  .error {
    height: 14px;
    color: #f30;
    margin-left: 14px;
    font-family: 'Helvetica Neue';
    font-size: 12px;
    letter-spacing: NaNpx;
    line-height: 14px;
  }
`

export const PaymentDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Display = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 255px;
  width: 340px;
  margin-top: 15px;
  padding-top: 15px;
  border-radius: 3px;
  background-color: #fff;
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);
`

export const Input = styled.div(
  ({ width }) => `
  height: 84px;
  width: ${width}px;
  
`
)

export const InputTitle = styled.label(
  ({ margin }) =>
    `
  margin-left: ${margin}px;
  height: 14px;
  width: 129.71px;
  color: #ccc;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: NaNpx;
  line-height: 14px;
`
)

export const WrapperDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  heigth: 200px;
  width: 341px;

  .input-display-expiry:focus {
    outline: 1px solid #a43287;
  }

  .input-display-cvv:focus {
    outline: 1px solid #a43287;
  }

  .input-display-expiry {
    box-sizing: border-box;
    height: 45px;
    width: 160px;
    border-radius: 3px;
    background-color: #fff;
    border: 1px solid #e7e7e7;
    box-shadow: inset 0 1px 2px 0 rgba(0, 0, 0, 0.2);
    margin-left: 10px;
  }

  .input-display-cvv {
    box-sizing: border-box;
    height: 45px;
    width: 140px;
    border-radius: 3px;
    background-color: #fff;
    border: 1px solid #e7e7e7;
    box-shadow: inset 0 1px 2px 0 rgba(0, 0, 0, 0.2);
    margin-left: 10px;
  }

  .input-display-error-expiry {
    box-sizing: border-box;
    height: 45px;
    width: 160px;
    border-radius: 3px;
    background-color: #fff;
    border: 1px solid red;
    box-shadow: inset 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  }

  .input-display-error-cvv {
    box-sizing: border-box;
    height: 45px;
    width: 140px;
    border-radius: 3px;
    background-color: #fff;
    border: 1px solid red;
    box-shadow: inset 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  }
`

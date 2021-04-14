import styled from 'styled-components'

export const PaymentContainer = styled.div`
  height: 740px;
  width: 360px;
  border: 1px solid #eee;
`

export const Text = styled.p`
  height: 17px;
  width: 319px;
  color: #999;
  font-family: 'Helvetica Neue';
  font-size: 14px;
  font-weight: 700;
  letter-spacing: NaNpx;
  line-height: 17px;
`

export const FormContainer = styled.form`
  height: 279px;
  width: 340px;
`

export const Label = styled.label`
  height: 14px;
  width: 129.71px;
  color: #ccc;
  font-family: 'Helvetica Neue';
  font-size: 12px;
  font-weight: 700;
  letter-spacing: NaNpx;
  line-height: 14px;
`

export const Input = styled.input`
  box-sizing: border-box;
  height: 45px;
  width: 320px;
  border-radius: 3px;
  background-color: #fff;
  border: 1px solid #e7e7e7;
  box-shadow: inset 0 1px 2px 0 rgba(0, 0, 0, 0.2);
`

export const Button = styled.button`
  height: 60px;
  width: 341px;
  border-radius: 3px;
  background-color: #ff6c00;
  box-shadow: inset 0 -3px 0 0 #d45a00, 0 2px 4px 0 rgba(0, 0, 0, 0.25);
  color: #fff;
  font-family: 'Helvetica Neue';
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0.5px;
  line-height: 24px;
  text-align: center;
  :hover {
    cursor: pointer;
  }
`

export const ButtonNone = styled.button`
  display: none;
`

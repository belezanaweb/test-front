import styled from 'styled-components'

export const Text = styled.p`
  height: 17px;
  width: 319px;
  color: #999;
  font-family: 'Helvetica Neue';
  font-size: 14px;
  font-weight: 700;
  letter-spacing: NaNpx;
  line-height: 17px;
  margin-left: 5%;
`

export const FormContainer = styled.form`
  height: 45vh;
  border-radius: 3px;
  background-color: #fff;
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);
  margin-left: 5%;
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
  margin-left: 3%;
`

export const Input = styled.input`
  box-sizing: border-box;
  height: 45px;
  width: 320px;
  border-radius: 3px;
  background-color: #fff;
  border: 1px solid #e7e7e7;
  box-shadow: inset 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  margin-left: 2%;
`

export const Button = styled.button`
  :disabled {
    height: 10vh;
    width: 90%;
    border-radius: 3px;
    background-color: grey;
    box-shadow: inset 0 -3px 0 0 #d45a00, 0 2px 4px 0 rgba(0, 0, 0, 0.25);
    color: #eee;
    font-family: 'Helvetica Neue';
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 0.5px;
    line-height: 24px;
    text-align: center;
    margin-left: 4%;
    margin-top: 4%;
    :hover {
      cursor: pointer;
    }
  }
  :enabled {
    height: 10vh;
    width: 90%;
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
    margin-left: 4%;
    margin-top: 4%;
    :hover {
      cursor: pointer;
    }
  }
`

export const ButtonNone = styled.button`
  display: none;
`

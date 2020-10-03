import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 769px) {
    flex: 1;
    margin-right: 10px;
  }
`;

export const Form = styled.form`
  padding: 12px;
  background: white;
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);
  border-radius: 3px;
`;

export const FormGroup = styled.div`
  display: block;
  margin-bottom: 25px;

  &.error{

    &:after {
      display: block;
      position: absolute;
      content: "Invalid Field";
      height: 14px;
      width: 129.71px;
      color: #f30;
      font-size: 12px;
      line-height: 14px;
      margin-top: 3px;
    }

    input{
      border: 1px solid #f30;
    }
  }
`;

export const FormGroupFlex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  input {
    &[name="date"] {
      width: 160px;
    }

    &[name="cvv"] {
      width: 140px;
    }
  }

  @media(min-width: 769px){
    justify-content: flex-start;

    input{
      margin-right: 20px;
    }
  }
`;

export const Label = styled.label`
  display: block;
  font-size: 12px;
  font-weight: bold;
  line-height: 14px;
  color: #ccc;
  margin-bottom: 5px;
`;

export const FormField = styled.input`
  width: 100%;
  height: 45px;
  padding: 0 13px;
  border-radius: 3px;
  background: white;
  border: 1px solid #e7e7e7;
  box-shadow: inset 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  color: #212121;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 19px;

  &:focus {
    border: 1px solid #a43287;
    outline: none;
  }

  &::placeholder {
    color: #e0e7ee;
  }
`;

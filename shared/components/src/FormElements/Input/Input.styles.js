import styled from "styled-components";
import { Field, ErrorMessage } from "formik";

export const CustomError = styled(ErrorMessage)`
  font-size: 0.8rem;
  color: #f05b5b;
`;

export const CustomInput = `
  height: 45px;
  width: 320px;
  
  border: 1px solid #E7E7E7;
  border-radius: 3px;
  box-sizing: border-box;
  box-shadow: inset 0 1px 2px 0 rgba(0,0,0,0.2);
  background-color: #FFF;
`;

export const CustomField = styled(Field)`
  ${CustomInput}
`;

export const InputWrapper = styled.div`
  margin-bottom: 20px;
`;

export const LabelText = styled.span`
  display: block;
`;

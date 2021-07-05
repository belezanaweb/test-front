import styled from "styled-components";
import InputMask from "react-input-mask";

export const CustomError = styled.div`
  font-size: 0.85rem;
  color: #f30;
`;

export const InputDefaultStyle = `
  height: 45px;
  width: 100%;
  padding: 14px 13px 12px 13px;

  border-radius: 3px;
  box-sizing: border-box;
  box-shadow: inset 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  background-color: #fff;

  font-size: 1.14em;
  color: #212121;

  &::placeholder {
    color: #e0e7ee;
  }

  &:focus {
    border: 1px solid #a43287;
    outline: none;
  }

  &.has-error {
    border: 1px solid #f30;
  }
`;

export const CustomInput = styled.input`
  ${InputDefaultStyle};
  border: 1px solid #e7e7e7;
`;

export const CustomInputMask = styled(InputMask)`
  ${InputDefaultStyle};
  border: 1px solid #e7e7e7;
`;

export const InputWrapper = styled.div`
  margin-bottom: 20px;
`;

export const LabelText = styled.span`
  display: block;

  font-size: 0.85rem;
  color: #ccc;
`;

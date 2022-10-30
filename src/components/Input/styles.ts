import ReactInputMask from "react-input-mask";
import styled from "styled-components";
import { colors } from "../../utils/style-config";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  label {
    font-weight: 700;
    line-height: 14px;
    font-size: 12px;
    color: ${colors.inputLabelColor};
    margin-bottom: 5px;
  }

  span {
    color: ${colors.errorColor};
    font-size: 12px;
  }
`;

export const InputMask = styled(ReactInputMask)`
  height: 45px;
  padding: 14px;
  width: 100%;
  border-radius: 3px;
  border: ${({ error }: { error?: boolean }) =>
    error
      ? `1px solid ${colors.errorColor}`
      : `1px solid ${colors.inputBorderColor}`};

  outline: none;
  box-shadow: ${({ error }: { error?: boolean }) =>
    error ? "unset" : "inset 0 1px 2px 0 rgba(0, 0, 0, 0.2)"};
  font-size: 16px;
  letter-spacing: 1.37px;

  &:focus {
    outline: none;
    border: 1px solid ${colors.inputFocusColor};
    box-shadow: unset;
  }
  &::placeholder {
    color: ${({ error }: { error?: boolean }) =>
      error ? colors.errorColor : colors.inputPlaceholder};
  }
`;

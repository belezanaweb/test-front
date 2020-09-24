import styled, { css } from 'styled-components';

import MaskedInput from 'react-text-mask';

export const FormInputWrapper = styled.div`
  min-height: 5.3125rem;
`;

export const Label = styled.label`
  color: #ccc;
  font-family: 'Helvetica Neue';
  font-size: 12px;
  font-weight: 700;

  margin-bottom: 0.3125rem;
  display: block;
`;

export const InputStyle = css`
  border-radius: 3px;
  background-color: ${(props) => props.theme.colors.white};
  border: 1px solid #e7e7e7;

  box-shadow: inset 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  display: block;
  padding: 0.9375rem 0.8125rem 0.6875rem;

  width: 100%;
  color: #000;

  transition: border 0.2s ease-out;

  &::placeholder {
    color: #e0e7ee;
  }

  &:focus {
    border: 1px solid #a43287;
    outline: 0;
  }

  &.error {
    border: 1px solid #f30;
  }
`;

export const StyledMaskedInput = styled(MaskedInput)`
  ${InputStyle}
`;

export const TextInput = styled.input`
  ${InputStyle}
`;

export const TextError = styled.span`
  color: #f30;
  font-size: 12px;

  display: block;
  margin-top: 0.3125rem;
`;

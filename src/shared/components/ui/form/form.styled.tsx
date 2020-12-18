import styled from 'styled-components/macro';

import { IFieldStyles, IGroupStyles } from './form.interface';

export const Group = styled.p<IGroupStyles>`
  margin-bottom: 2.5rem;

  ${(props) => props.error && `margin-bottom: 1rem;`};
`;

export const Label = styled.label`
  font-size: 1.2rem;
  display: block;
  color: ${(props) => props.theme.form.label.color};
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

export const Field = styled.input<IFieldStyles>`
  border-radius: 3px;
  background-color: ${(props) => props.theme.form.field.backgroundColor};
  border: 1px solid ${(props) => props.theme.form.field.borderColor};
  box-shadow: inset 0 1px 2px 0 ${(props) => props.theme.form.field.shadowColor};
  color: ${(props) => props.theme.form.field.color};
  font-size: 1.6rem;
  outline: none;
  padding: 1.2rem;
  width: 100%;

  &:focus {
    border-color: ${(props) => props.theme.form.field.borderColor_focus};
  }

  &::placeholder {
    color: ${(props) => props.theme.form.field.placeholderColor};
    opacity: 1;
  }

  &:-ms-input-placeholder {
    color: ${(props) => props.theme.form.field.placeholderColor};
  }

  &::-ms-input-placeholder {
    color: ${(props) => props.theme.form.field.placeholderColor};
  }

  ${(props) => props.error && `border-color: ${props.theme.form.error.color}; box-shadow: none;`};
`;

export const Error = styled.span`
  color: ${(props) => props.theme.form.error.color};
  display: block;
  font-size: 1.2rem;
  line-height: 1.1;
  margin-top: 2px;
`;

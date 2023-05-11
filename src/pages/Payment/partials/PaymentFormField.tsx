import React from 'react';
import styled from 'styled-components';
import { Field, ErrorMessage, FieldProps } from 'formik';
import { IMaskInput } from 'react-imask';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin: 6px;
  padding: 6px;

  input {
    height: 44px;
    padding: 12px;

    color: ${(props) => props.theme.font.color[100]};
    font-size: ${(props) => props.theme.font.size.sm};
    font-weight: ${(props) => props.theme.font.weight.medium};
    font-family: ${(props) => props.theme.font.family.fromText};
    line-height: calc(${(props) => props.theme.font.size.sm} + 2px);

    box-sizing: border-box;
    border: ${(props) => props.theme.border.size} solid ${(props) => props.theme.border.color};
    border-radius: ${(props) => props.theme.border.radius};

    :focus {
      outline: none;
    }

    ::placeholder {
      color: ${(props) => props.theme.border.color};
    }

    &.error {
      border-color: ${(props) => props.theme.colors.danger.color};
    }
  }

  label {
    padding-bottom: 5px;

    color: ${(props) => props.theme.font.color[50]};
    font-size: ${(props) => props.theme.font.size.sm};
    font-weight: ${(props) => props.theme.font.weight.medium};
    font-family: ${(props) => props.theme.font.family.fromText};
    line-height: calc(${(props) => props.theme.font.size.sm}, 2px);
  }

  span {
    color: ${(props) => props.theme.colors.danger.color};
    font-size: ${(props) => props.theme.font.size.xs};
    font-weight: ${(props) => props.theme.font.weight.medium};
    font-family: ${(props) => props.theme.font.family.fromText};
    line-height: calc(${(props) => props.theme.font.size.xs} + 2px);
  }
`;

interface Props {
  field: string,
  text: string,
  mask?: string,
  placeholder?: string,
  isTouched: boolean;
  isError: boolean;
};

const PaymentFormField: React.FC<Props> = ({ field, text, mask, placeholder, isTouched, isError }): React.ReactElement => (
  <Wrapper>
    <label htmlFor={field}>{text}</label>
    <Field type="text" id={field} name={field}>
      {({ field }: FieldProps) => (
        <IMaskInput
          {...field}
          mask={mask}
          placeholder={placeholder}
          className={isTouched && isError ? 'error' : undefined}
        />
      )}
    </Field>
    <ErrorMessage name={field} component="span" data-testid='form-field-error' />
  </Wrapper>
);

export default PaymentFormField;

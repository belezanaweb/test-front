import React from 'react';
import MaskedInput from 'react-text-mask';

import classnames from 'classnames';

import styled, { css } from 'styled-components';

const InputStyle = css`
  border-radius: 3px;
  background-color: ${props => props.theme.colors.white};
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

const TextInput = styled.input`
  ${InputStyle}
`;
const StyledMaskedInput = styled(MaskedInput)`
  ${InputStyle}
`;

const Label = styled.label`
  color: #ccc;
  font-family: 'Helvetica Neue';
  font-size: 12px;
  font-weight: 700;

  margin-bottom: 0.3125rem;
  display: block;
`;

const ErrorText = styled.span`
  color: #f30;
  font-size: 12px;

  display: block;
  margin-top: 0.3125rem;
`;

const FormFieldWrapper = styled.div`
  min-height: 5.3125rem;
`;

const FormField = React.forwardRef(function(
  { error, id, defaultValue, label, className, mask, ...restProps },
  ref
) {
  const klass = classnames(
    {
      error: error
    },
    className
  );

  return (
    <FormFieldWrapper>
      <Label htmlFor={id}>{label}</Label>
      {mask instanceof Array && mask ? (
        <StyledMaskedInput
          id={id}
          mask={mask}
          className={klass}
          defaultValue={defaultValue}
          guide={false}
          ref={ref}
          {...restProps}
        />
      ) : (
        <TextInput id={id} ref={ref} className={klass} defaultValue={defaultValue} {...restProps} />
      )}
      {error && <ErrorText>{error}</ErrorText>}
    </FormFieldWrapper>
  );
});

export default FormField;

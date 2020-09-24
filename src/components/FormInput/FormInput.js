import React from 'react';
import classnames from 'classnames';

import { FormInputWrapper, Label, StyledMaskedInput, TextInput, TextError } from './styles';

const FormInput = React.forwardRef(function (
  { error, id, defaultValue, label, className, mask, ...restProps },
  ref
) {
  const clsName = classnames(
    {
      error: error
    },
    className
  );

  return (
    <FormInputWrapper>
      <Label htmlFor={id}>{label}</Label>
      {mask instanceof Array && mask ? (
        <StyledMaskedInput
          id={id}
          mask={mask}
          className={clsName}
          defaultValue={defaultValue}
          guide={false}
          ref={ref}
          {...restProps}
        />
      ) : (
        <TextInput
          id={id}
          ref={ref}
          className={clsName}
          defaultValue={defaultValue}
          {...restProps}
        />
      )}
      {error && <TextError>{error}</TextError>}
    </FormInputWrapper>
  );
});

export default FormInput;

import * as React from 'react';

import { IFormFieldProps } from './form.interface';
import * as Styled from './form.styled';

export const FormField: React.FC<IFormFieldProps> = ({
  name,
  id,
  inputRef,
  type = 'text',
  placeholder,
  initialValue = '',
  error,
  onChange,
  mask,
}) => {
  const [inputValue, setInputValue] = React.useState<string>(initialValue);

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.target;
    let valueFormatted = value;

    if (mask) {
      valueFormatted = mask(valueFormatted);
    }
    console.log(valueFormatted, 'valueFormatted');
    setInputValue(valueFormatted);

    if (onChange) {
      onChange(valueFormatted);
    }
  };

  return (
    <Styled.Field
      id={id}
      name={name}
      ref={inputRef}
      type={type}
      placeholder={placeholder}
      value={inputValue}
      error={error}
      onChange={handleChange}
    />
  );
};

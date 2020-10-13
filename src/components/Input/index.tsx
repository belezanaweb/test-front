import { useField } from '@unform/core';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import ReactInputMask, { Props as ReactInputMaskProps } from 'react-input-mask';
import { Container } from './styles';

interface InputProps extends Omit<ReactInputMaskProps, 'mask'> {
  name: string;
  label?: string;
  mask?: string;
}

const Input: React.FC<InputProps> = ({
  type = 'text',
  name,
  label,
  mask,
  ...rest
}) => {
  const inputRef = useRef(null);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setFilled] = useState(false);

  const { fieldName, defaultValue, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      setValue(ref: any, value: string) {
        ref.setInputValue(value);
      },
      clearValue(ref: any) {
        ref.setInputValue('');
      },
    });
  }, [fieldName, registerField]);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    const htmlInput = inputRef.current! as HTMLInputElement;
    setFilled(htmlInput && !!htmlInput.value);
    setIsFocused(false);
  }, []);

  return (
    <Container
      className="input"
      isFocused={isFocused}
      isFilled={isFilled}
      isErrored={!!error}>
      {label && <label htmlFor={fieldName}>{label}</label>}
      {!!mask ? (
        <ReactInputMask
          id={fieldName}
          type={type}
          mask={mask}
          ref={inputRef}
          defaultValue={defaultValue}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          {...rest}
        />
      ) : (
        <input
          id={fieldName}
          type={type}
          ref={inputRef}
          defaultValue={defaultValue}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          {...rest}
        />
      )}
      {error && <span className="error">{error}</span>}
    </Container>
  );
};

export default Input;

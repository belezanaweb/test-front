import React, { useRef, useEffect, useState, useCallback, InputHTMLAttributes } from 'react';
import { useField } from '@unform/core';
import { FiAlertCircle } from 'react-icons/fi';
import { Container, Error } from './styles';
import { INPUT_ERROR, INPUT_FILLED, INPUT_FOCUSED } from '../../constants/validation';
import { IconBaseProps } from 'react-icons/lib';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
  defaultValue?: string;
  hasValidation: boolean;
  hasBorder: boolean;
  inputHeight: string;
  radius?: string;
}

export default function Input({
  name,
  icon: Icon,
  hasValidation,
  hasBorder,
  defaultValue,
  inputHeight,
  radius,
  ...rest
}: InputProps) {
  const inputRef = useRef(null);

  const [validation, setValidation] = useState('');
  const { fieldName, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: (ref) => ref.current.value,
      setValue: (ref, value) => (ref.current.value = value),
      clearValue: (ref) => (ref.current.value = '')
    });
  }, [fieldName, registerField]);

  useEffect(() => {
    if (error) setValidation(INPUT_ERROR);
  }, [error]);

  const handleInputFocus = useCallback(() => {
    setValidation(INPUT_FOCUSED);
  }, []);

  const handleInputBlur = useCallback(() => {
    setValidation('');

    if (defaultValue) {
      console.log('✅ ~ inputRef?.current', inputRef?.current);

      setValidation(INPUT_FILLED);
    }
  }, []);

  return (
    <Container
      hasValidation={hasValidation}
      hasBorder={hasBorder}
      inputHeight={inputHeight}
      radius={radius}
    >
      {Icon && <Icon />}
      <input
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        id={fieldName}
        ref={inputRef}
        defaultValue={defaultValue}
        {...rest}
      />

      {error && validation === 'isErrored' && (
        <Error title={error}>
          <FiAlertCircle color="#c53030" size={20} />
        </Error>
      )}
    </Container>
  );
}

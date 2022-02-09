import React, { useRef, useEffect, useState, useCallback, InputHTMLAttributes } from 'react';
import { useField } from '@unform/core';
import { FiAlertCircle } from 'react-icons/fi';
import { Container, Error } from './styles';
import { INPUT_ERROR, INPUT_FILLED, INPUT_FOCUSED } from '../../constants/validation';
import { IconBaseProps } from 'react-icons/lib';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
  hasValidation: boolean;
  hasBorder: boolean;
  inputHeight: string;
  radius?: string;
}

export default function Input({ name, icon: Icon, hasValidation, hasBorder, inputHeight, radius, ...rest }: InputProps) {
  const inputRef = useRef(null);
  const [validation, setValidation] = useState('');
  const { fieldName, defaultValue, registerField, error } = useField(name);

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

    if (inputRef.current?.value) setValidation(INPUT_FILLED);
  }, []);

  return (
    <Container validation={hasValidation && validation} hasBorder={hasBorder} inputHeight={inputHeight} radius={radius}>
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

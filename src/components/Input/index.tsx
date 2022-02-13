import React, { useRef, useEffect, useState, useCallback, InputHTMLAttributes } from 'react';
import { useField } from '@unform/core';
import { FiAlertCircle } from 'react-icons/fi';
import { Container, Error } from './styles';
import { IconBaseProps } from 'react-icons/lib';

import { INPUT_ERROR, INPUT_FOCUSED, ICON_ERROR_COLOR } from '../../constants/validation';
import { creditCardMask, titularNameMask, dateMask, cvvMask } from '../../helpers/masks';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
  defaultValue?: string;
  inputHeight?: string;
  radius?: string;
}

export default function Input({
  name,
  icon: Icon,
  defaultValue,
  inputHeight,
  radius,
  ...rest
}: InputProps) {
  const inputRef = useRef(null);

  const [validationType, setValidationType] = useState('');
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
    if (error) setValidationType(INPUT_ERROR);
  }, [error]);

  const handleInputFocus = useCallback(() => {
    setValidationType(INPUT_FOCUSED);
  }, []);

  const handleInputBlur = useCallback(() => {
    setValidationType('');
  }, []);

  return (
    <>
      <Container validationType={validationType} inputHeight={inputHeight}>
        {Icon && <Icon />}
        <input
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          id={fieldName}
          name={fieldName}
          ref={inputRef}
          defaultValue={defaultValue}
          {...rest}
        />

        {error && validationType === INPUT_ERROR && (
          <Error title={error}>
            <FiAlertCircle color={ICON_ERROR_COLOR} size={20} />
          </Error>
        )}
      </Container>

      {error && validationType === INPUT_ERROR && <div>{error}</div>}
    </>
  );
}

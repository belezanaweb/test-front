import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

function Input({ name, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, registerField, error, clearError } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    });
  }, [fieldName, registerField]);

  return (
    <>
      <input ref={inputRef} isErrored={!!error} onFocus={clearError} {...rest} />
     {error && <span>{error}</span>}
    </>
  )
}

export default Input;

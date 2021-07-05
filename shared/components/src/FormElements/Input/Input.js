import React, { useEffect, useRef } from "react";
import { useField } from "@unform/core";

import * as S from "./Input.styles";

export const Input = ({ id, label, name, mask, ...rest }) => {
  const inputRef = useRef(null);
  const { fieldName, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  /**
   * Check if there is a mask attr into input to render inputMask
   */
  const inputDecision = () => {
    if (mask) {
      return (
        <S.CustomInputMask
          className={error ? "has-error" : ""}
          ref={inputRef}
          mask={mask}
          {...rest}
        />
      );
    }
    return (
      <S.CustomInput
        className={error ? "has-error" : ""}
        ref={inputRef}
        {...rest}
      />
    );
  };

  return (
    <S.InputWrapper>
      <label>
        <S.LabelText htmlFor={id}>{label}</S.LabelText>
        {inputDecision()}
        {error && <S.CustomError name={name}>{error}</S.CustomError>}
      </label>
    </S.InputWrapper>
  );
};

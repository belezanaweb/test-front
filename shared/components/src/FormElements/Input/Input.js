import React, { useEffect, useRef } from "react";
import { useField } from "@unform/core";
import InputMask from "react-input-mask";

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

  return (
    <S.InputWrapper>
      <label>
        <S.LabelText htmlFor={id}>{label}</S.LabelText>
        <S.CustomInput ref={inputRef} mask={mask} {...rest} />
        {error && <S.CustomError name={name}>{error}</S.CustomError>}
      </label>
    </S.InputWrapper>
  );
};

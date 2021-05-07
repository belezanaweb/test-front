import { useField } from "@unform/core";
import React, { useCallback, useEffect, useRef, useState } from "react";
import ReactInputMask from "react-input-mask";
import { Container, Error, Title, Wrapper } from "./styles";
import { MaskProps } from "./types";

const Mask: React.FC<MaskProps> = ({ name, title, ...rest }: MaskProps) => {
  const inputRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
      setValue(ref, value) {
        ref.setInputValue(value ? value : "");
      },
      clearValue(ref) {
        ref.setInputValue("");
      },
    });
  }, [fieldName, registerField]);

  return (
    <Wrapper {...rest}>
      {title && <Title>{title}</Title>}
      <Container isErrored={!!error} isFocused={isFocused}>
        <ReactInputMask
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          defaultValue={defaultValue}
          ref={inputRef}
          {...rest}
        />
      </Container>
      {error && <Error title={error}>{error}</Error>}
    </Wrapper>
  );
};

export default Mask;

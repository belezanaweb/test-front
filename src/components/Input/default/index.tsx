import { useField } from "@unform/core";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Container, Error, Wrapper, Title } from "./styles";
import { InputProps } from "./types";

const Input: React.FC<InputProps> = ({
  name,
  title,
  className,
  ...rest
}: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
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
    });
  }, [fieldName, registerField]);

  return (
    <Wrapper className={className}>
      {title && <Title>{title}</Title>}
      <Container isErrored={!!error} isFocused={isFocused}>
        <input
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

export default Input;

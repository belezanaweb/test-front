import { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  title?: string;
  name: string;
}

export interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

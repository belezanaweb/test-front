import { Props as InputMaskProps } from "react-input-mask";

export interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

export interface MaskProps extends InputMaskProps {
  title?: string;
  name: string;
}

export type TButtonSize = 'small' | 'medium' | 'large';
export type TButtonType = 'button' | 'submit' | 'reset';
export type TButtonStyleType = 'primary';

export interface IButtonProps {
  size?: TButtonSize;
  children: JSX.Element | string;
  type?: TButtonType;
  block?: boolean;
  styleType?: TButtonStyleType;
  disabled?: boolean;
  onClick?: () => void;
}

export interface IButtonStyles {
  styleType: TButtonStyleType;
  block: boolean;
  size: TButtonSize;
  disabled: boolean;
}

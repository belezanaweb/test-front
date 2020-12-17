export type TSize = 'small' | 'medium' | 'large';

export interface IButtonProps extends HTMLButtonElement {
  size?: TSize;
  children: any;
  onClick?: () => void;
}

export interface IButtonStyles {
  size: TSize;
}

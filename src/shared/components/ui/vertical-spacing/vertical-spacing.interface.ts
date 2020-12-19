export type TSize = 'small' | 'medium' | 'large';

export interface IVerticalSpacingProps {
  children: JSX.Element | string;
  size?: TSize;
  top?: TSize;
  bottom?: TSize;
}

export interface IVerticalSpacingStyles {
  size: TSize;
  top?: TSize;
  bottom?: TSize;
}

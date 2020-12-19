export type TLoadingSize = 'small' | 'medium' | 'large';

export interface ILoadingProps {
  style?: any;
  color?: string;
  speed?: number;
  size?: TLoadingSize;
}

export interface ILoadingStyles {
  size: TLoadingSize;
  speed: number;
  color: string;
}

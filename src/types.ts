import { MouseEvent, ReactNode } from "react";

export interface ButtonProps {
  children: ReactNode;
  to: string;
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
}

export type ThemeType = {
  device: Record<string, string>;
  colors: Record<string, string>;
}

export type HeaderItemType = {
  isHighlighted?: boolean;
}

export type WrapperType = {
  maxWidth?: string;
}

export type CardType = {
  padding?: string;
}

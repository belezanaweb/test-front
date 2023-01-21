import { MouseEvent, ReactNode } from "react";

export interface ButtonProps {
  children: ReactNode;
  to: string;
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
}

export interface CartItemsProps {
  items?: CartItemType[];
  isConfirmationOnly?: boolean;
}

export interface CartInfoProps {
  subTotal: number;
  shippingTotal: number;
  discount: number;
  total?: number;
}

export type ThemeType = {
  device: Record<string, string>;
  colors: Record<string, string>;
}

export type HeaderItemType = {
  isHighlighted?: boolean;
}

export type CartItemType = {
  quantity: number;
  product: {
    sku: string;
    name: string;
    imageObjects: {
      featured: boolean;
      thumbnail: string;
      small: string;
      medium: string;
      large: string;
      extraLarge: string;
      valid: boolean;
    }[];
    priceSpecification: {
      sku: string;
      price: number;
      originalPrice: number;
      maxPrice: number;
      percent: number;
      discount: number;
    }
  }
}

export type CartDataType = {
  id: string;
  items: CartItemType[];
  subTotal: number;
  shippingTotal: number;
  discount: number;
  total: number;
}

export type CartThumbType= {
  isSmall?: boolean;
}

export type CartInfoItemRowType = {
  marginBottom?: string;
}

export type CartInfoItemColumnType = {
  isHighlighted?: boolean;
  isBold?: boolean;
}

export type WrapperType = {
  maxWidth?: string;
}

export type CardType = {
  padding?: string;
}

export type ColumnType = {
  flex: number;
}

export interface ProductItemProps {
  showPrice?: boolean;
  data: {
    image?: string;
    description: string;
    price?: string;
  };
}
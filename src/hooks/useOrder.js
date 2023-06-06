import { useQuery } from '@tanstack/react-query';
import { fetchCartProducts } from '../services/cart';

export const normalizeCartData = data => {
  return {
    productsQuantity: data.items.length.toString(),
    subTotal: data.subTotal.toFixed(2).replace('.', ','),
    shipping: data.shippingTotal.toFixed(2).replace('.', ','),
    discount: data.discount.toFixed(2),
    total: data.total.toFixed(2).replace('.', ','),
  };
};

export const normalizeProductData = data => {
  return data.items.reduce((acc, curr) => {
    const formattedProduct = {
      imageUrl: curr.product.imageObjects[0].small,
      productName: curr.product.name,
      price: curr.product.priceSpecification.price.toFixed(2).replace('.', ','),
      maxPrice: curr.product.priceSpecification.maxPrice
        .toFixed(2)
        .replace('.', ','),
    };

    return [...acc, formattedProduct];
  }, []);
};

export const useOrder = () => {
  const { data } = useQuery({
    queryKey: ['cart'],
    queryFn: fetchCartProducts,
  });

  const cartData = normalizeCartData(data);
  const productListData = normalizeProductData(data);

  return { cartData, productListData };
};

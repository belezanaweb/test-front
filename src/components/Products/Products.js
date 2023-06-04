import { useQuery } from '@tanstack/react-query';
import { fetchCartProducts } from '../../services/cart';
import Product from '../Product';
import { normalizeCartData } from './utils';

const Products = () => {
  const { data } = useQuery({
    queryKey: ['cart'],
    queryFn: fetchCartProducts,
  });

  const cartProducts = normalizeCartData(data);

  return (
    <>
      {cartProducts.map(product => (
        <Product
          key={product.productName}
          imageUrl={product.imageUrl}
          productName={product.productName}
          price={product.price}
          maxPrice={product.maxPrice}
        />
      ))}
    </>
  );
};

export default Products;

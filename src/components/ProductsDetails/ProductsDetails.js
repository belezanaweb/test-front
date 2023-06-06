import Product from '../Product';
import { useOrder } from '../../hooks';

const ProductsDetails = () => {
  const { productListData } = useOrder();

  return (
    <>
      {productListData.map(product => (
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

export default ProductsDetails;

import Product from '../Product';
import { useOrder } from '../../hooks';
import Text from '../shared/Text/Text';
import styles from './ProductDetails.module.css';

const ProductsDetails = ({ isConfirmationStep }) => {
  const { productListData } = useOrder();

  return (
    <>
      {isConfirmationStep && (
        <Text className={styles.ProductsTitle} size="xlarge" color="primary">
          Produtos
        </Text>
      )}
      {productListData.map(product => (
        <Product
          key={product.productName}
          imageUrl={product.imageUrl}
          productName={product.productName}
          price={product.price}
          maxPrice={product.maxPrice}
          isConfirmationStep={isConfirmationStep}
        />
      ))}
    </>
  );
};

export default ProductsDetails;

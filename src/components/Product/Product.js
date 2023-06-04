import Text from '../shared/Text/Text';
import styles from './Product.module.css';
import Image from 'next/image';

const Product = ({ imageUrl, productName, price, maxPrice }) => {
  return (
    <div className={styles.Container}>
      <Image src={imageUrl} width={60} height={60} alt="product image" />
      <Text className={styles.ProductName} size="small">
        {productName}
      </Text>
      <div className={styles.PriceContainer}>
        {price !== maxPrice && (
          <Text color="secondary" decoration="scratch" data-testid="max-price">
            R${maxPrice}
          </Text>
        )}
        <Text weight="bold">R${price}</Text>
      </div>
    </div>
  );
};

export default Product;

import Text from '../shared/Text/Text';
import { useQuery } from '@tanstack/react-query';
import { fetchCartProducts } from '@/services/cart';
import styles from './Product.module.css';
import Image from 'next/image';

const Product = () => {
  const { data } = useQuery({
    queryKey: ['cart'],
    queryFn: fetchCartProducts,
  });

  const maxPrice = data.items[0].product.priceSpecification.maxPrice;
  const price = data.items[0].product.priceSpecification.price;

  return (
    <div className={styles.Container}>
      <Image
        src={data.items[0].product.imageObjects[0].small}
        width={60}
        height={60}
        alt="product image"
      />
      <Text className={styles.ProductName} size="small">
        {data.items[0].product.name}
      </Text>
      <div className={styles.PriceContainer}>
        {price !== maxPrice && (
          <Text color="secondary" decoration="scratch">
            R${maxPrice}
          </Text>
        )}
        <Text weight="bold">R${price}</Text>
      </div>
    </div>
  );
};

export default Product;

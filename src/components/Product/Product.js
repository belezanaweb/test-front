import Text from '../shared/Text/Text';
import styles from './Product.module.css';

const Product = () => {
  return (
    <div className={styles.Container}>
      <Text>Arroz</Text>
      <Text>feijão</Text>
    </div>
  );
};

export default Product;

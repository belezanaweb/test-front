import { useQuery } from '@tanstack/react-query';
import { fetchCartProducts } from '../../services/cart';
import Text from '../shared/Text/Text';
import { normalizeCartData } from './utils';
import styles from './CartResume.module.css';
import Button from '../Button/Button';

const CartResume = () => {
  const { data } = useQuery({
    queryKey: ['cart'],
    queryFn: fetchCartProducts,
  });

  const { productsQuantity, subTotal, shipping, discount, total } =
    normalizeCartData(data);

  return (
    <div className={styles.CartResumeContainer}>
      <div className={styles.ResumeItem}>
        <Text>Produtos: ({productsQuantity} itens)</Text>
        <Text>R$ {subTotal}</Text>
      </div>
      <div className={styles.ResumeItem}>
        <Text>Frete:</Text>
        <Text>R$ {shipping}</Text>
      </div>
      <div className={styles.ResumeItem}>
        <Text>Desconto:</Text>
        <Text weight="bold" color="emphasis">
          R$ {discount}
        </Text>
      </div>
      <div className={styles.ResumeItem}>
        <Text size="large" weight="bold">
          Subtotal
        </Text>
        <Text size="large" weight="bold">
          R$ {total}
        </Text>
      </div>
      <Button>Seguir para o pagamento</Button>
    </div>
  );
};

export default CartResume;

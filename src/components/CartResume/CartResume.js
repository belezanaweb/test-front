import { useQuery } from '@tanstack/react-query';
import { fetchCartProducts } from '../../services/cart';
import Text from '../shared/Text/Text';
import { normalizeCartData, getButtonState } from './utils';
import styles from './CartResume.module.css';
import Button from '../Button/Button';
import { useCheckoutContext } from '../../contexts';

const CartResume = () => {
  const { currentTab, setCurrentTab } = useCheckoutContext();
  const { data } = useQuery({
    queryKey: ['cart'],
    queryFn: fetchCartProducts,
  });

  const { buttonText, nextStep } = getButtonState(currentTab, setCurrentTab);
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
      <Button onClick={nextStep}>{buttonText}</Button>
    </div>
  );
};

export default CartResume;

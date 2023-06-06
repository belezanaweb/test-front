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

  const { type, form, buttonText, nextStep } = getButtonState(
    currentTab,
    setCurrentTab,
  );
  const { productsQuantity, subTotal, shipping, discount, total } =
    normalizeCartData(data);

  return (
    <div className={styles.CartResumeContainer}>
      <div className={styles.ResumeItem}>
        <Text size="small">Produtos: ({productsQuantity} itens)</Text>
        <Text component="span" size="small">
          R$ {subTotal}
        </Text>
      </div>
      <div className={styles.ResumeItem}>
        <Text size="small">Frete:</Text>
        <Text component="span" size="small">
          R$ {shipping}
        </Text>
      </div>
      <div className={styles.ResumeItem}>
        <Text size="small">Desconto:</Text>
        <Text component="span" size="small" weight="bold" color="emphasis">
          R$ {discount}
        </Text>
      </div>
      <div className={styles.ResumeItem}>
        <Text weight="bold">Subtotal</Text>
        <Text component="span" weight="bold">
          R$ {total}
        </Text>
      </div>
      <Button type={type} form={form} onClick={nextStep}>
        {buttonText}
      </Button>
    </div>
  );
};

export default CartResume;

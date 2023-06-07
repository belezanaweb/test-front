import { useCheckoutContext } from '../../contexts';
import Text from '../shared/Text/Text';
import styles from './OrderConfirmation.module.css';

const OrderConfirmation = () => {
  const { paymentInfo } = useCheckoutContext();
  const { cardNumber, cardHolderName, expirationDate } = paymentInfo;

  return (
    <div className={styles.PaymentInfoContainer}>
      <Text className={styles.PaymentField} size="xxlarge">
        Compra efetuada com sucesso
      </Text>
      <Text className={styles.PaymentField} color="secondary" size="medium">
        {cardNumber}
      </Text>
      <Text className={styles.PaymentField} color="secondary" size="medium">
        {cardHolderName}
      </Text>
      <Text className={styles.PaymentField} color="secondary" size="medium">
        {expirationDate}
      </Text>
    </div>
  );
};

export default OrderConfirmation;

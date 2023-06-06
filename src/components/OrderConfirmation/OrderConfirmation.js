import Text from '../shared/Text/Text';
import styles from './OrderConfirmation.module.css';

const OrderConfirmation = () => {
  return (
    <Text className={styles.ConfirmationMessage} size="xxlarge">
      Compra efetuada com sucesso
    </Text>
  );
};

export default OrderConfirmation;

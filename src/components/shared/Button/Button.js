import { useCheckoutContext } from '../../../contexts';
import { checkoutTabs } from '../../../enums/checkoutTabs';
import styles from './Button.module.css';

const { CONFIRMATION_TAB } = checkoutTabs;

const Button = ({ children, type, form, onClick }) => {
  const { currentTab } = useCheckoutContext();
  const backgroundColor =
    currentTab === CONFIRMATION_TAB ? styles.Confirmation : styles.Normal;
  return (
    <button
      key={children}
      type={type}
      form={form}
      className={`${styles.Button} ${backgroundColor}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

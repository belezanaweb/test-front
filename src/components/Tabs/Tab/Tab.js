import { useCheckoutContext } from '../../../contexts';
import { checkoutTabs } from '../../../enums/checkoutTabs';
import styles from './Tab.module.css';

const { CONFIRMATION_TAB } = checkoutTabs;

const Tab = ({ value, children }) => {
  const { currentTab, setCurrentTab } = useCheckoutContext();
  const tabClass = currentTab === value ? styles.ActiveTab : styles.Tab;

  const handleTabClick = value => {
    if (value === CONFIRMATION_TAB) return;
    setCurrentTab(value);
  };

  return (
    <button className={tabClass} onClick={() => handleTabClick(value)}>
      {children}
    </button>
  );
};

export default Tab;

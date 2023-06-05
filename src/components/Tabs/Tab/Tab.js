import { useCheckoutContext } from '../../../contexts';
import styles from './Tab.module.css';

const Tab = ({ value, children }) => {
  const { currentTab, setActiveTab } = useCheckoutContext();
  const tabClass = currentTab === value ? styles.ActiveTab : styles.Tab;

  const handleTabClick = value => {
    setActiveTab(value);
  };

  return (
    <button className={tabClass} onClick={() => handleTabClick(value)}>
      {children}
    </button>
  );
};

export default Tab;

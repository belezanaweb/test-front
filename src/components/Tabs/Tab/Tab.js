import { useTabsContext } from '../../TabsContext';
import styles from './Tab.module.css';

const Tab = ({ value, children }) => {
  const { currentValue, setActiveTab } = useTabsContext();
  const tabClass = currentValue === value ? styles.ActiveTab : styles.Tab;

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

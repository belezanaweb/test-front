import { useTabsContext } from '../TabsContext';
import styles from './Tab.module.css';

const Tab = ({ value, setActiveTab, children }) => {
  const currentValue = useTabsContext();
  const tabClass =
    currentValue === value ? styles.ActiveTabButton : styles.TabButton;

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

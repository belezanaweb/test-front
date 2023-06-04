import { useState } from 'react';
import TabsContext from '../TabsContext';
import styles from './Tabs.module.css';

const Tabs = ({ value, children }) => {
  const [activeTab, setActiveTab] = useState(value);

  const contextValue = {
    currentValue: activeTab,
    setActiveTab,
  };

  return (
    <TabsContext.Provider value={contextValue}>
      <nav className={styles.TabsContainer}>
        {children.map(tab => {
          return (
            <div className={styles.TabItem} key={tab.props.value}>
              {tab}
            </div>
          );
        })}
      </nav>
    </TabsContext.Provider>
  );
};

export default Tabs;

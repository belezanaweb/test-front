import TabsContext from '../TabsContext';
import styles from './Tabs.module.css';

const Tabs = ({ value, children }) => {
  return (
    <TabsContext.Provider value={value}>
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

import styles from './Tabs.module.css';

const Tabs = ({ children }) => {
  return (
    <nav className={styles.TabsContainer}>
      {children.map(tab => {
        return (
          <div className={styles.TabItem} key={tab.props.value}>
            {tab}
          </div>
        );
      })}
    </nav>
  );
};

export default Tabs;

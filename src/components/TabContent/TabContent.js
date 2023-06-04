import styles from './TabContent.module.css';

const TabContent = ({ children }) => {
  return (
    <div className={styles.Background}>
      <div className={styles.ContentContainer}>{children}</div>
    </div>
  );
};

export default TabContent;

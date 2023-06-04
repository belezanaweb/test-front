import styles from './Button.module.css';

const Button = ({ children, onClick }) => {
  return (
    <button className={styles.Button} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

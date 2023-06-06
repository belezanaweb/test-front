import styles from './Button.module.css';

const Button = ({ children, type, form, onClick }) => {
  return (
    <button
      key={children}
      type={type}
      form={form}
      className={styles.Button}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

import Text from '../Text';
import styles from './Input.module.css';

const Input = props => {
  const { label, type, name, value, onChange, placeholder, errorMessage } =
    props;
  const errorClass = errorMessage ? styles.InputError : '';

  return (
    <label className={styles.Label}>
      <Text className={styles.LabelText}>{label}</Text>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`${styles.Input} ${errorClass}`}
      />
      {errorMessage && (
        <Text size="small" color="error">
          {errorMessage}
        </Text>
      )}
    </label>
  );
};

export default Input;

import Text from '../shared/Text/Text';
import styles from './Error.module.css';

const Error = () => {
  return (
    <div className={styles.ErrorContainer}>
      <Text>
        Parece que houve um problema, tente carregar a página novamente.
      </Text>
    </div>
  );
};

export default Error;

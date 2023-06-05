import { useReducer } from 'react';
import Text from '../shared/Text/Text';
import Input from '../shared/Input/Input';
import { initialState, reducer } from './reducer';
import { validateForm } from './utils';
import styles from './PaymentForm.module.css';

const PaymentForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleInputChange = event => {
    const { name, value } = event.target;
    dispatch({ type: name, field: name, value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    const errors = validateForm(state);
    dispatch({ type: 'updateErrors', errors });
  };

  return (
    <form id="payment-form" className={styles.Form} onSubmit={handleSubmit}>
      <Text component="h2" className={styles.ContentTitle} size="xlarge">
        Cartão de crédito
      </Text>
      <Input
        type="text"
        name="cardNumber"
        label="Número"
        placeholder="0000 0000 0000 0000"
        errorMessage={state.errors.cardNumber}
        value={state.cardNumber}
        onChange={handleInputChange}
      />
      <Input
        type="text"
        name="cardHolderName"
        label="Nome do titular do cartão"
        placeholder="Nome impresso no cartão"
        errorMessage={state.errors.cardHolderName}
        value={state.cardHolderName}
        onChange={handleInputChange}
      />
      <div className={styles.ShortCardInformations}>
        <Input
          type="text"
          name="expirationDate"
          label="Data de validade"
          placeholder="MM/AA"
          errorMessage={state.errors.expirationDate}
          value={state.expirationDate}
          onChange={handleInputChange}
        />
        <Input
          type="text"
          name="cvv"
          label="Código CVV:"
          placeholder="000"
          errorMessage={state.errors.cvv}
          value={state.cvv}
          onChange={handleInputChange}
        />
      </div>
    </form>
  );
};

export default PaymentForm;

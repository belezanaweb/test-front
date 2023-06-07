import { useReducer } from 'react';
import { useCheckoutContext } from '../../contexts';
import { validateForm, maskCreditCardNumber } from './utils';
import Text from '../shared/Text';
import Input from '../shared/Input';
import { initialState, reducer } from './reducer';
import { checkoutTabs } from '../../enums/checkoutTabs';
import styles from './PaymentForm.module.css';

const { CONFIRMATION_TAB } = checkoutTabs;

const PaymentForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { setCurrentTab, setPaymentInfo } = useCheckoutContext();

  const handleInputChange = event => {
    const { name, value } = event.target;
    dispatch({ type: name, field: name, value });
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const errors = validateForm(state);
    dispatch({ type: 'updateErrors', errors });

    if (!Object.keys(errors).length) {
      setPaymentInfo({
        ...state,
        cardNumber: maskCreditCardNumber(state.cardNumber),
      });
      setCurrentTab(CONFIRMATION_TAB);
    }
  };

  return (
    <form
      id="payment-form"
      className={styles.Form}
      onSubmit={handleSubmit}
      data-testid="payment-form"
    >
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

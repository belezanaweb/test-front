import { BagProductResponse } from '../../services/bag-products/bag-products.services.types';

import { CreditCardFormData } from '../../widgets/checkout/useCheckoutForm';
import { ControlledInput } from '../../ui/input/input.component';

import { useFormContext } from 'react-hook-form';

import './payment-form.styles.css';

interface BagProductListProps {
  bag: BagProductResponse;
}

export const PaymenteForm: React.FC<BagProductListProps> = () => {
  const { control, formState: { errors } } = useFormContext<CreditCardFormData>();

  return (
    <div className="card">
      <h2 className="title">Cartão de crédito</h2>
      <ControlledInput
        control={control}
        errorMessage={errors.payment?.cardNumber?.message}
        name="payment.cardNumber"
        mask="9999 9999 9999 9999"
        placeholder="0000 0000 0000 0000"
        label={'Número'}
      />
      <ControlledInput
        control={control}
        errorMessage={errors.payment?.cardHolder?.message}
        name="payment.cardHolder"
        mask=""
        placeholder="Nome impresso no cartão"
        label={'Nome do titular do cartão'}
      />
      <div className='row'>
        <ControlledInput
          control={control}
          errorMessage={errors.payment?.expiryDate?.message}
          name="payment.expiryDate"
          mask="99/99"
          placeholder="MM/AA"
          label={'Data de validade'}
        />

        <ControlledInput
          control={control}
          errorMessage={errors.payment?.cvv?.message}
          name="payment.cvv"
          mask="999"
          placeholder="000"
          label={'Código CVV:'}
        />
      </div>

    </div>
  );
}

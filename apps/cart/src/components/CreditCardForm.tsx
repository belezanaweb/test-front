import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { yupResolver } from '@hookform/resolvers/yup';

import { useCartProvider } from '../contexts/CartContext';
import { CreditCard } from '../models/CreditCard';
import { Button } from './Button';
import { CartInformation } from './CartInformation';
import { Input } from './Input';
import { InputMasked } from './InputMasked';
import { Layout } from './Layout';
import { schema } from './schema';

export type FormFields = CreditCard;

export function CreditCardForm() {
  const navigate = useNavigate();
  const { cart, setCreditCard } = useCartProvider();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<FormFields>({
    mode: 'all',
    reValidateMode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit(async ({ number, holder, expireDate, cvv }) => {
    setCreditCard({ number, holder, expireDate, cvv });
    navigate('/information');
  });

  return (
    <>
      <form
        className="flex flex-col bg-white rounded-lg border border-stone-300 p-4 w-full"
        onSubmit={onSubmit}
        id="credit-card-form"
      >
        <h1 className="text-black text-xl mb-4">Cartão de crédito</h1>

        <Controller
          name="number"
          control={control}
          render={({ fieldState, field }) => (
            <InputMasked
              id="number"
              label="Número"
              placeholder="0000 0000 0000 0000"
              className="mb-5"
              format="#### #### #### ####"
              value={field.value}
              onChange={field.onChange}
              error={fieldState.error?.message}
            />
          )}
        />

        <Input
          id="holder"
          label="Nome do titular do cartão"
          placeholder="Nome impresso no cartão"
          className="mb-5"
          {...register('holder')}
          error={errors.holder?.message}
        />

        <Controller
          name="expireDate"
          control={control}
          render={({ fieldState, field }) => (
            <InputMasked
              id="expireDate"
              label="Data de validade"
              placeholder="MM/AA"
              className="mb-5"
              format="##/##"
              mask={['M', 'M', 'Y', 'Y']}
              value={field.value}
              onChange={field.onChange}
              error={fieldState.error?.message}
            />
          )}
        />

        <Controller
          name="cvv"
          control={control}
          render={({ fieldState, field }) => (
            <InputMasked
              id="cvv"
              label="Código CVV:"
              placeholder="000"
              format="###"
              value={field.value}
              onChange={field.onChange}
              error={fieldState.error?.message}
            />
          )}
        />
      </form>

      <Layout.Footer>
        <CartInformation
          productsCount={cart?.items.length ?? 0}
          subtotal={cart?.subTotal ?? 0}
          shipping={cart?.shippingTotal ?? 0}
          discount={cart?.discount ?? 0}
          total={cart?.total ?? 0}
        >
          <Button type="submit" form="credit-card-form" disabled={!isValid}>
            Finalizar pedido
          </Button>
        </CartInformation>
      </Layout.Footer>
    </>
  );
}

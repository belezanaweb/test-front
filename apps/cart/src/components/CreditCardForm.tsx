import { Controller, useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';

import { Input } from './Input';
import { InputMasked } from './InputMasked';
import { schema } from './schema';

export type FormFields = {
  number: string;
  holder: string;
  expireDate: string;
  cvv: string;
};

export function CreditCardForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormFields>({
    mode: 'all',
    reValidateMode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit(async ({ number, holder, expireDate, cvv }) => {
    // eslint-disable-next-line no-console
    console.log({ number, holder, expireDate, cvv });
  });

  return (
    <form
      className="flex flex-col bg-white rounded-lg border border-stone-300 p-4 w-full"
      onSubmit={onSubmit}
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
  );
}

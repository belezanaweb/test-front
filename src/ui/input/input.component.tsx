import { Control, Controller } from 'react-hook-form';
import InputMask from 'react-input-mask';
import { CreditCardFormData } from '../../widgets/checkout/useCheckoutForm';
import clsx from 'clsx';
import "./input.styles.css"

type PaymentFieldName =
  "payment.cardNumber" |
  "payment.cardHolder" |
  "payment.expiryDate" |
  "payment.cvv" |
  "step";

export const ControlledInput = ({ control, errorMessage, name, placeholder, label, mask }: { control: Control<CreditCardFormData>, errorMessage?: string, name: PaymentFieldName, placeholder: string, label: string, mask: string }) => {
  return (
    <label className="label">
      {label}
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <InputMask
            inputRef={field.ref}
            mask={mask}
            placeholder={placeholder}
            className={clsx('input', { error: !!errorMessage })}
            {...field}
          />
        )}
      />
      {errorMessage && <span className="error">{errorMessage}</span>}
    </label>
  )
};

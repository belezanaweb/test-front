import { render, screen } from '@testing-library/react';

import { useForm } from 'react-hook-form';
import { describe, it, expect } from 'vitest';
import { ControlledInput } from './input.component';
import { CreditCardFormData } from '../../widgets/checkout/useCheckoutForm';

const FormWrapper = ({
  name,
  label = 'Número do cartão',
  mask = '9999 9999 9999 9999',
  placeholder = '1234 5678 9012 3456',
  errorMessage,
}: {
  name: any;
  label?: string;
  placeholder?: string;
  mask?: string;
  errorMessage?: string;
}) => {
  const { control } = useForm<CreditCardFormData>();

  return (
    <ControlledInput
      control={control}
      name={name}
      label={label}
      placeholder={placeholder}
      mask={mask}
      errorMessage={errorMessage}
    />
  );
};

describe('ControlledInput', () => {
  it('renders label and masked input correctly', () => {
    render(<FormWrapper name="payment.cardNumber" />);

    expect(screen.getByText('Número do cartão')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('1234 5678 9012 3456')).toBeInTheDocument();
  });

  it('shows error message if errorMessage prop is provided', () => {
    render(<FormWrapper name="payment.cardNumber" errorMessage="Campo obrigatório" />);

    expect(screen.getByText('Campo obrigatório')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('1234 5678 9012 3456')).toHaveClass('error');
  });

  it('does not show error message if errorMessage is not provided', () => {
    render(<FormWrapper name="payment.cardNumber" />);

    expect(screen.queryByText('Campo obrigatório')).not.toBeInTheDocument();
  });
});

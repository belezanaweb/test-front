import { describe, it, expect } from 'vitest'
import {  useCheckoutForm } from './useCheckoutForm'
import { FormProvider } from 'react-hook-form'
import { act, renderHook } from '@testing-library/react';

const createFormWrapper = () => {
  const wrapper = ({ children }: { children: React.ReactNode }) => {
    const methods = useCheckoutForm();
    return <FormProvider {...methods}>{children}</FormProvider>;
  };

  return wrapper;
};

describe('useCheckoutForm', () => {
  it('must start with correct default values', () => {
    const { result } = renderHook(() => useCheckoutForm(), {
      wrapper: createFormWrapper(),
    });

    expect(result.current.getValues()).toEqual({
      step: 'cart',
      payment: {
        cardNumber: '',
        cardHolder: '',
        expiryDate: '',
        cvv: '',
      },
    });
  });


  it('must correctly validate valid data', async () => {
    const { result } = renderHook(() => useCheckoutForm(), {
      wrapper: createFormWrapper(),
    });

    act(() => {
      result.current.setValue('payment.cardNumber', '1234 5678 1234 5678');
      result.current.setValue('payment.cardHolder', 'Maria da Silva');
      result.current.setValue('payment.expiryDate', '12/30');
      result.current.setValue('payment.cvv', '123');
    });

    const isValid = await result.current.trigger();

    expect(isValid).toBe(true);
    expect(result.current.formState.errors).toEqual({});
  });
});

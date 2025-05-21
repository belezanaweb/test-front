import { useForm } from 'react-hook-form';
import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

export type CheckoutSteps = 'cart' | 'payment' | 'confirmation';

export const useCheckoutForm = () =>
  useForm<CreditCardFormData>({
    resolver: zodResolver(creditCardSchema),
    mode: "onTouched",
    shouldFocusError: false,
    defaultValues: {
      step: 'cart' as CheckoutSteps,
      payment: {
      cardNumber: '',
      cardHolder: '',
      expiryDate: '',
      cvv: '',
      }
    },
  });


export const creditCardSchema = z.object({
  step: z.enum(['cart', 'payment', 'confirmation']),
  payment:  z.object({
    cardNumber: z
      .string()
      .min(19, 'Insira um número de cartão válido')
      .regex(/^(\d{4} ){3}\d{4}$/, 'Formato inválido'),

    cardHolder: z
      .string()
      .min(2, 'Insira um nome válido'),

    expiryDate: z
      .string()
      .regex(/^(0[1-9]|1[0-2])\/\d{2}$/, 'Insira uma data válida'),

    cvv: z
      .string()
      .length(3, 'Insira um cvv válido')
      .regex(/^\d{3}$/, 'Apenas números'),
  })
})

export type CreditCardFormData = z.infer<typeof creditCardSchema>;


export enum CheckoutStepEnum {
  CART = 'cart',
  PAYMENT = 'payment',
  CONFIRMATION = 'confirmation',
}

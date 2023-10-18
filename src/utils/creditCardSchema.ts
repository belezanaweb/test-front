import { z } from 'zod'

export const CreditCardSchema = z.object({
  cardNumber: z
    .string()
    .length(19, {
      message: 'insira um número de cartão válido',
    })
    .refine(
      (cardNumber) => /^[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}$/.test(cardNumber),
      {
        message: 'insira um número de cartão válido',
      }
    ),
  cardHolderName: z.string().min(1, { message: 'insira um nome válido' }),
  expirationDate: z
    .string()
    .length(5, { message: 'insira uma data válida' })
    .refine((date) => /^(0[1-9]|1[0-2])\/[0-9]{2}$/.test(date), {
      message: 'insira uma data válida',
    }),
  cvv: z
    .string()
    .length(3, { message: 'insira um cvv válido' })
    .refine((cvv) => /^[0-9]{3}$/.test(cvv), {
      message: 'insira um cvv válido',
    }),
})

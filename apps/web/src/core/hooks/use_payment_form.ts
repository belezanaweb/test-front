import { PaymentFormValues } from "@/presentation/payment_form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useCallback, useMemo } from "react";
import { useForm } from "react-hook-form";
import * as Yup from 'yup';

export function usePaymentForm() {
  const validationSchema = useMemo(() => (
    Yup.object().shape({
      cardNumber: Yup.string().min(16, 'insira um número de cartão válido' ),
      holderName: Yup.string().trim().min(1, 'insira um nome válido' ),
      dueDate: Yup.string().min(4, 'insira uma data válida' ),
      cvv: Yup.string().min(3, 'insira um cvv válido')
    })
  ), [])

  const methods = useForm<PaymentFormValues>({
    resolver: yupResolver(validationSchema),
    mode: 'onTouched'
  });

  const onSubmit = useCallback((formValues: PaymentFormValues) => {
    return formValues
  }, []);

  return {
    ...methods,
    onSubmit: methods.handleSubmit(onSubmit)
  }
}
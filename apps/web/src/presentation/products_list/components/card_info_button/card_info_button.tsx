'use client'

import { PaymentFormValues } from "@/presentation/payment_form";
import { Button } from "@test-front/common-ui";
import { useCallback } from "react";
import { useFormContext } from "react-hook-form";

export type CartTabKeysType = 'bag' | 'payment' | 'confirmation';

type CartInfoButtonProps = {
  tabKey: CartTabKeysType
  onCallToAction: (tabName: CartTabKeysType) => void
}

export function CartInfoButton({ tabKey, onCallToAction }: CartInfoButtonProps) {
  const { handleSubmit, formState, reset } = useFormContext<PaymentFormValues>();

  const onConfirmOrder = useCallback(() => {
    onCallToAction('confirmation')
  }, [onCallToAction])

  const onFinishOrder = useCallback(() => {
    onCallToAction('bag')
    reset()
  }, [onCallToAction, reset])

  if (tabKey === 'bag') {
    return (
      <Button className="mt-6" type="button" onClick={() => onCallToAction('payment')}>
        Seguir para o pagamento
      </Button>
    )
  }

  if (tabKey === 'payment') {
    return (
      <Button
        className="mt-6"
        type="button"
        onClick={handleSubmit(() => {
          onConfirmOrder()
        })}
        disabled={!formState.isValid}
      >
        Finalizar pedido
      </Button>
    )
  }

  return (
    <Button type="button" className="mt-6" intent="secondary" onClick={onFinishOrder}>
      Voltar ao início do protótipo
    </Button>
  )
}

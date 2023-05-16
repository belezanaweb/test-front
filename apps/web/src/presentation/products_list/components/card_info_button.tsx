'use client'

import { PaymentFormValues } from "@/presentation/payment_form";
import { Button } from "@test-front/common-ui";
import { useFormContext } from "react-hook-form";

type CartInfoButtonProps = {
  tabKey: string,
  onCallToAction: (tabName: string) => void
}

export function CartInfoButton({ tabKey, onCallToAction }: CartInfoButtonProps) {
  const { handleSubmit, formState, reset  } = useFormContext<PaymentFormValues>();

  function handleConfirmOrder() {
    onCallToAction('confirmation')
    reset()
  }

  if (tabKey === 'bag') {
    return (
      <Button type="button" onClick={() => onCallToAction('payment')}>
        Seguir para o pagamento
      </Button>
    )
  }

  if (tabKey === 'payment') {
    return (
      <Button
        onClick={ handleSubmit((e) => {
          console.log(e)
          handleConfirmOrder()
        })}
        disabled={!formState.isValid}
      >
        Finalizar pedido
      </Button>
    )
  }

  return (
    <>
      <Button intent="secondary" onClick={() => onCallToAction('bag')}>
        Voltar ao início do protótipo
      </Button>
    </>
  )
}

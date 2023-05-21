import { FormProvider, useForm } from "react-hook-form"
import CardInputPayment from "../../../components/CardInputPayment"
import InfoPrices from "../../../components/InfoPrices"
import { ShoppingBagFormated } from "../../../service/shoppingBagService"

type PaymentProps = {
  dataBag: ShoppingBagFormated
  nextStep: () => void
}

const LABEL_BUTTON = 'Finalizar pedido'

export default function payment({ dataBag, nextStep }: PaymentProps) {

  const methods = useForm();
  const onSubmit = (data: any) => {
    console.log(data)
    nextStep()
  };

  return (
    <div>
      <FormProvider {...methods} >
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div><CardInputPayment /></div>
          <div><InfoPrices
            subTotal={dataBag.subTotal}
            shippingTotal={dataBag.shippingTotal}
            discount={dataBag.discount}
            total={dataBag.total}
            totalItens={dataBag.totalItens}
            labelButton={LABEL_BUTTON}
          /></div>
        </form>
      </FormProvider>
    </div>)
}
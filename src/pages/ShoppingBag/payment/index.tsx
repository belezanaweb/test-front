import { FormProvider, useForm } from "react-hook-form"
import CardInputPayment from "../../../components/CardInputPayment"
import InfoPrices from "../../../components/InfoPrices"
import { ShoppingBagFormated } from "../../../service/shoppingBagService"
import { DataPayement } from "../CompletedSuccess"
import { ContainerPayment } from "./Payment.style"

type PaymentProps = {
  dataBag: ShoppingBagFormated
  nextStep: () => void
  updatDataPayment: (newDataPAyment: DataPayement) => void
}

const LABEL_BUTTON = 'Finalizar pedido'

export default function payment({ dataBag, nextStep, updatDataPayment }: PaymentProps) {

  const methods = useForm();
  const onSubmit = (data: any) => {
    console.log(data)
    updatDataPayment({
      numberCard: data.numberCard,
      name: data.name,
      birthDate: data.birthDate
    })
    nextStep()
  };

  return (
    <div>
      <FormProvider {...methods} >
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <ContainerPayment><CardInputPayment /></ContainerPayment>
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
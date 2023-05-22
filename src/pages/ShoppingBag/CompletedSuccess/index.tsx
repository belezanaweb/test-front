import CardProduct from "../../../components/CardProduct";
import CardSuccessPayment from "../../../components/CardSuccessPayment";
import InfoPrices from "../../../components/InfoPrices";
import { ShoppingBagFormated } from "../../../service/shoppingBagService";

export type DataPayement = {
  numberCard: string
  name: string
  birthDate: string
}

type CompletedSuccessProps = {
  dataBag: ShoppingBagFormated
  dataPayment: DataPayement
  nextStep: () => void
}

const LABEL_BUTTON = 'Voltar ao inicio do protótipo'

export default function completedSuccess({ dataBag, nextStep, dataPayment }: CompletedSuccessProps) {
  return <div>
    <CardSuccessPayment numberCard={dataPayment.numberCard} name={dataPayment.name} birthDate={dataPayment.birthDate} />
    <CardProduct products={dataBag.items} showHeader/>
    <InfoPrices
      subTotal={dataBag.subTotal}
      shippingTotal={dataBag.shippingTotal}
      discount={dataBag.discount}
      total={dataBag.total}
      totalItens={dataBag.totalItens}
      labelButton={LABEL_BUTTON}
      handleClick={nextStep} />
  </div>
}
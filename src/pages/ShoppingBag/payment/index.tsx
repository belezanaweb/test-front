import CardInputPayment from "../../../components/CardInputPayment"
import InfoPrices from "../../../components/InfoPrices"
import { ShoppingBagFormated } from "../../../service/shoppingBagService"

type PaymentProps = {
  dataBag: ShoppingBagFormated
  nextStep: () => void
 }

 const LABEL_BUTTON = 'Finalizar pedido'

export default function payment({dataBag, nextStep}: PaymentProps) {
  return <div>
    <div><CardInputPayment /></div>
    <div><InfoPrices 
      subTotal={dataBag.subTotal} 
      shippingTotal={dataBag.shippingTotal} 
      discount={dataBag.discount} 
      total={dataBag.total} 
      totalItens={dataBag.totalItens} 
      labelButton={LABEL_BUTTON} 
      handleClick={nextStep} /></div>
  </div>
}
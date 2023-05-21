import CardProduct from "../../../components/CardProduct";
import InfoPrices from "../../../components/InfoPrices";
import { ShoppingBagFormated } from "../../../service/shoppingBagService";

type BagProps = {
  dataBag: ShoppingBagFormated
  nextStep: () => void
}

const LABEL_BUTTON = 'Seguir para o pagamento'

export default function bag({ dataBag, nextStep }: BagProps) {
  return <div>
    <CardProduct products={dataBag.items} />
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
import CardProduct from "../../../components/CardProduct";
import InfoPrices from "../../../components/InfoPrices";
import { ShoppingBagFormated } from "../../../service/shoppingBagService";
import { ContainerBag, ContainerBagCardProducts } from "./Bag.style";

type BagProps = {
  dataBag: ShoppingBagFormated
  nextStep: () => void
}

const LABEL_BUTTON = 'Seguir para o pagamento'

export default function bag({ dataBag, nextStep }: BagProps) {
  return (
    <ContainerBag>
      <ContainerBagCardProducts>
        <CardProduct products={dataBag.items} showPrices />
      </ContainerBagCardProducts>
      <InfoPrices
        subTotal={dataBag.subTotal}
        shippingTotal={dataBag.shippingTotal}
        discount={dataBag.discount}
        total={dataBag.total}
        totalItens={dataBag.totalItens}
        labelButton={LABEL_BUTTON}
        handleClick={nextStep} />
    </ContainerBag>
  )
}
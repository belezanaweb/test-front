import { useQuery } from "react-query"
import CardInputPayment from "../../components/CardInputPayment"
import CardProduct from "../../components/CardProduct"
import CardSuccessPayment from "../../components/CardSuccessPayment"
import InfoPrices from "../../components/InfoPrices"
import { formatShoppingBagServiceData } from "../../service/shoppingBagService"
import { getShoppingBag } from "../../store/getShoppingBag"

export default function () {

  const { isLoading, data, error } = useQuery('Cart', getShoppingBag)

  if (isLoading) return <div>loading </div>
  if (error) return <div>error</div>
  console.log(formatShoppingBagServiceData(data))
  const dataFormated = formatShoppingBagServiceData(data)
  return (
    <div>
      <CardProduct products={dataFormated.items} showHeader showPrices />
      <InfoPrices 
        subTotal={dataFormated.subTotal} 
        shippingTotal={dataFormated.shippingTotal} 
        discount={dataFormated.discount} 
        total={dataFormated.total}
        totalItens={dataFormated.totalItens} 
        labelButton={'Seguir para o pagamento'} 
        handleClick={() => {}} />
      <CardInputPayment />
      <CardSuccessPayment numberCard={'****.****.****.4545'} name={'Bruce Wayne'} birthDate={'02/2027'} />
    </div>
  )
}
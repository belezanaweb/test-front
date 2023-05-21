import { useQuery } from "react-query"
import { formatShoppingBagServiceData } from "../../service/shoppingBagService"
import { getShoppingBag } from "../../store/getShoppingBag"

export default function() {
  
  const { isLoading, data, error } = useQuery('Cart', getShoppingBag)

  if(isLoading) return <div>loading </div>
  if(error) return <div>error</div>
  console.log(formatShoppingBagServiceData(data))
  return <div>olã</div>
}
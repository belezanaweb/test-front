import { useQuery } from "react-query"
import { formatCartServiceData } from "../../service/cartShopService"
import { getcartShop } from "../../store/getCartShop"

export default function() {
  
  const { isLoading, data, error } = useQuery('Cart', getcartShop)

  if(isLoading) return <div>loading </div>
  if(error) return <div>error</div>
  console.log(formatCartServiceData(data))
  return <div>olã</div>
}
import { useState } from "react"
import { useQuery } from "react-query"
import { formatShoppingBagServiceData, ShoppingBagFormated } from "../../service/shoppingBagService"
import { getShoppingBag } from "../../store/getShoppingBag"
import Bag from "./Bag"
import CompletedSuccess from "./CompletedSuccess"
import Payment from "./payment"

const STEP_BAG = 'bag'
const STEP_PAYMENT = 'payment'
const STEP_COMPLETED = 'completed'

export default function () {
  const { isLoading, data, error } = useQuery('Cart', getShoppingBag)
  const [currentState, setCurrentState] = useState(STEP_BAG)

  if (isLoading) return <div>loading </div>
  if (error) return <div>error</div>
  const dataFormated: ShoppingBagFormated = formatShoppingBagServiceData(data)

  const changeStep = (newState: string) => setCurrentState(newState)

  const showState = () => {
    if (currentState === STEP_PAYMENT) return <div><Payment dataBag={dataFormated} nextStep={() => changeStep(STEP_COMPLETED)} /></div>
    if (currentState === STEP_COMPLETED) return <div><CompletedSuccess dataBag={dataFormated} nextStep={() => changeStep(STEP_BAG)} dataPayment={{
      numberCard: "****.****.****.4545",
      name: "Bruce Wayne",
      birthDate: "02/2027"
    }} /> </div>
    return <div><Bag dataBag={dataFormated} nextStep={() => changeStep(STEP_PAYMENT)} /></div>
  }


  return (
    <div>
      <div>
        <button onClick={() => changeStep(STEP_BAG)}>Sacola</button>
        <button onClick={() => changeStep(STEP_PAYMENT)}>Pagamento</button>
        <button onClick={() => changeStep(STEP_COMPLETED)}>Confirmaçâo</button>
      </div>
      <div>
        {showState()}
      </div>
    </div>
  )
}
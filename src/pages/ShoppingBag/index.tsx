import { useEffect, useState } from "react"
import { useQuery } from "react-query"
import { formatShoppingBagServiceData, ShoppingBagFormated } from "../../service/shoppingBagService"
import { getShoppingBag } from "../../store/getShoppingBag"
import Bag from "./Bag"
import CompletedSuccess, { DataPayement } from "./CompletedSuccess"
import Payment from "./payment"
import { HeaderTab, TabOption } from "./ShoppingBag.style"

const STEP_BAG = 'bag'
const STEP_PAYMENT = 'payment'
const STEP_COMPLETED = 'completed'
const DATA_PAYMENT_INITAL_SATATE: DataPayement = { numberCard: '', name: '', birthDate: '' }

export default function () {
  const { isLoading, data, error } = useQuery('Cart', getShoppingBag)
  const [currentStep, setCurrentStep] = useState(STEP_BAG)
  const [dataPayment, setDataPayment] = useState<DataPayement>(DATA_PAYMENT_INITAL_SATATE)

  useEffect(() => {
    if(currentStep === STEP_BAG) setDataPayment(DATA_PAYMENT_INITAL_SATATE)
  },[currentStep])

  if (isLoading) return <div>loading </div>
  if (error) return <div>error</div>
  const dataFormated: ShoppingBagFormated = formatShoppingBagServiceData(data)

  const changeStep = (newState: string) => setCurrentStep(newState)
  const updatDataPayment = (newDataPAyment: DataPayement) => setDataPayment(newDataPAyment)
  const showState = () => {
    if (currentStep === STEP_PAYMENT) return <div><Payment 
    dataBag={dataFormated} 
    nextStep={() => changeStep(STEP_COMPLETED)} 
    updatDataPayment={updatDataPayment}
    /></div>
    if (currentStep === STEP_COMPLETED) return <div><CompletedSuccess
      dataBag={dataFormated}
      nextStep={() => changeStep(STEP_BAG)}
      dataPayment={dataPayment} /> </div>
    return <div><Bag dataBag={dataFormated} nextStep={() => changeStep(STEP_PAYMENT)} /></div>
  }


  return (
    <div>
      <HeaderTab>
        <TabOption onClick={() => changeStep(STEP_BAG)}>Sacola</TabOption>
        <TabOption onClick={() => changeStep(STEP_PAYMENT)}>Pagamento</TabOption>
        <TabOption onClick={() => changeStep(STEP_COMPLETED)} disabled={currentStep !== STEP_COMPLETED}>Confirmaçâo</TabOption>
      </HeaderTab>
      <div>
        {showState()}
      </div>
    </div>
  )
}
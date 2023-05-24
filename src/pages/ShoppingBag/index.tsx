import { Box, CircularProgress, Tabs } from "@mui/material"
import { useEffect, useState } from "react"
import { useQuery } from "react-query"
import { formatShoppingBagServiceData, ShoppingBagFormated } from "../../service/shoppingBagService"
import { getShoppingBag } from "../../store/getShoppingBag"
import Bag from "./Bag"
import CompletedSuccess, { DataPayement } from "./CompletedSuccess"
import Payment from "./payment"
import { ContainerCircular, ContainerShoppingBag, ContainerTabs, TabBag } from "./ShoppingBag.style"

const STEP_BAG = 'bag'
const STEP_PAYMENT = 'payment'
const STEP_COMPLETED = 'completed'
const DATA_PAYMENT_INITAL_SATATE: DataPayement = { numberCard: '', name: '', birthDate: '' }

export default function () {
  const { isLoading, data, error } = useQuery('Cart', getShoppingBag)
  const [currentStep, setCurrentStep] = useState(STEP_BAG)
  const [dataPayment, setDataPayment] = useState<DataPayement>(DATA_PAYMENT_INITAL_SATATE)

  useEffect(() => {
    if (currentStep === STEP_BAG) setDataPayment(DATA_PAYMENT_INITAL_SATATE)
  }, [currentStep])

  if (isLoading) return <ContainerCircular><CircularProgress color="inherit" /> </ContainerCircular>
  if (error) return <div>error</div>
  
  const dataFormated: ShoppingBagFormated = formatShoppingBagServiceData(data)

  const changeStep = (newState: string) => setCurrentStep(newState)
  const handleChange = (event: React.SyntheticEvent, newState: string) => setCurrentStep(newState);
  const updatDataPayment = (newDataPAyment: DataPayement) => setDataPayment(newDataPAyment)
  
  const showState = () => {
    if (currentStep === STEP_PAYMENT) return (
      <Payment
        dataBag={dataFormated}
        nextStep={() => changeStep(STEP_COMPLETED)}
        updatDataPayment={updatDataPayment}
      />
    )
    if (currentStep === STEP_COMPLETED) return (
      <CompletedSuccess
        dataBag={dataFormated}
        nextStep={() => changeStep(STEP_BAG)}
        dataPayment={dataPayment}
      />
    )
    return (
      <Bag
        dataBag={dataFormated}
        nextStep={() => changeStep(STEP_PAYMENT)}
      />
    )
  }


  return (
    <ContainerShoppingBag>
      <ContainerTabs>

      <Tabs value={currentStep} TabIndicatorProps={{ style: { background: '#000000' } }} onChange={handleChange} >
        <TabBag label="Sacola" value={STEP_BAG} />
        <TabBag label="Pagamento" value={STEP_PAYMENT} />
        <TabBag label="Confirmaçâo" value={STEP_COMPLETED} disabled={currentStep !== STEP_COMPLETED} />
      </Tabs>
      </ContainerTabs>
      <Box>
        {showState()}
      </Box>
    </ContainerShoppingBag>
  )
}
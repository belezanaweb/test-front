import { useContext, useEffect } from 'react'
import { FieldValues, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../contexts/CartContext'
import { HeaderContext } from '../../contexts/HeaderContext'
import Button from '../../components/atoms/Button/Button'
import { Title } from '../../components/atoms/Title/Title.styles'
import PaymentForm from '../../components/molecules/PaymentForm/PaymentForm'
import ProductPrices from '../../components/molecules/ProductPrices/ProductPrices'
import * as Style from './Payment.styles'
import { PaymentContext } from '../../contexts/PaymentContext'
import { Payment as PaymentInterface } from '../../interfaces/Payment.interface'

const Payment: React.FC = (props) => {

  const methods = useForm<FieldValues>({
    mode: 'all'
  })
  const {
    register,
    formState: { errors, isValid },
    getValues
  } = methods

  const navigate = useNavigate()
  const { setActiveItem } = useContext(HeaderContext)
  const { setPayment } = useContext(PaymentContext)
  const { products } = useContext(CartContext)

  const handlerSubmit = () => {
    if (!isValid)
      return

    setPayment(getValues() as PaymentInterface)
    navigate('/confirmation')
  }

  useEffect(() => {
    setActiveItem(2)
    if (!products) {
      navigate('/')
    }
  }, [])


  return (
    <Style.Container>
      <Title>cartão de crédito</Title>
      <PaymentForm register={register} errors={errors} ></PaymentForm>
      {products && <ProductPrices productCart={products} />}
      <Button type="submit" disabled={!isValid} text="finalizar pedido" onClick={handlerSubmit} />
    </Style.Container>
  )
}

export default Payment

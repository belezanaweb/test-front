import { useContext, useEffect } from 'react'
import { FieldValues, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../../contexts/CartContext'
import { HeaderContext } from '../../../contexts/HeaderContext'
import Button from '../../atoms/Button/Button'
import { Title } from '../../atoms/Title/Title.styles'
import PaymentForm from '../../molecules/PaymentForm/PaymentForm'
import ProductPrices from '../../molecules/ProductPrices/ProductPrices'
import * as Style from './Payment.styles'

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
  const { products } = useContext(CartContext)

  const handlerSubmit = () => {
    if (!isValid)
      return
    console.log(getValues());
  }

  useEffect(() => {
    setActiveItem(2)
    if (!products) {
      navigate('/')
    }
  }, [products, navigate, setActiveItem])


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

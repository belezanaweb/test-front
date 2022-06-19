import Header from '../../components/Header'
import Content from '../../components/Content'
import Button from '../../components/Button'
import InputField from '../../components/InputField'
import PriceList from '../../components/PriceList'
import { headerItems } from '../../types'

import { useForm } from 'react-hook-form'
import { useLocation } from 'react-router-dom'

const Payment = () => {
  const { state } = useLocation()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: 'onBlur'
  })

  const onSubmit = (data) => console.log(data)

  return (
    <>
      <Header activeItem={headerItems.PAGAMENTO} headerItems={Object.values(headerItems)} />
      <Content title="Cartão de Crédito" type="white">
        <form id="form" onSubmit={handleSubmit(onSubmit)}>
          <InputField
            fieldName="cardNumber"
            label="Número do cartão:"
            placeholder="____.____.____.____"
            register={register}
            errors={errors}
          />
          <InputField
            fieldName="cardHolderName"
            label="Nome do Titular:"
            placeholder="Como no cartão"
            register={register}
            errors={errors}
          />
          <InputField
            fieldName="cardValidity"
            label="Validade (mês/ano):"
            placeholder="__/____"
            register={register}
            errors={errors}
          />
          <InputField
            fieldName="cardVerificationValue"
            label="CVV:"
            placeholder="___"
            register={register}
            errors={errors}
          />
        </form>
      </Content>
      <Content>
        <PriceList {...state.data} />
      </Content>
      <Button path="/success" data={state.data}>
        Finalizar o pedido
      </Button>
    </>
  )
}

export default Payment

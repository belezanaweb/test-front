import Header from '../../components/Header'
import Content from '../../components/Content'
import Button from '../../components/Button'
import InputField from '../../components/InputField'
import PriceList from '../../components/PriceList'
import { headerItems } from '../../types'
import { StyledCardDetailsWrapper } from './styled'

import { useForm } from 'react-hook-form'
import { useLocation, useNavigate } from 'react-router-dom'

const Payment = () => {
  const { state } = useLocation()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid }
  } = useForm({
    mode: 'onBlur'
  })

  const onSubmit = (formData) => {
    delete formData.cardVerificationValue
    navigate('/success', { state: { ...state, formData } })
  }

  return (
    <>
      <Header activeItem={headerItems.PAGAMENTO} headerItems={Object.values(headerItems)} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Content title="Cartão de Crédito" type="white">
          <InputField
            fieldName="cardNumber"
            label="Número do cartão:"
            placeholder="____.____.____.____"
            register={register}
            errors={errors}
            validations={{
              required: 'Número do cartão é obrigatório.',
              validate: {
                length: (str) =>
                  str.replace(/\D/g, '').length === 16 || 'Verifique os números do cartão'
              }
            }}
          />
          <InputField
            fieldName="cardHolderName"
            label="Nome do Titular:"
            placeholder="Como no cartão"
            register={register}
            errors={errors}
            validations={{
              required: 'Nome do titular é obrigatório.',
              minLength: {
                value: 3,
                message: 'Deve ter pelo menos 3 caracteres.'
              }
            }}
          />
          <StyledCardDetailsWrapper>
            <InputField
              fieldName="cardValidity"
              label="Validade (mês/ano):"
              placeholder="__/____"
              register={register}
              errors={errors}
              validations={{
                required: 'Validade é obrigatório.',
                pattern: {
                  value: /[\d]{2}\/[\d]{4}/,
                  message: 'Formato: mm/yyyy'
                }
              }}
            />
            <InputField
              fieldName="cardVerificationValue"
              label="CVV:"
              placeholder="___"
              register={register}
              errors={errors}
              validations={{
                required: 'CVV é obrigatório.',
                pattern: {
                  value: /^\d{3}$/,
                  message: 'Deve ter 3 números'
                }
              }}
            />
          </StyledCardDetailsWrapper>
        </Content>
        <Content>
          <PriceList {...state.data} />
        </Content>
        <Button type="submit" disabled={!isDirty || !isValid}>
          Finalizar o pedido
        </Button>
      </form>
    </>
  )
}

export default Payment

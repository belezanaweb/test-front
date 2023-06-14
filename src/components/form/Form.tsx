import * as Styled from './styles'
import cardValidator from 'card-validator'
import { useForm } from 'react-hook-form'
import { FormDataType } from './model'

type FormType = {
  onSubmit?: (data: FormDataType) => void
}

const Form = ({ onSubmit }: FormType) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataType>()

  const onSubmitForm = (data: FormDataType) => {
    onSubmit!(data)
  }

  return (
    <form id="payment-form" onSubmit={handleSubmit(onSubmitForm)}>
      <Styled.Container>
        <div className={`card-number ${errors.cardNumber ? 'error' : ''}`}>
          <label>Número</label>
          <input
            placeholder="0000 0000 0000 0000"
            type="text"
            maxLength={19}
            {...register('cardNumber', {
              required: true,
              validate: {
                isValid: (value: string) => {
                  return cardValidator.number(value).isValid
                }
              }
            })}
          />
          {errors.cardNumber?.type === 'required' && <span>campo obrigatório</span>}
          {errors.cardNumber?.type === 'isValid' && <span>insira um número de cartão válido</span>}
        </div>
        <div className={`name ${errors.name ? 'error' : ''}`}>
          <label>Nome do titular do cartão</label>
          <input
            placeholder="Nome impresso no cartão"
            type="text"
            {...register('name', {
              required: true,
              validate: {
                isValid: (value: string) => {
                  return cardValidator.cardholderName(value).isValid
                }
              }
            })}
          />
          {errors.name?.type === 'required' && <span>campo obrigatório</span>}
          {errors.name?.type === 'isValid' && <span>insira um nome válido</span>}
        </div>
        <div className="expiration-security">
          <div className={`expiration ${errors.expiration ? 'error' : ''}`}>
            <label>Data de validade</label>
            <div className="expiry-inputs">
              <input
                className="date"
                placeholder="MM/AA"
                type="text"
                maxLength={5}
                {...register('expiration', {
                  required: true,
                  validate: {
                    isValid: (value: string) => {
                      return cardValidator.expirationDate(value).isValid
                    }
                  }
                })}
              />
            </div>
            {errors.expiration?.type === 'required' && <span>campo obrigatório</span>}
            {errors.expiration?.type === 'isValid' && <span>insira uma data válida</span>}
          </div>
          <div className={`security ${errors.cvv ? 'error' : ''}`}>
            <label>Código CVV</label>
            <input
              placeholder="000"
              type="text"
              maxLength={3}
              {...register('cvv', {
                required: true,
                validate: {
                  isValid: (value: string) => {
                    return cardValidator.cvv(value).isValid
                  }
                }
              })}
            />
            {errors.cvv?.type === 'required' && <span>campo obrigatório</span>}
            {errors.cvv?.type === 'isValid' && <span>insira um cvv válido</span>}
          </div>
        </div>
      </Styled.Container>
    </form>
  )
}

export { Form }

import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { TransactionContext } from '../../../core/providers/Context'
import TitleSection from '../../components/layout/TitleSection'
import Button from '../../components/layout/Button'
import SliceCartCheckoutInfo from '../../components/slices/CartCheckoutInfo.slices'
import { ContainerAllForm, ContainerSimpleForm, ContainerCustomForm } from './CheckoutPage.style'

const Checkout = () => {
  const [transaction, setTransaction] = useContext(TransactionContext)
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = (data) => {
    setTransaction((prev) => ({
      ...prev,
      creditCard: {
        number: data.number,
        name: data.name,
        expiration: data.expiration,
        cvv: data.cvv
      }
    }))
    navigate('/wow-moment')
  }

  return (
    <>
      <TitleSection title="Pagamento" />
      <ContainerAllForm>
        <form id="form" onSubmit={handleSubmit(onSubmit)}>
          <ContainerSimpleForm>
            <label>Número do cartão:</label>
            <input
              mask="9999.9999.9999.9999"
              placeholder="____.____.____.____"
              error={errors?.number}
              defaultValue={transaction?.creditCard?.number ? transaction.creditCard.number : ''}
              {...register('number', {
                required: 'Campo obrigatório',
                pattern: {
                  value: /\d\d\d\d\d\d\d\d\d\d\d\d\d\d\d\d/g,
                  message: 'Número inválido'
                }
              })}
            />
            <p>{errors.number && 'campo inválido'}</p>
            <label>Nome do Titular:</label>
            <input
              placeholder="Como no cartão"
              error={errors?.name}
              defaultValue={transaction?.creditCard?.name ? transaction.creditCard.name : ''}
              {...register('name', {
                required: 'Campo obrigatório'
              })}
            />
            <p>{errors.name && 'campo inválido'}</p>
          </ContainerSimpleForm>
          <ContainerCustomForm>
            <div>
              <label>Validade (mês/ano):</label>
              <input
                mask="99/9999"
                placeholder="__/____"
                error={errors?.expiration}
                defaultValue={
                  transaction?.creditCard?.expiration ? transaction.creditCard.expiration : ''
                }
                {...register('expiration', {
                  required: 'Campo obrigatório',
                  pattern: { value: /\d\d\/\d\d\d\d/g, message: 'Data inválida' }
                })}
              />
              <p>{errors.expiration && 'campo inválido'}</p>
            </div>
            <div>
              <label>CVV:</label>
              <input
                mask="999"
                placeholder="___"
                error={errors?.cvv}
                defaultValue={transaction?.creditCard?.cvv ? transaction.creditCard.cvv : ''}
                {...register('cvv', {
                  required: 'Campo obrigatório',
                  pattern: { value: /\d\d\d/g, message: 'CVV inválido' }
                })}
              />
              <p>{errors.cvv && 'campo inválido'}</p>
            </div>
          </ContainerCustomForm>
        </form>
      </ContainerAllForm>
      <SliceCartCheckoutInfo transaction={transaction} />
      <Button type="submit" form="form" text="Finalizar o Pedido" />
    </>
  )
}

export default Checkout

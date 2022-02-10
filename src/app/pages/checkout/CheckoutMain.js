import React, { useContext, useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { TransactionContext } from '../../../core/providers/Context'
import TitleSection from '../../components/layout/TitleSection'
import Button from '../../components/layout/Button'
import SliceCartCheckoutInfo from '../../components/slices/CartCheckoutInfo.slices'
import { ContainerAllForm, ContainerSimpleForm, ContainerCustomForm } from './CheckoutPage.style'
import { Loading } from '../../components/layout/Loading'

const Checkout = () => {
  const [transaction, setTransaction] = useContext(TransactionContext)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    setLoading(false)
  }, [loading])

  const {
    register,
    handleSubmit,
    formState: { isValid, errors }
  } = useForm({ mode: 'onChange' })

  const onSubmit = (data) => {
    setTransaction((prev) => ({
      ...prev,
      isBuyApproved: true,
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
      {loading && <Loading />}
      {!loading && (
        <>
          <ContainerAllForm>
            <form id="form" onSubmit={handleSubmit(onSubmit)}>
              <ContainerSimpleForm>
                <label>Número do cartão:</label>
                <input
                  mask="9999.9999.9999.9999"
                  placeholder="____.____.____.____"
                  name="number"
                  defaultValue={
                    transaction?.creditCard?.number ? transaction.creditCard.number : ''
                  }
                  {...register('number', {
                    required: 'campo obrigatório',
                    pattern: {
                      value: /\d\d\d\d\d\d\d\d\d\d\d\d\d\d\d\d/g,
                      message: 'apenas números e geralmente são 16 caracteres, ok?'
                    }
                  })}
                />
                {errors.number && <p>{errors.number.message}</p>}
                <label>Nome do Titular:</label>
                <input
                  placeholder="Como no cartão"
                  defaultValue={transaction?.creditCard?.name ? transaction.creditCard.name : ''}
                  {...register('name', {
                    required: 'campo obrigatório'
                  })}
                />
                {errors.name && <p>{errors.name.message}</p>}
              </ContainerSimpleForm>
              <ContainerCustomForm>
                <div>
                  <label>Validade (mês/ano):</label>
                  <input
                    mask="99/9999"
                    placeholder="__/____"
                    defaultValue={
                      transaction?.creditCard?.expiration ? transaction.creditCard.expiration : ''
                    }
                    {...register('expiration', {
                      required: 'campo obrigatório',
                      pattern: {
                        value: /\d\d\/\d\d\d\d/g,
                        message: 'geralmente esse dado é assim: 00/0000'
                      }
                    })}
                  />
                  {errors.expiration && <p>{errors.expiration.message}</p>}
                </div>
                <div>
                  <label>CVV:</label>
                  <input
                    mask="999"
                    placeholder="___"
                    defaultValue={transaction?.creditCard?.cvv ? transaction.creditCard.cvv : ''}
                    {...register('cvv', {
                      required: 'campo obrigatório',
                      pattern: { value: /\d\d\d/g, message: 'aqui são 3 números :)' }
                    })}
                  />
                  {errors.cvv && <p>{errors.cvv.message}</p>}
                </div>
              </ContainerCustomForm>
            </form>
          </ContainerAllForm>
          <SliceCartCheckoutInfo transaction={transaction} />
          <Button disabled={!isValid} type="submit" form="form" text="Finalizar o Pedido" />
        </>
      )}
    </>
  )
}

export default Checkout

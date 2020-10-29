import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'

import Paper from '../../components/paper'
import TotalProductBox from '../../pageComponents/totalProductBox'
import Button from '../../components/button'
import Input from '../../components/input'
import Row from './payment.style'

import { CARD_NUMBER, CARD_DATE, CARD_CODE } from '../../components/input/masks'

import { CHANGE_POSITION } from '../../store/actionTypes/breadcrumb'
import SAVE_CREDIT_CARD from '../../store/actionTypes/payment'

const Payment = ({ history }) => {
  const { register, handleSubmit, trigger, errors, setValue } = useForm()

  const bag = useSelector((state) => state.bag)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({
      type: CHANGE_POSITION,
      breadcrumbLabel: 'pagamento'
    })
  }, [dispatch])

  if (!bag || !bag.items) {
    history.push('/')
    return false
  }

  const handleName = (event) => {
    const { value, name } = event.target
    setValue(name, (value || '').toUpperCase())
    trigger(name)
  }

  const onSubmit = (values) => {
    dispatch({
      type: SAVE_CREDIT_CARD,
      creditCard: { ...values }
    })
    history.push('/')
  }

  const required = 'Campo obrigatório'

  return (
    <>
      {bag && bag.items && bag.items.length > 0 && (
        <>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Paper title="Cartão de crédito" padding="12px 12px 13px 13px">
              <Input
                label="Número do cartão:"
                mask={CARD_NUMBER}
                placeholder="____.____.____.____"
                name="cardNumber"
                error={errors.cardNumber}
                onChange={() => trigger('cardNumber')}
                ref={register({
                  required,
                  pattern: {
                    value: /^[0-9]{4}\.[0-9]{4}\.[0-9]{4}\.[0-9]{4}$/i,
                    message: 'Número do cartão inválido'
                  }
                })}
              />

              <Input
                label="Nome do Titular:"
                name="name"
                placeholder="Como no cartão"
                error={errors.name}
                onChange={(event) => handleName(event)}
                ref={register({ required })}
              />

              <Row>
                <Input
                  label="Validade (mês/ano):"
                  mask={CARD_DATE}
                  name="validDate"
                  onChange={() => trigger('validDate')}
                  placeholder="__/____"
                  error={errors.validDate}
                  ref={register({
                    required,
                    pattern: {
                      value: /^[0-9]{2,}\/[0-9]{4,}/i,
                      message: 'Validade inválida'
                    }
                  })}
                  flexExpand
                  minWidth="160px"
                />

                <Input
                  label="CVV:"
                  mask={CARD_CODE}
                  placeholder="___"
                  name="code"
                  onChange={() => trigger('code')}
                  error={errors.code}
                  ref={register({
                    required,
                    pattern: {
                      value: /^[0-9]{3}$/i,
                      message: 'CVV inválido'
                    }
                  })}
                  flexExpand
                  minWidth="140px"
                />
              </Row>
            </Paper>

            <TotalProductBox
              total={bag.total}
              discount={bag.discount}
              subTotal={bag.subTotal}
              shippingTotal={bag.shippingTotal}
            />
            <Button type="submit">Finalizar o pedido</Button>
          </form>
        </>
      )}
    </>
  )
}

Payment.defaultProps = {
  history: {}
}

Payment.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  })
}

export default Payment

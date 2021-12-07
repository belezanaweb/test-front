import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'

import TotalList from '../../TotalList/TotalList'
import { payments } from '../../../Store/Actions'
import DataContext from '../../../Store/DataContext'
import './PaymentForm.css'

const PaymentForm = (props) => {
  const { dispatch } = useContext(DataContext)
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: 'onChange'
  })
  const onSubmit = (data) => {
    payments(dispatch, data)
    props.onChangePage('Checkout')
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="PaymentForm">
        <div className="formatCol">
          <label>Número do cartão:</label>
          {errors.cardNumber && errors.cardNumber.type === 'required' && (
            <span className="alert">This is required</span>
          )}
          {errors.cardNumber && errors.cardNumber.type === 'maxLength' && (
            <span className="alert">Max length exceeded</span>
          )}
          {errors.cardNumber && errors.cardNumber.type === 'minLength' && (
            <span className="alert">Min length missing</span>
          )}
          <input
            type="number"
            id="cardNumber"
            {...register('cardNumber', { required: true, minLength: 12, maxLength: 19 })}
            placeholder="**** **** **** ****"
            style={{ paddingLeft: '2px', fontSize: '18px' }}
          />
        </div>
        <div className="formatCol">
          <label>Nome do titular:</label>
          {errors.cardName && errors.cardName.type === 'maxLength' && (
            <span className="alert">Max length exceeded</span>
          )}
          <input
            id="cardName"
            {...register('cardName', { required: true, maxLength: 40 })}
            style={{ paddingLeft: '2px', fontSize: '18px' }}
          />
        </div>
        <div className="formatRow">
          <div className="formatCol">
            <label>Validade (mês/ano):</label>
            {errors.cardValidate && errors.cardValidate.type === 'maxLength' && (
              <span className="alert">Max length exceeded</span>
            )}
            {errors.cardValidate && errors.cardValidate.type === 'minLength' && (
              <span className="alert">Min length missing</span>
            )}
            <input
              id="cardValidate"
              {...register('cardValidate', { required: true, minLength: 5, maxLength: 5 })}
              style={{ paddingLeft: '2px' }}
            />
          </div>
          <div className="formatCol">
            <label>CVV:</label>
            {errors.CVV && errors.CVV.type === 'maxLength' && (
              <span className="alert">Max length exceeded</span>
            )}
            {errors.CVV && errors.CVV.type === 'minLength' && (
              <span className="alert">Min length missing</span>
            )}
            <input
              type="text"
              {...register('CVV', { required: true, minLength: 3, maxLength: 6 })}
              style={{ paddingLeft: '2px' }}
            />
          </div>
        </div>
      </div>
      <TotalList />
      <button type="submit">FINALIZAR O PEDIDO</button>
    </form>
  )
}

export default PaymentForm

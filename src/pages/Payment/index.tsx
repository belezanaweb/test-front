import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useFormik } from 'formik'
import ButtonSubmit from '../../components/ButtonSubmit'
import InputText from '../../components/InputText'
import ResumeOrder from '../../components/ResumeOrder'
import { IOrder } from '../../model/order'
import { RootState } from '../../redux'
import { setDisplay } from '../../redux/ducks/loading'
import { setStep } from '../../redux/ducks/steps'
import { ContainerStyled, ContentStyled } from '../../styles/global'
import { DFlexExtended, PaymentStyled } from './styles'
import { validationSchema, initialValues } from '../../model/payment'
import { savePayment } from '../../redux/ducks/payment'

const Payment: React.FC = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const order = useSelector<RootState, IOrder | undefined>((state) => {
    return state.orderReducer.order
  })

  const { handleSubmit, errors, values, handleChange } = useFormik({
    initialValues,
    validationSchema,
    validateOnChange: false,
    onSubmit: (form) => {
      dispatch(savePayment(form))
      history.push('/completed')
    }
  })

  useEffect(() => {
    if (!order) {
      dispatch(setDisplay(true))
      history.push('/')
    }
  }, [dispatch, history, order])

  useEffect(() => {
    dispatch(setStep(2))
  }, [dispatch])

  return (
    <ContainerStyled>
      <PaymentStyled>
        <form onSubmit={handleSubmit}>
          <div>
            <h3>Cartão de crédito</h3>
            <ContentStyled>
              <InputText
                label="Número do cartão:"
                onChange={handleChange}
                textError={errors.cardNumber}
                hasError={!!errors.cardNumber}
                name="cardNumber"
                value={values.cardNumber}
                maxLength={19}
                mask="9999.9999.9999.9999"
              />
              <InputText
                label="Nome do Titular:"
                onChange={handleChange}
                textError={errors.name}
                hasError={!!errors.name}
                name="name"
                value={values.name}
                maxLength={100}
              />
              <DFlexExtended>
                <InputText
                  label="Validade (mês/ano):"
                  onChange={handleChange}
                  textError={errors.validity}
                  hasError={!!errors.validity}
                  name="validity"
                  value={values.validity}
                  maxLength={5}
                  mask="99/99"
                />
                <InputText
                  label="CVV:"
                  onChange={handleChange}
                  textError={errors.cvv}
                  hasError={!!errors.cvv}
                  name="cvv"
                  value={values.cvv}
                  maxLength={3}
                  mask="999"
                />
              </DFlexExtended>
            </ContentStyled>
          </div>
          <div>
            <ResumeOrder />
            <ButtonSubmit type="primary" text="Finalizar compra" />
          </div>
        </form>
      </PaymentStyled>
    </ContainerStyled>
  )
}

export default Payment

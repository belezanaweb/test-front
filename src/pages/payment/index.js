import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, compose } from 'redux'
import { withFormik } from 'formik'
import * as Yup from 'yup'

import { Creators as CartActions } from '../../store/ducks/cart'

import { Container } from './styles'

import Title from '../../components/Title'
import ItemBox from '../../components/ItemBox'
import PurchaseSummaryBox from '../../components/PurchaseSummaryBox'
import Button from '../../components/Button'
import Loading from '../../components/Loading'

class Payment extends React.Component {
  componentDidMount() {
    const { fetchRequest } = this.props
    fetchRequest()
  }

  render() {
    const { handleSubmit, values, setFieldValue, errors, cart } = this.props
    return (
      <Container withErrors={errors}>
        <Title title="CARTÃO DE CRÉDITO" color="#999" />
        <ItemBox boxHeight={279}>
          <form onSubmit={handleSubmit} id="card-form">
            <div>
              <label htmlFor="card-number" id="label-card-number">
                Número do cartão:
              </label>
              <input
                type="text"
                name="card-number"
                id="card-number"
                placeholder="____.____.____.____"
                value={values.cardNumber}
                onChange={e => setFieldValue('cardNumber', e.target.value)}
              />
              {errors.cardNumber && <p className="inputError">{errors.cardNumber}</p>}
              <label htmlFor="cardholder-name">Nome do Titular:</label>
              <input
                type="text"
                name="cardholder-name"
                id="cardholder-name"
                placeholder="Como no cartão"
                value={values.cardholderName}
                onChange={e => setFieldValue('cardholderName', e.target.value)}
              />
              {errors.cardholderName && <p className="inputError">{errors.cardholderName}</p>}
            </div>

            <div>
              <div>
                <label htmlFor="card-expiring-date">Validade (mês/ano):</label>
                <input
                  type="text"
                  name="card-expiring-date"
                  id="card-expiring-date"
                  placeholder="__/__"
                  value={values.cardExpiringDate}
                  onChange={e => setFieldValue('cardExpiringDate', e.target.value)}
                />
                {errors.cardExpiringDate && <p className="inputError">{errors.cardExpiringDate}</p>}
              </div>

              <div>
                <label htmlFor="card-verification-value">CVV:</label>
                <input
                  type="text"
                  name="card-verification-value"
                  id="card-verification-value"
                  placeholder="___"
                  value={values.cardVerificationValue}
                  onChange={e => setFieldValue('cardVerificationValue', e.target.value)}
                />
                {errors.cardVerificationValue && (
                  <p className="inputError">{errors.cardVerificationValue}</p>
                )}
              </div>
            </div>
          </form>
        </ItemBox>
        {!cart.loading ? <PurchaseSummaryBox cart={cart} /> : <Loading />}
        <Button title="FINALIZAR O PEDIDO" formId="card-form" type="submit" />
      </Container>
    )
  }
}

const mapStateToProps = ({ cart }) => ({
  cart
})

const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch)

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withFormik({
    mapPropsToValues: () => ({
      cardNumber: '',
      cardholderName: '',
      cardExpiringDate: '',
      cardVerificationValue: ''
    }),
    handleSubmit: (values, props) => {
      const { props: componentProps } = props
      const { history } = componentProps
      history.push('/confirmation')
    },
    validationSchema: Yup.object().shape({
      cardNumber: Yup.number()
        .typeError('Insira apenas valores númericos')
        .positive('Digite um número de cartão válido')
        .required('Preencha o campo número do cartão'),
      cardholderName: Yup.string().required('Preencha o campo nome do titular'),
      cardExpiringDate: Yup.date('MM/YY')
        .typeError('Insira uma data válida')
        .required('Preencha o campo validade (mês/ano)'),
      cardVerificationValue: Yup.string()
        .matches(/\d/, 'Insira apenas valores númericos')
        .min(3, 'Insira um CVV válido')
        .max(3, 'Insira um CVV válido')
        .required('Preencha o campo CVV')
    })
  })
)(Payment)

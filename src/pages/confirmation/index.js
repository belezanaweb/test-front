import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Creators as CartActions } from '../../store/ducks/cart'

import { Container } from './styles'

import ItemBox from '../../components/ItemBox'
import ProductBox from '../../components/ProductBox'
import PurchaseSummaryBox from '../../components/PurchaseSummaryBox'
import Title from '../../components/Title'
import Loading from '../../components/Loading'

class Confirmation extends React.Component {
  constructor(props) {
    super(props)
    const params = new URLSearchParams(this.props.location.search)
    const cardNumber = params.get('cardNumber') || ''
    const cardholderName = params.get('cardholderName') || ''
    const cardExpiringDate = params.get('cardExpiringDate') || ''

    this.state = {
      cardNumber,
      cardholderName,
      cardExpiringDate
    }
  }
  static propTypes = {
    fetchRequest: PropTypes.func.isRequired,
    cart: PropTypes.shape({
      items: PropTypes.arrayOf(
        PropTypes.shape({
          product: PropTypes.shape({
            sku: PropTypes.string,
            description: PropTypes.string,
            imageObjects: PropTypes.arrayOf(
              PropTypes.shape({
                thumbnail: PropTypes.string
              })
            ),
            priceSpecification: PropTypes.shape({
              price: PropTypes.number
            })
          })
        })
      )
    }).isRequired
  }

  componentDidMount() {
    const { fetchRequest } = this.props
    fetchRequest()
  }

  render() {
    const { cart } = this.props
    const { cardNumber, cardholderName, cardExpiringDate } = this.state
    const {
      data: { items },
      loading
    } = cart

    if (loading) return <Loading />

    return (
      <Container>
        <div className="PaymentConfirmation">
          <div id="payment-confirmation-icon">
            <i className="fa fa-check" aria-hidden="true" style={{ color: '#FF7800' }} />
          </div>
          <div id="success-purchase-message">
            <p>COMPRA EFETUADA COM SUCESSO</p>
          </div>
        </div>
        <Title title="PAGAMENTO" />
        <ItemBox boxHeight={73}>
          <div id="customer-info">
            <ul>
              <li>
                {cardNumber.length
                  ? `****.****.****.${cardNumber.substr(-4)}`
                  : '****.****.****.1234'}
              </li>
              <li>{cardholderName ? cardholderName : 'JOSÉ DA SILVA'}</li>
              <li>{cardExpiringDate ? cardExpiringDate : '05/2019'}</li>
            </ul>
          </div>
        </ItemBox>
        <Title title="PRODUTOS" />
        <ItemBox boxHeight={325}>
          {items &&
            items.length &&
            items.map(item => (
              <ProductBox
                key={item.product.sku}
                description={_.truncate(item.product.name, { length: 63 })}
                thumbnail={item.product.imageObjects[0].thumbnail}
                price={item.product.priceSpecification.price}
              />
            ))}
        </ItemBox>
        <PurchaseSummaryBox cart={cart} />
      </Container>
    )
  }
}

const mapStateToProps = ({ cart }) => ({
  cart
})
const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Confirmation)

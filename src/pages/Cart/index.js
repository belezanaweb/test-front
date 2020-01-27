import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import history from '~/services/history'
import { formatPrice } from '~/utils/format'

import BLWButton from '~/components/BLWButton'
import BLWSingleTitle from '~/components/BLWSingleTitle'
import ProductCart from '~/components/ProductCart'
import ProductCartInfo from '~/components/ProductCartInfo'

import { Container, Producs } from './styles'

import * as actions from '~/store/ducks/cart/actions'

class Cart extends Component {
  async componentDidMount() {
    const { getCartRequest } = this.props
    getCartRequest()
  }

  handleCheckout = () => {
    const { cart } = this.props

    localStorage.setItem('sacola', JSON.stringify(cart))
    history.push('/checkout/transacional/pagamento')
  }

  render() {
    const { cart, total, subTotal, shippingTotal, discount } = this.props

    return (
      <Container>
        <BLWSingleTitle title="Produtos" />
        {!!cart && cart.length > 0 && (
          <Producs>
            {cart.map((productList, index) => {
              const { name, priceSpecification, imageObjects } = productList.product
              const configList = {
                productIMG: imageObjects[0].small,
                productName: name,
                productPrice: priceSpecification.priceFormatted
              }
              return <ProductCart key={index} {...configList} />
            })}
          </Producs>
        )}
        <div className="sideBar">
          <ProductCartInfo
            total={total}
            subTotal={subTotal}
            shippingTotal={shippingTotal}
            discount={discount}
          />
          <BLWButton
            type="button"
            data-test="BntCheckout"
            onClick={this.handleCheckout}
            title="Seguir para o pagamento"
          />
        </div>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  cart: !!state.cart.data && state.cart.data.items,
  subTotal: formatPrice(!!state.cart.data && state.cart.data.subTotal),
  shippingTotal: formatPrice(!!state.cart.data && state.cart.data.shippingTotal),
  discount: `- ${formatPrice(!!state.cart.data && state.cart.data.discount)}`,
  total: formatPrice(
    !!state.cart.data &&
      state.cart.data.subTotal + state.cart.data.shippingTotal - state.cart.data.discount
  )
})

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)

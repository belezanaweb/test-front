import React, { Component } from 'react'

import { MdCheck } from 'react-icons/md'

import { formatPrice } from '~/utils/format'

import ProductCartInfo from '~/components/ProductCartInfo'
import ProductCart from '~/components/ProductCart'
import BLWSingleTitle from '~/components/BLWSingleTitle'

import { Container } from './styles'

class CheckoutFinaly extends Component {
  state = {
    cart: '',
    subTotal: '',
    shippingTotal: '',
    discount: '',
    total: '',
    cardNumber: '',
    nameCard: '',
    expiryDate: ''
  }

  componentDidMount() {
    const sacola = JSON.parse(localStorage.getItem('sacola'))
    const cardNumber = localStorage.getItem('cardNumber')
    const nameCard = localStorage.getItem('nameCard')
    const expiryDate = localStorage.getItem('expiryDate')

    console.log(!!cardNumber)

    this.setState({
      cart: sacola ? sacola : [],
      subTotal: formatPrice(sacola ? sacola.subTotal : ''),
      shippingTotal: formatPrice(sacola ? sacola.shippingTotal : ''),
      discount: `- ${formatPrice(sacola ? sacola.discount : '')}`,
      total: formatPrice(sacola ? sacola.subTotal + sacola.shippingTotal - sacola.discount : ''),
      cardNumber: !!cardNumber ? `****.****.****.${cardNumber}` : '',
      nameCard: nameCard ? nameCard : '',
      expiryDate: expiryDate ? expiryDate : ''
    })
  }

  render() {
    const {
      cart,
      total,
      subTotal,
      shippingTotal,
      discount,
      nameCard,
      expiryDate,
      cardNumber
    } = this.state

    return (
      <Container>
        <div className="completedPurchase">
          <MdCheck />
          <p>Compra efetuada com sucesso</p>
        </div>
        <div className="sideBar">
          <BLWSingleTitle title="Pagamento" />
          <div className="purchaseInfo">
            <p>{cardNumber}</p>
            <p>{nameCard}</p>
            <p>{expiryDate}</p>
          </div>
        </div>
        <ProductCart productList={cart.items} />

        <ProductCartInfo
          classNameContainer="ProductCartInfo"
          total={total}
          subTotal={subTotal}
          shippingTotal={shippingTotal}
          discount={discount}
        />
      </Container>
    )
  }
}

export default CheckoutFinaly

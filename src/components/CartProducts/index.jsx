import React from 'react'
import PropTypes from 'prop-types'
import { CartBox, CartItem, Image, Info, Name, Price } from './styled'
import { Loading } from 'components'
import utils from 'utils'

CartList.protoTypes = {
  data: PropTypes.object,
  loading: PropTypes.bool
}

CartList.defaultProps = {
  data: [],
  loading: false
}

export default function CartList({ data, loading }) {
  return (
    <CartBox>
      {loading ? (
        <Loading />
      ) : (
        data.map(({ product }) => (
          <CartItem>
            <Image>
              <img src={product.imageObjects[0].thumbnail} alt={product.name} />
            </Image>
            <Info>
              <Name>{product.name}</Name>
              <Price>{utils.format.money(product.priceSpecification.price)}</Price>
            </Info>
          </CartItem>
        ))
      )}
    </CartBox>
  )
}

import React from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Creators as CartActions } from '../../store/ducks/cart'

import { Container } from './styles'

import ItemBox from '../../components/ItemBox'
import ProductBox from '../../components/ProductBox'

class Cart extends React.Component {
  state = {}

  componentDidMount() {
    const { fetchRequest } = this.props
    fetchRequest()
  }

  render() {
    const { cart } = this.props
    const {
      data: { items }
    } = cart

    return (
      <Container>
        <h6 className="title">PRODUTOS</h6>
        <ItemBox>
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
)(Cart)

import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Creators as CartActions } from '../../store/ducks/cart'

import { Container, Loading } from './styles'

import ItemBox from '../../components/ItemBox'
import ProductBox from '../../components/ProductBox'
import PurchaseSummaryBox from '../../components/PurchaseSummaryBox'
import Button from '../../components/Button'
import Title from '../../components/Title'

class Cart extends React.Component {
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

  state = {}

  componentDidMount() {
    const { fetchRequest } = this.props
    fetchRequest()
  }

  render() {
    const { cart } = this.props
    const {
      data: { items },
      loading
    } = cart

    if (loading)
      return (
        <Loading>
          <i
            className="fa fa-spinner fa-pulse fa-5x"
            aria-hidden="true"
            style={{ color: '#f94d00' }}
          />
        </Loading>
      )

    return (
      <Container>
        <Title title="PRODUTOS" />
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
        <PurchaseSummaryBox cart={cart} />
        <Button title="SEGUIR PARA O PAGAMENTO" />
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

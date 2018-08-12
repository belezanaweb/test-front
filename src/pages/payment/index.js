import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Creators as CartActions } from '../../store/ducks/cart'

import { Container } from './styles'

import Title from '../../components/Title'
import ItemBox from '../../components/ItemBox'
import PurchaseSummaryBox from '../../components/PurchaseSummaryBox'
import Button from '../../components/Button'
import Loading from '../../components/Loading'
import Form from '../../components/Form'

class Payment extends React.Component {
  static propTypes = {
    cart: PropTypes.shape({
      loading: PropTypes.bool
    }).isRequired,
    fetchRequest: PropTypes.func.isRequired,
    history: PropTypes.shape({}).isRequired
  }

  componentDidMount() {
    const { fetchRequest } = this.props
    fetchRequest()
  }

  render() {
    const { history, cart } = this.props
    return (
      <Container>
        <Title title="CARTÃO DE CRÉDITO" color="#999" />
        <ItemBox boxHeight={279}>
          <Form history={history} />
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Payment)

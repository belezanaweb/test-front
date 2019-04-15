/** @jsx jsx */
import { Component } from 'react';
import PropTypes from 'prop-types';
import { jsx } from '@emotion/core'
import { Link } from 'react-router-dom'
import styled from '@emotion/styled'
import { handleInitialData } from '../actions/shared'
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading-bar'
import Breadcrumb from '../components/Breabcrumb';
import Product from '../components/Product';
import PurchaseSummary from '../components/PurchaseSummary';
import ForwardButton from '../components/ForwardButton';

const Container = styled('main')`
  width: 95%;
  margin: auto;

  h1 {
    color: #999999;
    font-size: 14px;
    margin-top: 10px;
    font-weight: 700;
    line-height: 17px;
  }
`
const ProductsContainer = styled('section')`
  background-color: #FFFFFF;
  padding: 12px;
  margin-top: 5px;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.20);
  border-radius: 3px;
  min-width: 285px; 
`

class ShoppingCart extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  
  render() {
    const items = this.props.shoppingCartItems
    const shoppingCart = this.props.shoppingCart

    return (
      <div>
        <LoadingBar />
        <Breadcrumb step={1} />
        <Container>
          <h1>PRODUTOS</h1>
          <ProductsContainer>
            {items && items.map((item, index) => (
              <Product
                key={index}
                item={item}
              />               
            ))}
          </ProductsContainer>
          <PurchaseSummary shoppingCart={shoppingCart} />
          <Link to='/pagamento'>
            <ForwardButton text={'SEGUIR PARA O PAGAMENTO'} />
          </Link>  
        </Container>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    shoppingCart: state.shoppingCart,
    shoppingCartItems: state.shoppingCart.items,
  }
}

ShoppingCart.propTypes = {
  shoppingCart: PropTypes.object.isRequired,
  shoppingCartItems: PropTypes.array,
}

export default connect(mapStateToProps)(ShoppingCart)

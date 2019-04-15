/** @jsx jsx */
import { Component } from 'react';
import PropTypes from 'prop-types';
import { jsx } from '@emotion/core'
import styled from '@emotion/styled'
import { connect } from 'react-redux';
import Breadcrumb from '../components/Breabcrumb';
import PurchaseSummary from '../components/PurchaseSummary';
import Product from './../components/Product';

const Container = styled('main')`
  width: 95%;
  margin: auto;
  h1 {
    color: #FF7800;
    font-size: 14px;
    margin-top: 50px;
    font-weight: 700;
    line-height: 17px;
    text-align: center;
  }

  h2 {
    color: #999999;
    font-size: 14px;
    margin-top: 20px;
    font-weight: 700;
    line-height: 17px;
  }
`
const ProductsContainer = styled('section')`
  padding: 14px 10px 8px 10px;
  border-radius: 3px;
  background-color: #fff;
  box-shadow: 1px 1px 5px 0 rgba(0,0,29,0.22);
`

class Confirmation extends Component {
  componentDidMount() {
    
  }
  
  render() {
    const items = this.props.shoppingCartItems
    const shoppingCart = this.props.shoppingCart
    return (
      <div>        
        <Breadcrumb step={3} />
        <Container>
          <h1>COMPRA EFETUADA COM SUCESSO</h1>
          <h2>PAGAMENTO</h2>
          <ProductsContainer>
            <p className="cartao-numero">****.****.****.{this.props.lastNumbers}</p>
            <p className="cartao-titular">{this.props.payment.titular}</p>
            <p className="cartao-validade">{this.props.payment.validade}</p>
          </ProductsContainer>
          <h2>PRODUTOS</h2>
          <ProductsContainer>
            {items && items.map((item, index) => (
              <Product
                key={index}
                item={item}
              />               
            ))}
          </ProductsContainer>
          <PurchaseSummary shoppingCart={shoppingCart} />
        </Container>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    shoppingCart: state.shoppingCart,
    shoppingCartItems: state.shoppingCart.items,
    payment: state.payment,
    lastNumbers: (state.payment.numero).toString().substr((state.payment.numero.length - 4) , 4),
  }
}

Confirmation.propTypes = {
  shoppingCart: PropTypes.object.isRequired,
  shoppingCartItems: PropTypes.array,
}

export default connect(mapStateToProps)(Confirmation)

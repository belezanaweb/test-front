import React, { Component } from "react";
import Header from "../../components/header"
import { connect } from "react-redux";
import { getCart } from "../../actions/cart";
import { routes } from "../../router/index";
import { push } from "connected-react-router";
import Card from "../../components/cards"
import CardPrices from "../../components/cardPrices";
import MainButton from "../../components/mainButton"
import { MainWrapper, CartWrapper, ProductsWrapper } from "./style"

class Cart extends Component {

  componentDidMount() {
    this.props.getCart();
  }

  render() {
    return (
      <MainWrapper>
        <Header page={"cart"} />
        <CartWrapper>
          <h2 onClick={this.props.gotoPayment}>Produtos</h2>
          <ProductsWrapper>
            {this.props.cart &&
              this.props.cart.items.map(item => {
                return <Card key={item.product.sku} cart={item} />
              })}
          </ProductsWrapper>
          {this.props.cart && <CardPrices cart={this.props.cart} />}
          <div onClick={this.props.gotoPayment}>
            <MainButton text={"seguir para pagamento"} />
          </div>
        </CartWrapper>
      </MainWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.carts.cart
});

const mapDispatchToProps = (dispatch) => ({
  getCart: () => dispatch(getCart()),
  gotoPayment: () => dispatch(push(routes.payment))
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
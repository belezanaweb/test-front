import React, { Component } from "react";
import Header from "../../components/header"
import { connect } from "react-redux";
import { getCart } from "../../actions/cart";
import { routes } from "../../router/index";
import { push } from "connected-react-router";
import CardProduct from "../../components/cardProduct"
import CardPrices from "../../components/cardPrices";
import MainButton from "../../components/mainButton"
import { CartWrapper, ProductsWrapper } from "./style"

export class Cart extends Component {

  componentDidMount() {
    this.props.getCart();
  }

  render() {
    return (
      <section>
        <Header page={"cart"} />
        <CartWrapper>
          <h2>Produtos</h2>
          <ProductsWrapper>
            {this.props.cart &&
              this.props.cart.items.map(item => {
                return <CardProduct key={item.product.sku} cart={item} />
              })}
          </ProductsWrapper>
          <div>
            {this.props.cart && <CardPrices cart={this.props.cart} />}
            <div id="go-to-payment" onClick={this.props.gotoPayment}>
              <MainButton text={"seguir para pagamento"} />
            </div>
          </div>

        </CartWrapper>
      </section>
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
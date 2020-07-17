import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../../components/header"
import { getCart } from "../../actions/cart";
import ImgSuccess from "../../assets/success.png"
import CardProduct from "../../components/cardProduct";
import CardPrices from "../../components/cardPrices";
import { MainWrapper, ImageWrapper, PaymentWrapper, ProductsWrapper } from "./style"

class Success extends Component {

  render() {

    const { card, name, expiration } = this.props.cardInfo
    const arrayCardNumber = card.split(".")

    return (
      <section>
        <Header page={"success"} />
        <MainWrapper>
          <ImageWrapper>
            <img src={ImgSuccess} />
          </ImageWrapper>
          <h2>Pagamento</h2>
          <PaymentWrapper>
            <p>****.****.****.{arrayCardNumber[3]}</p>
            <p>{name}</p>
            <p>{expiration}</p>
          </PaymentWrapper>
          <h2>Produtos</h2>
          <ProductsWrapper>
            {this.props.cart &&
              this.props.cart.items.map(item => {
                return <CardProduct key={item.product.sku} cart={item} />
              })}
          </ProductsWrapper>
          {this.props.cart && <CardPrices cart={this.props.cart} />}
        </MainWrapper>
      </section>
    );
  }
}


const mapStateToProps = (state) => ({
  cart: state.carts.cart,
  cardInfo: state.carts.cardInfo
});


export default connect(mapStateToProps)(Success);

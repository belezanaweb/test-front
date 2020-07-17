import React, { Component } from "react";
import { connect } from "react-redux";
import { getCart, setCreditCard } from "../../actions/cart";
import { routes } from "../../router/index";
import { push } from "connected-react-router";
import Header from "../../components/header"
import CardPrices from "../../components/cardPrices";
import MainButton from "../../components/mainButton"
import { PaymentWrapper, InputWrapper, InputGridWrapper } from "./style"

class Payment extends Component {
  constructor(props) {
    super(props)
    this.state = {
      form: {
        card: "",
        name: "",
        expiration: "",
        cvv: ""
      },
      errors: {}
    }
  }

  componentDidMount() {
    if(!this.props.cart) {
      this.props.getCart()
    }
  }

  handleCardNumberChange = event => {
    let newCardNumber = event.target.value;

    newCardNumber = newCardNumber.replace(/\D/g, "")
    newCardNumber = newCardNumber.replace(/(\d{4})(\d)/, "$1.$2")
    newCardNumber = newCardNumber.replace(/(\d{4})(\d)/, "$1.$2")
    newCardNumber = newCardNumber.replace(/(\d{4})(\d)/, "$1.$2")
    newCardNumber = newCardNumber.replace(/(\d{4})(\d)/, "$1.$2")

    if (newCardNumber.length < 21) {
      this.setState({ form: { ...this.state.form, card: newCardNumber } })
    }

    if (this.state.form.card.length === 18 || this.state.form.card.length === 19) {
      this.setState({ errors: { ...this.state.errors, card: true } })
    } else {
      this.setState({ errors: { ...this.state.errors, card: false } })
    }
  };

  handleNameChange = event => {
    let newName = event.target.value

    newName = newName.replace(/\d/g, "")

    this.setState({ form: { ...this.state.form, name: newName } })

    if (this.state.form.name) {
      this.setState({ errors: { ...this.state.errors, name: true } })
    } else {
      this.setState({ errors: { ...this.state.errors, name: false } })
    }
  }

  handleExpirationChange = event => {
    let newExpiration = event.target.value

    newExpiration = newExpiration.replace(/\D/g, "")
    newExpiration = newExpiration.replace(/(\d{2})(\d)/, "$1/$2")
    newExpiration = newExpiration.replace(/(\d{4})(\d)/, "$1/$2")

    const arrayExpiration = newExpiration.split("/")

    if (arrayExpiration[0] <= 12 && arrayExpiration[1] >= 2020 && arrayExpiration[1] <= 2030) {
      this.setState({ errors: { ...this.state.errors, expiration: true } })
    } else {
      this.setState({ errors: { ...this.state.errors, expiration: false } })
    }

    if (newExpiration.length < 8) {
      this.setState({ form: { ...this.state.form, expiration: newExpiration } })
    }
  }

  handleCVVChange = event => {
    let newCVV = event.target.value

    newCVV = newCVV.replace(/\D/g, "")
    newCVV = newCVV.replace(/(\d{3})(\d)/, "$1/$2")

    if (newCVV.length < 4) {
      this.setState({ form: { ...this.state.form, cvv: newCVV } })
    }

    if (this.state.form.cvv.length === 2 || this.state.form.cvv.length === 3) {
      this.setState({ errors: { ...this.state.errors, cvv: true } })
    } else {
      this.setState({ errors: { ...this.state.errors, cvv: false } })
    }
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const { card, name, expiration, cvv } = this.state.errors

    if (card === true && expiration === true && cvv === true && name === true) {
      this.props.setCreditCard(this.state.form)
      this.props.goToSuccess()
    }

  }

  render() {
    return (
      <div>
        <Header page={"payment"} />
        <PaymentWrapper>
          <h2>Cartão de crédito</h2>

          <form onSubmit={this.handleFormSubmit}>
            <InputWrapper>
              <label htmlFor={"cardNumber"}>Número do cartão: </label>
              <input
                name="cardNumber"
                type="text"
                placeholder="____.____.____.____"
                value={this.state.form.card || ""}
                onChange={this.handleCardNumberChange}
              />
              <label htmlFor={"nameOnCard"}>Nome do Titular: </label>
              <input
                name="nameOnCard"
                type="text"
                pattern="[A-Za-z ']{3,}"
                placeholder="Como no cartão"
                value={this.state.form.name || ""}
                onChange={this.handleNameChange}
              />
            </InputWrapper>

            <InputGridWrapper>
              <label htmlFor={"expiration"}>Validade (mês/ano):</label>
              <input
                name="expiration"
                type="text"
                placeholder="__/____"
                value={this.state.form.expiration || ""}
                onChange={this.handleExpirationChange}
              />

              <label htmlFor={"CVV"}> CVV: </label>
              <input
                name="CVV"
                type="text"
                placeholder="___"
                value={this.state.form.cvv || ""}
                onChange={this.handleCVVChange}
              />
            </InputGridWrapper>

            {this.props.cart && <CardPrices cart={this.props.cart} />}
            <MainButton text={"Finalizar o pedido"} type={"submit"} />
          </form>

        </PaymentWrapper>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.carts.cart
});

const mapDispatchToProps = (dispatch) => ({
  getCart: () => dispatch(getCart()),
  goToSuccess: () => dispatch(push(routes.success)),
  setCreditCard: (cardInfo) => dispatch(setCreditCard(cardInfo))
});

export default connect(mapStateToProps, mapDispatchToProps)(Payment);
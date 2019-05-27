import * as React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

import Button from '../../../components/button';
import CartResume from '../../../components/cart-resume';
import Section from '../../../components/section';
import { sentCart } from '../../../actions';
import TextField from '../../../components/text-field';

const formToJSON = (elements: any) => [].reduce.call(elements, (data: any, element: any) => {
  data[element.name] = element.value;

  return data;
}, {});

class CheckoutPayment extends React.Component<any> {
  formPayment: React.RefObject<any>;

  constructor(props: any) {
    super(props);
    this.formPayment = React.createRef();
  }

  handleSubmit = () => {
    const formData = formToJSON(this.formPayment.current.elements);

    this.props.sentCart(formData)
    this.props.history!.push('/checkout/confirmation')
  }

  render() {
    const { cart } = this.props;

    return (
      <React.Fragment>
        <Helmet>
          <title>Payment | Checkout</title>
          <meta name="description" content="Payment step" />
        </Helmet>
        <div>
          <Section title="Cartão de crédito">
            <form ref={this.formPayment}>

              <TextField
                label="Número do cartão:"
                id="number-card"
                name="numberCard"
                placeholder="____.____.____.____"
              />

              <TextField
                label="Nome do titular:"
                id="titular-name-card"
                name="titularNameCard"
                placeholder="Igual no cartão"
              />

              <TextField
                label="Validade (mês/ano):"
                id="validate-card"
                name="validateCard"
                placeholder="__/____"
              />

              <TextField
                label="CVV:"
                id="cvv-card"
                name="cvvCard"
                placeholder="___"
              />
            </form>
          </Section>
          <CartResume cart={cart} />
          <Button onClick={this.handleSubmit}>Finalizar o pedido</Button>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: any) =>
  ({ cart: state.cart })

const mapDispatchToProps = (dispatch: any) =>
  ({ sentCart: (data: any) => dispatch(sentCart(data)) })

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckoutPayment);

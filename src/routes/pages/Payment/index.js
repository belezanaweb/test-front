import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as CartActions from '../../../store/modules/cart/actions';
import { bindActionCreators } from 'redux';
import Input from '../../../container/Input';
import Button from '../../../components/Button';
import Total from '../../../components/Total';
import { maskCardValidity, maskNumberCreditCard } from '../../../util/maks';
import { ContainerTable, ProductTable, Form } from './styles';

class Payment extends Component {

  componentDidMount() {
    this.props.validationData({
      numberCard: "kk",
      holder: "kk",
      validity: "kk",
      cvv : "ll"
    });
  };

  render() {

    return (
      <ContainerTable>
        <ProductTable>
          <h1>Cartão de crédito</h1>
          <Form action="#">
            <label htmlFor="#">Número do cartão:</label>
            <Input id="credit_card" onKeyUp={maskNumberCreditCard} name="numberCard" type="text" placeholder="____.____.____.____"/>

            <label htmlFor="#">Nome do Titular:</label>
            <Input type="text" name="holder" placeholder="Como no cartão"/>

            <section>
              <div>
                <label htmlFor="#">Validade (mês/ano):</label>
                <Input id="validity_card" name="validityCard" onKeyUp={maskCardValidity} type="text" placeholder="__/____"/>
               </div>
              <div>
                <label htmlFor="#">CVV:</label>
                <Input type="number" name="cvv" placeholder="___"/>
              </div>
            </section>

          </Form>
        </ProductTable>

        <Total />

         <Button>
          Finalizar o pedido
         </Button>
      </ContainerTable>
    )
  }
}

const mapStateToProps = state => ({
  dataCard: state.cart.dataCard
});

const mapDispatchToProps = dispatch =>
    bindActionCreators( CartActions , dispatch);


export default connect(mapStateToProps, mapDispatchToProps )(Payment);

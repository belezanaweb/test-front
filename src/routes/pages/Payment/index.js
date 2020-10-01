import React, { Component, useRef } from 'react';
import { connect } from 'react-redux';
import * as CartActions from '../../../store/modules/cart/actions';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import Input from '../../../container/Input';
import Button from '../../../components/Button';
import Total from '../../../components/Total';
import { maskCardValidity, maskNumberCreditCard } from '../../../util/maks';
import { ContainerTable, ProductTable, Form } from './styles';

function Payment() {
  const formRef = useRef(null);
  //const dispatch = useDispatch();

  const handleSubmit = async (data) => {
    console.log(data)
    try {
      const schema = Yup.object().shape({
        numberCard: Yup.string().required("Invalid Field").min(20, "Invalid Field").max(20, "Invalid Field"),
        holder: Yup.string().required("Invalid Field"),
        validityCard: Yup.string().required("Invalid Field").min(7, "Invalid Field").max(7, "Invalid Field"),
        cvv: Yup.string().required("Invalid Field").min(3, "Invalid Field").max(3, "Invalid Field"),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      formRef.current.setErrors({});

    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessages = {};

        err.inner.forEach(error => {
          errorMessages[error.path] = error.message;
        });

        formRef.current.setErrors(errorMessages);
      }
    }
  };

    return (
      <ContainerTable>
        <ProductTable>
          <h1>Cartão de crédito</h1>
          <Form ref={formRef} onSubmit={handleSubmit}>

            <div>
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
            </div>
            <Total />

            <Button type="submit">
            Finalizar o pedido
            </Button>
          </Form>
        </ProductTable>

      </ContainerTable>
    )
}

const mapStateToProps = state => ({
  dataCard: state.cart.dataCard
});

const mapDispatchToProps = dispatch =>
    bindActionCreators( CartActions , dispatch);


export default connect(mapStateToProps, mapDispatchToProps )(Payment);

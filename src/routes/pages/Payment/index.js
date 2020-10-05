import React, {  useRef } from 'react';
import { connect } from 'react-redux';
import * as CartActions from '../../../store/modules/cart/actions';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import Input from '../../../container/Input';
import Button from '../../../components/Button';
import Total from '../../../components/Total';
import {  validationData } from '../../../store/modules/cart/actions';
import { maskCardValidity, maskNumberCreditCard } from '../../../util/maks';
import { ContainerTable, ProductTable, Form } from './styles';
import {useHistory} from "react-router-dom";
import Header from '../../../components/Header';

function Payment() {
  const formRef = useRef(null);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = async (data) => {
    try {
      const schema = Yup.object().shape({
        numberCard: Yup.string().required("Invalid Field").min(19, "Invalid Field").max(19, "Invalid Field"),
        holder: Yup.string().required("Invalid Field"),
        validity: Yup.string().required("Invalid Field").min(7, "Invalid Field").max(7, "Invalid Field"),
        cvv: Yup.string().required("Invalid Field").min(3, "Invalid Field").max(3, "Invalid Field"),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      formRef.current.setErrors({});

      dispatch(validationData(data));
      dispatch(history.replace("/success"))

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
      <Header page={2}/>

      <ProductTable>
        <h1>Cartão de crédito</h1>
        <Form ref={formRef} onSubmit={handleSubmit}>

          <div>
            <label htmlFor="#">Número do cartão:</label>
            <Input
              id="credit_card"
              onKeyUp={maskNumberCreditCard}
              name="numberCard"
              type="text"
              placeholder="____.____.____.____"
              maxlength="19"
            />

            <label htmlFor="#">Nome do Titular:</label>
            <Input
              type="text"
              name="holder"
              placeholder="Como no cartão"
            />

            <section>
              <div>
                <label htmlFor="#">Validade (mês/ano):</label>
                <Input
                  id="validity_card"
                  name="validity"
                  onKeyUp={maskCardValidity}
                  type="text" placeholder="__/____"
                  maxlength="7"
                />
              </div>
              <div>
                <label htmlFor="#">CVV:</label>
                <Input
                  type="text"
                  name="cvv"
                  placeholder="___"
                  maxlength="3"
                />
              </div>
            </section>
          </div>

          <Total />
            <Button type="submit" >
              Finalizar o pedido
            </Button>
        </Form>
      </ProductTable>

    </ContainerTable>
  )
}

const mapDispatchToProps = dispatch =>
  bindActionCreators( CartActions , dispatch)

export default connect(null, mapDispatchToProps )(Payment);

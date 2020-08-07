import React, { useRef, useState } from 'react'
import { usePayment } from '../../context/PaymentProvider';
import { Formik, Form, useFormikContext } from "formik";
import * as Yup from 'yup';
import MaskedInput from 'react-text-mask'
import { useHistory } from 'react-router-dom';

import Resume from '../../components/Resume';
import { Title } from '../../components/Title';
import { Section } from '../../components/Section';
import { useOrder } from '../../context/OrderContext';
import { MainContent } from '../../components/MainContent';
import Button from '../../components/Button';
import InputField from '../../components/InputField';
import { Card } from '../../components/Card';

function Payment(props) {
  const { setPaymentData } = usePayment();
  const { loading, order } = useOrder();
  const [ disableBtn, setDisableBtn ] = useState(false);
  const history = useHistory();
  const formRef = useRef()

  const schema = Yup.object({
    cardNumber: Yup.string()
      .min(19,'O cartão precisa ter 16 números')
      .required('Campo obrigatório.'),
    cardName: Yup.string()
      .min(3,'O nome do cartão precisa ter no minimo 3 letras')
      .required('Campo obrigatório.'),
    cardExpiress: Yup.string()
      .matches(/^((0[1-9])|(1[0-2]))\/(\d{4})$/, 'Data Incorreta')
      .required('Campo obrigatório.'),
    cvv: Yup.string().
      min(3,'O Código CCV precisa ter 3 números').
      required('Campo obrigatório.'),
  })

  const initialValues = {
    cardNumber: '',
    cardName: '',
    cardExpiress: '',
    cvv: ''
  }

  const masks = {
    creditCard: [/\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/],
    cardExpiress: [/\d/,/\d/, '/', /\d/,/\d/,/\d/,/\d/],
    cvv: [/\d/,/\d/,/\d/]
  }

  const handleSubmit = () => {
    formRef.current.submitForm()
  }

  const onSubmit = ( values, { setSubmitting, resetForm  }) => {

    setDisableBtn(true)
    setPaymentData({ ...values, empty: false })
    history.push('/order-placed')

  }
  
  return (
<Section>
  {loading 
    ? <span> carregando... </span>
    : (
      <>
        <MainContent>
          <Title> Cartão de crédito </Title>
          <Card>

          <Formik 
          initialValues={initialValues}
          validationSchema={schema}
          innerRef={formRef}
          onSubmit={onSubmit}
          >
            {({ status, isSubmitting, submitForm }) => (
            <Form>
              <InputField
                as={MaskedInput}
                name="cardNumber"
                type="text"
                label="Número do Cartão:"
                placeholder="____.____.____.____"
                mask={masks.creditCard}
                guide={false}
                
              />
              <InputField
                name="cardName"
                type="text"
                label="Nome do titular:"
                placeholder="Como no cartão"
              />
              <InputField
                as={MaskedInput} 
                size={8}
                name="cardExpiress"
                type="text"
                label="Validade mês/ano:"
                placeholder="__/____"
                mask={masks.cardExpiress}
                guide={false}
              />
              <InputField
                as={MaskedInput}
                size={4}
                name="cvv"
                type="text"
                label="CVV:"
                placeholder="___"
                guide={false}
                mask={masks.cvv}
              />
            </Form>
            )}
          </Formik> 
          </Card>

        </ MainContent> 
        <Resume data={order}>
          <Button  disabled={disableBtn} onClick={handleSubmit}> FINALIZAR O PEDIDO </Button>
        </Resume>
      </>
    )}
    </Section>
  )
}

export default Payment



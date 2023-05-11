import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { Form, FormikTouched, FormikErrors } from 'formik';
import PaymentFormField from './PaymentFormField';
import PaymentInitial from './PaymentInitial';

interface Props {
  touched: FormikTouched<typeof PaymentInitial>;
  errors: FormikErrors<typeof PaymentInitial>;
};

const PaymentForm: React.FC<Props> = ({ touched, errors }): React.ReactElement => (
  <Form>
    <Container fluid style={{ padding: '10px 0px 20px 0px' }}>
      <Row>
        <Col>
          <PaymentFormField
            field='paymentNumber'
            text='Número'
            mask='000 000 000 000'
            placeholder='000 000 000 000'
            isTouched={!!touched.paymentNumber}
            isError={!!errors.paymentNumber} />
        </Col>
      </Row>

      <Row>
        <Col>
          <PaymentFormField
            field='paymentName'
            text='Nome do titular do cartão'
            placeholder='Nome impresso no cartão'
            isTouched={!!touched.paymentName}
            isError={!!errors.paymentName} />
        </Col>
      </Row>

      <Row gutterWidth={0}>
        <Col xs={6}>
          <PaymentFormField
            field='paymentValid'
            text='Data de validade'
            mask='00/0000'
            placeholder='MM/AAAA'
            isTouched={!!touched.paymentValid}
            isError={!!errors.paymentValid} />
        </Col>

        <Col xs={6}>
          <PaymentFormField
            field='paymentCvv'
            text='Código CVV'
            mask='000'
            placeholder='000'
            isTouched={!!touched.paymentCvv}
            isError={!!errors.paymentCvv} />
        </Col>
      </Row>
    </Container>
  </Form>
);

export default PaymentForm;

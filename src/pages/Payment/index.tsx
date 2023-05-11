import React from 'react';
import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { Payment as PType } from '_types/form/payment';
import { useBagContext } from '_context/BagContext/hooks/useBagContext';
import Section from '_components/Section';
import Resume from '_components/Resume';
import Typography from '_components/Typography';
import PaymentForm from './partials/PaymentForm';
import PaymentSchema from './partials/PaymentSchema';
import PaymentInitial from './partials/PaymentInitial';
import PaymentFormSubmit from './partials/PaymentFormSubmit';

const Payment: React.FC = (): React.ReactElement => {
  const { state, actions } = useBagContext();
  const navigate = useNavigate();

  const handleSubmit = (data: PType): void => {
    actions.setPaymentData(data);
    navigate('/confirmation');
  }

  return (
    <Formik
      initialValues={PaymentInitial}
      validationSchema={PaymentSchema}
      onSubmit={handleSubmit}
    >
      {(props) => (
        <>
          <Section>
            <Typography padding={{ left: '10px', top: '15px' }} type='Title' value="Cartão de crédito" />
            <PaymentForm {...props} />
          </Section>

          <Resume
            {...state.responseBag}
            action={<PaymentFormSubmit />} />
        </>
      )}
    </Formik>
  );
};

export default Payment;

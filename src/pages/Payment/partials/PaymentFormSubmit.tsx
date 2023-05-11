import React from 'react';
import { useFormikContext } from 'formik';
import Button from '_components/Button';

const PaymentFormSubmit: React.FC = (): React.ReactElement => {
  const { handleSubmit  } = useFormikContext();

  return (
    <Button color='primary' onClick={() => handleSubmit()}>Finalizar pedido</Button>
  );
};

export default PaymentFormSubmit;

import { Suspense, lazy } from 'react';

const CreditCardForm = lazy(() => import('payment/CreditCardForm'));

export default function CreditCardFormFederated() {
  return (
    <Suspense fallback={<div>Loading component...</div>}>
      <CreditCardForm />
    </Suspense>
  );
}

import { Suspense, lazy } from 'react';

const PaymentInformation = lazy(() => import('information/PaymentInformation'));

export default function PaymentInformationFederated() {
  return (
    <Suspense fallback={<div>Loading component...</div>}>
      <PaymentInformation />
    </Suspense>
  );
}

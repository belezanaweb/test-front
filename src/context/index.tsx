import React from 'react';

import { ResumeProvider } from 'context/resume';
import { PaymentProvider } from 'context/payment';

const AppProvider: React.FC = ({ children }) => (
  <ResumeProvider>
    <PaymentProvider>
      { children }
    </PaymentProvider>
  </ResumeProvider>
);

export default AppProvider;

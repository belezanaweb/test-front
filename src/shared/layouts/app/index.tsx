import * as React from 'react';

import Header from '../../components/app/header';
import CheckoutNavbar, { CheckoutNavbarItem } from '../../components/ui/checkout-navbar';

interface AppLayoutProps {
  children: React.ReactNode;
}

function AppLayout({ children }: AppLayoutProps) {
  return (
    <>
      <Header>
        <CheckoutNavbar>
          <>
            <CheckoutNavbarItem>Sacola</CheckoutNavbarItem>
            <CheckoutNavbarItem>Pagamento</CheckoutNavbarItem>
            <CheckoutNavbarItem>Confirmação</CheckoutNavbarItem>
          </>
        </CheckoutNavbar>
      </Header>
      <main>{children}</main>
    </>
  );
}

export default AppLayout;

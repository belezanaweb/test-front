import * as React from 'react';
import { useRouteMatch } from 'react-router-dom';

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
            <CheckoutNavbarItem selected={useRouteMatch('/carrinho')?.isExact}>Sacola</CheckoutNavbarItem>
            <CheckoutNavbarItem selected={useRouteMatch('/pagamento')?.isExact}>Pagamento</CheckoutNavbarItem>
            <CheckoutNavbarItem selected={useRouteMatch('/sucesso')?.isExact}>Confirmação</CheckoutNavbarItem>
          </>
        </CheckoutNavbar>
      </Header>
      <main>{children}</main>
    </>
  );
}

export default AppLayout;

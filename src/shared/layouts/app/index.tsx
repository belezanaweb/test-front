import * as React from 'react';
import { useRouteMatch } from 'react-router-dom';

import Header from '../../components/app/header';
import CheckoutNavbar, { CheckoutNavbarItem } from '../../components/ui/checkout-navbar';
import Main from '../../components/ui/main';

interface AppLayoutProps {
  children: React.ReactNode;
}

function AppLayout({ children }: AppLayoutProps) {
  return (
    <>
      <Header>
        <CheckoutNavbar>
          <>
            <CheckoutNavbarItem selected={useRouteMatch('/carrinho/:id')?.isExact}>Sacola</CheckoutNavbarItem>
            <CheckoutNavbarItem selected={useRouteMatch('/pagamento/:id')?.isExact}>Pagamento</CheckoutNavbarItem>
            <CheckoutNavbarItem selected={useRouteMatch('/sucesso/:id')?.isExact}>Confirmação</CheckoutNavbarItem>
          </>
        </CheckoutNavbar>
      </Header>
      <Main>{children}</Main>
    </>
  );
}

export default AppLayout;

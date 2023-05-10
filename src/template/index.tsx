import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Typography from '_components/Typography';
import { Header, Item, Wrappper } from './Templete.styled';

const Template: React.FC = (): React.ReactElement => {
  const location = useLocation();
  const currentPath = location.pathname;

  const isBag = currentPath === '/bag';
  const isPayment = currentPath === '/payment';
  const isConfirmation = currentPath === '/confirmation';

  return (
    <>
      <Header>
        <Item selected={isBag}>
          <Typography
            className={isBag ? 'selected' : undefined}
            type={isBag ? 'Menu' : 'MenuDisabled'}
            value='Sacola' />
        </Item>

        <Item selected={isPayment}>
          <Typography
            className={isPayment ? 'selected' : undefined}
            type={isPayment ? 'Menu' : 'MenuDisabled'}
            value='Pagamento' />
        </Item>

        <Item selected={isConfirmation}>
          <Typography
            className={isConfirmation ? 'selected' : undefined}
            type={isConfirmation ? 'Menu' : 'MenuDisabled'}
            value='Confirmação' />
        </Item>
      </Header>

      <Wrappper>
        <Outlet />
      </Wrappper>
    </>
  );
};

export default Template;

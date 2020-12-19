import * as React from 'react';

import { ICheckoutNavbarProps } from './checkout-navbar.interface';
import * as Styled from './checkout-navbar.styled';

export const CheckoutNavbar: React.FC<ICheckoutNavbarProps> = ({ children }) => (
  <Styled.CheckoutNavbar aria-label="Navegação para as etapas do Checkout">{children}</Styled.CheckoutNavbar>
);

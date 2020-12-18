import * as React from 'react';

import { ICheckoutNavbarProps } from './checkout-navbar.interface';
import * as Styled from './checkout-navbar.styled';

export const CheckoutNavbar: React.FC<ICheckoutNavbarProps> = ({ children }) => (
  <Styled.CheckoutNavbar>{children}</Styled.CheckoutNavbar>
);

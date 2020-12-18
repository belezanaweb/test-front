import * as React from 'react';

import { ICheckoutNavbarItemProps } from './checkout-navbar.interface';
import * as Styled from './checkout-navbar.styled';

export const CheckoutNavbarItem: React.FC<ICheckoutNavbarItemProps> = ({ children, selected }) => (
  <Styled.CheckoutNavbarItem selected={selected}>{children}</Styled.CheckoutNavbarItem>
);

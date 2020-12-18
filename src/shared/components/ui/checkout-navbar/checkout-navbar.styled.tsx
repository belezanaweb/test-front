import styled from 'styled-components/macro';

import { ICheckoutNavbarItemStyles } from './checkout-navbar.interface';

export const CheckoutNavbar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const CheckoutNavbarItem = styled.a<ICheckoutNavbarItemStyles>`
  color: #ccc;
  font-size: 1.3rem;
  font-weight: 700;
  text-transform: uppercase;

  ${(props) => props.selected && `color: #ff7800`};
`;

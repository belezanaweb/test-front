import React from 'react'
import { shallow } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'
import { CartPage } from "../CartPage";
import { PaymentMethodPage } from "../PaymentMethodPage";
import { ConfirmationPage } from "../ConfirmationPage";

describe('App', () => {
it('cart page rendering', () => {
    expect(
      shallow(
        <MemoryRouter>
          <CartPage/>
        </MemoryRouter>
      )
    ).toMatchSnapshot()
  });
  it('payment page rendering', () => {
    expect(
      shallow(
        <MemoryRouter>
          <PaymentMethodPage/>
        </MemoryRouter>
      )
    ).toMatchSnapshot()
  });
  it('confirmation page rendering', () => {
    expect(
      shallow(
        <MemoryRouter>
          <ConfirmationPage/>
        </MemoryRouter>
      )
    ).toMatchSnapshot()
  });
})
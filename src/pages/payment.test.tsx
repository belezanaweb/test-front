import React from 'react';
import { Provider } from "react-redux";
import { act, fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import axios from 'axios';

import mock from '../store/models/__mocks__/cart.json';

import store from '../store';

import App from '../App';
import Payment from './payment';

jest.mock('axios');

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
  useLocation: () => ({
    pathname: '/payment'
  }),
}));

jest.mock("../components/CreditCardForm/CreditCardForm", () => {
  return function CreditCardForm() {
    return (
      <div data-testid="entries">
        <span>Entries</span>
      </div>
    );
  };
});

afterEach(() => {
  jest.resetAllMocks();
});

describe('Payment Page', () => {
  it('should render payment page', async () => {
    axios.get = jest.fn().mockResolvedValue({ data: mock });

    const { container, getByTestId } = render(
      <Provider store={store}>
        <App>
          <Payment />
        </App>
      </Provider>
    );

    await Payment;

    await act(async () => {
      fireEvent.submit(getByTestId('form'))
    });

    expect(container).toMatchSnapshot();
  });
});

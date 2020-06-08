import React from 'react';
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import axios from 'axios';

import mock from '../store/models/__mocks__/cart.json';

import store from '../store';

import App from '../App';
import Cart from './cart';

jest.mock('axios');

beforeEach(() => {
  jest.resetAllMocks();
});

describe('Cart Page', () => {
  it('should render cart page', async () => {
    axios.get = jest.fn().mockResolvedValue({ data: mock });

    const { container } = render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/cart"]}>
          <App>
            <Cart />
          </App>
        </MemoryRouter>
      </Provider>
    );

    await Cart;

    expect(container).toMatchSnapshot();
  });
});

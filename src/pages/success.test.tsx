import React from 'react';
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import axios from 'axios';

import mock from '../store/models/__mocks__/cart.json';

import store from '../store';

import App from '../App';
import Success from './success';

jest.mock('axios');

beforeEach(() => {
  jest.resetAllMocks();
});

describe('Success Page', () => {
  it('should render success page', async () => {
    axios.get = jest.fn().mockResolvedValue({ data: mock });

    const { container } = render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/success"]}>
          <App>
            <Success />
          </App>
        </MemoryRouter>
      </Provider>
    );

    await Success;

    expect(container).toMatchSnapshot();
  });
});

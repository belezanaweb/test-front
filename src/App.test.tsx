import React from 'react';
import { MemoryRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import store from './store';

import App from './App';

describe('App', () => {
  it('should render default App', async () => {
    const { container, findByText } = render(
      <Provider store={store}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </Provider>
    );

    await findByText('Sacola');

    expect(container).toMatchSnapshot();
  });

  it('should render App in cart', async () => {
    const { container, findByText } = render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/cart"]}>
          <App />
        </MemoryRouter>
      </Provider>
    );

    await findByText('Sacola');

    expect(container).toMatchSnapshot();
  });

  it('should render App in payment', async () => {
    const { container, findByText } = render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/payment"]}>
          <App />
        </MemoryRouter>
      </Provider>
    );

    await findByText('Pagamento');

    expect(container).toMatchSnapshot();
  });

  it('should render App in success', async () => {
    const { container, findByText } = render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/success"]}>
          <App />
        </MemoryRouter>
      </Provider>
    );

    await findByText('Confirmação');

    expect(container).toMatchSnapshot();
  });
});

import React from 'react';
import { render } from '@testing-library/react';
import { CartContainer } from './cartContainer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducers } from '../../store/reducers/index';
import { MemoryRouter } from 'react-router-dom';

const mockPayload = {
  id: '5b15c171e4b0023bb624f616',
  items: [
    {
      quantity: 1,
      product: {
        sku: '1',
        name: 'Produto 1',
        imageObjects: [
          {
            small: 'imgproduto1'
          }
        ],
        priceSpecification: {
          sku: '1',
          price: 10.12,
          originalPrice: 10,
          maxPrice: 100,
          percent: 7,
          discount: 20
        }
      }
    },
    {
      quantity: 1,
      product: {
        sku: '2',
        name: 'Produto 2',
        imageObjects: [
          {
            small: 'imgproduto2'
          }
        ],
        priceSpecification: {
          sku: '2',
          price: 20.24,
          originalPrice: 10,
          maxPrice: 100,
          percent: 7,
          discount: 20
        }
      }
    },
    {
      quantity: 1,
      product: {
        sku: '3',
        name: 'Produto 3',
        imageObjects: [
          {
            small: 'imgproduto3'
          }
        ],
        priceSpecification: {
          sku: '3',
          price: 30.36,
          originalPrice: 10,
          maxPrice: 100,
          percent: 7,
          discount: 20
        }
      }
    }
  ],
  subTotal: 40.48,
  shippingTotal: 1.27,
  discount: 18.19,
  total: 100.36
};

describe('Cart Container', () => {
  it('Should render the cart container', async () => {
    const store = createStore(reducers);
    store.dispatch({ type: 'PRODUCTS_GET', payload: mockPayload });
    const { getByText, getAllByText } = render(
      <Provider store={store}>
        <MemoryRouter>
          <CartContainer />
        </MemoryRouter>
      </Provider>
    );
    expect(getAllByText('PRODUTOS')).toHaveLength(2);
    expect(getByText('SEGUIR PARA O PAGAMENTO')).not.toBeNull();
  });

  it('Should render correct amount of itens', async () => {
    const store = createStore(reducers);
    store.dispatch({ type: 'PRODUCTS_GET', payload: mockPayload });
    const { getAllByTestId } = render(
      <Provider store={store}>
        <MemoryRouter>
          <CartContainer />
        </MemoryRouter>
      </Provider>
    );
    expect(getAllByTestId('cart-item')).toHaveLength(3);
  });

  it('Should render correct prices', async () => {
    const store = createStore(reducers);
    store.dispatch({ type: 'PRODUCTS_GET', payload: mockPayload });
    const { getByText } = render(
      <Provider store={store}>
        <MemoryRouter>
          <CartContainer />
        </MemoryRouter>
      </Provider>
    );
    expect(getByText('R$ 10,12')).not.toBeNull();
    expect(getByText('R$ 20,24')).not.toBeNull();
    expect(getByText('R$ 30,36')).not.toBeNull();
    expect(getByText('R$ 40,48')).not.toBeNull();
    expect(getByText('R$ 1,27')).not.toBeNull();
    expect(getByText('- R$ 18,19')).not.toBeNull();
    expect(getByText('R$ 100,36')).not.toBeNull();
  });
});

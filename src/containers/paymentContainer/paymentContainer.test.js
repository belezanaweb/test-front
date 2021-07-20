import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import { PaymentContainer } from './paymentContainer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducers } from '../../store/reducers/index';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

const mockProductsPayload = {
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
const mockCardPayload = {
  isValid: true,
  cardNum: '1234.1234.1234.1234',
  cardName: 'Teste Testando',
  cardExp: '12/1998',
  cardCvv: '777',
  isValidCardNum: true,
  isValidCardExp: true,
  isValidCardName: true,
  isValidCardCvv: true
};
describe('Payment Container', () => {
  const store = createStore(reducers);
  store.dispatch({ type: 'PRODUCTS_GET', payload: mockProductsPayload });
  store.dispatch({ type: 'CARD_UPDATE', payload: mockCardPayload });

  it('Should render the payment container', () => {
    const { getByTestId, getByText } = render(
      <Provider store={store}>
        <MemoryRouter>
          <PaymentContainer />
        </MemoryRouter>
      </Provider>
    );
    expect(getByTestId('payment')).not.toBeNull();
    expect(getByText('CARTÃO DE CRÉDITO')).not.toBeNull();
    expect(getByText('FINALIZAR PEDIDO')).not.toBeNull();
  });

  it('Should render the correct form values from store', () => {
    const { getByLabelText } = render(
      <Provider store={store}>
        <MemoryRouter>
          <PaymentContainer />
        </MemoryRouter>
      </Provider>
    );
    expect(getByLabelText('Número do cartão:')).toHaveValue('1234.1234.1234.1234');
    expect(getByLabelText('Nome do Titular:')).toHaveValue('Teste Testando');
    expect(getByLabelText('Validade (mês/ano):')).toHaveValue('12/1998');
    expect(getByLabelText('CVV:')).toHaveValue('777');
  });

  it('Should render the correct prices', () => {
    const { getByText } = render(
      <Provider store={store}>
        <MemoryRouter>
          <PaymentContainer />
        </MemoryRouter>
      </Provider>
    );
    expect(getByText('R$ 40,48')).not.toBeNull();
    expect(getByText('R$ 1,27')).not.toBeNull();
    expect(getByText('- R$ 18,19')).not.toBeNull();
    expect(getByText('R$ 100,36')).not.toBeNull();
  });

  it('Should update order store with complete status', async () => {
    const { getByText } = render(
      <Provider store={store}>
        <MemoryRouter>
          <PaymentContainer />
        </MemoryRouter>
      </Provider>
    );
    const btnNode = await waitForElement(() => getByText('FINALIZAR PEDIDO'));
    expect(store.getState().order.isOrderComplete).toEqual(false);
    fireEvent.click(btnNode);
    expect(store.getState().order.isOrderComplete).toEqual(true);
  });
});

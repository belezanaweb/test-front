import * as React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import './mocks/http';
import { modelStore } from '../service/modelStore';
import { Cart } from '../containers/Cart';
import { Provider } from 'exredux';
import { MemoryRouter } from 'react-router';
import { Payment } from '../containers/Payment';
import { Success } from '../containers/Success';
import { flushPromisesAndRefreshWrapper } from './helpers/flushPromises';
import { CartSummary } from '../components/CartSummary';
import { Button } from '../components/Button';
import { CreditCardForm } from '../containers/CreditCardForm';
import { CartProducts } from '../components/CartProducts';
import { SuccessBadge } from '../components/SuccessBadge';

describe('Containers test', () => {
  let wrapper: ReactWrapper;

  afterAll(() => {
    wrapper.unmount();
  });

  describe('Cart', () => {
    // -------------------------------------------------------
    it('should render cart', () => {
      wrapper = mount(
        <Provider modelStore={modelStore}>
          <MemoryRouter>
            <Cart />
          </MemoryRouter>
        </Provider>
      );
      expect(wrapper).toBeTruthy();
    });
    // -------------------------------------------------------
    it('verify Cart container', async () => {
      await flushPromisesAndRefreshWrapper(wrapper);
      expect(wrapper.find(Cart).length).toEqual(1);
      expect(wrapper.find(CartSummary).length).toEqual(1);
      expect(wrapper.find(Button).text()).toContain('Seguir para o pagamento');
    });
    // -------------------------------------------------------
  });

  describe('Payment', () => {
    // -------------------------------------------------------
    it('should render payment', () => {
      wrapper = mount(
        <Provider modelStore={modelStore}>
          <MemoryRouter>
            <Payment />
          </MemoryRouter>
        </Provider>
      );
      expect(wrapper).toBeTruthy();
    });
    // -------------------------------------------------------
    it('verify Payment container', async () => {
      await flushPromisesAndRefreshWrapper(wrapper);
      expect(wrapper.find(Payment).length).toEqual(1);
      expect(wrapper.find(CreditCardForm).length).toEqual(1);
      expect(wrapper.find(CartSummary).length).toEqual(1);
      expect(wrapper.find(Button).text()).toContain('Finalizar o Pedido');
    });
    // -------------------------------------------------------
  });

  describe('Success', () => {
    // -------------------------------------------------------
    it('should render success', () => {
      wrapper = mount(
        <Provider modelStore={modelStore}>
          <MemoryRouter>
            <Success />
          </MemoryRouter>
        </Provider>
      );
      expect(wrapper).toBeTruthy();
    });
    // -------------------------------------------------------
    it('verify Success container', async () => {
      await flushPromisesAndRefreshWrapper(wrapper);
      expect(wrapper.find(Success).length).toEqual(1);
      expect(wrapper.find(CartProducts).length).toEqual(1);
      expect(wrapper.find(CartSummary).length).toEqual(1);
      expect(wrapper.find(SuccessBadge).length).toEqual(1);
    });
    // -------------------------------------------------------
  });
});

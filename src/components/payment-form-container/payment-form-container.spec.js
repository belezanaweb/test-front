jest.mock('../../store/ducks/checkout', () => ({
  doCheckout: jest.fn().mockImplementation(() => ({
    type: Math.random() * 2
  }))
}));

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: jest.fn()
  }),
  withRouter: jest.fn()
}));

import React from 'react';
import { act } from 'react-dom/test-utils';

import { ThemeProvider } from 'styled-components';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import PaymentFormContainer from '.';

import createMockedStore from '../../lib/test-utils/mocked-store';
import { doCheckout } from '../../store/ducks/checkout';
import * as maskCardNumberExports from '../../lib/mask-card-number';
import { formatNumberToString } from '../../lib/yup-transform-date';

import theme from '../../styles/theme';

const mockedStore = createMockedStore();

const AppWrapper = ({ store = mockedStore }) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <PaymentFormContainer />
    </ThemeProvider>
  </Provider>
);

const fieldIds = ['card_number', 'card_holder_name', 'card_expiration_date', 'card_cvv'];
const fieldValues = ['2222.2222.2222.2222', 'LUAN VIEIRA pereira', '12/2021', '444'];

const valuesWithInvalidExpiration = [
  '2222.2222.2222.2222',
  'LUAN VIEIRA pereira',
  formatNumberToString(new Date().getMonth() + 1) + '/',
  '444'
];

const requiredErrors = [
  'O número do cartão é obrigatório.',
  'O nome do titular é obrigatório.',
  'A validade do cartão é obrigatória.',
  'O CVV é obrigatório.'
];

const forceErrorMessage = async (wrapper, name, value) => {
  const field = getField(wrapper, name);

  await act(async () => {
    triggerEvent(field, name, value, 'change');
  });

  await act(async () => {
    triggerEvent(field, name, value, 'blur');
  });

  wrapper.update();
};

const getField = (wrapper, field) => wrapper.find(`input#${field}`);

const getFields = (wrapper, fields = fieldIds) => fields.map(field => getField(wrapper, field));

const triggerEvent = (field, fieldName, value, event = 'change') =>
  field.simulate(event, {
    persist: () => {},
    target: {
      name: fieldName,
      value: value
    }
  });

const setFieldValues = (fields, values = fieldValues) =>
  values.forEach((value, index) => {
    triggerEvent(fields[index], fieldIds[index], value);
  });

describe('PaymentFormContainer', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should call `doCheckout` when form is valid', async () => {
    const wrapper = mount(<AppWrapper />);
    const form = wrapper.find('form');

    const fields = getFields(wrapper);

    await act(async () => {
      setFieldValues(fields);
    });

    await act(async () => {
      form.simulate('submit');
    });

    expect(doCheckout).toHaveBeenCalledWith({
      card_number: '****.****.****.2222',
      card_holder_name: 'LUAN VIEIRA PEREIRA',
      card_expiration_date: '12/2021',
      card_cvv: '444'
    });
  });

  it('should call `maskCardNumber` to mask card number when form is valid', async () => {
    const wrapper = mount(<AppWrapper />);
    const form = wrapper.find('form');

    const spy = jest.spyOn(maskCardNumberExports, 'default');

    const fields = getFields(wrapper);

    await act(async () => {
      setFieldValues(fields);
    });

    await act(async () => {
      form.simulate('submit');
    });

    expect(spy).toHaveBeenCalledWith('2222.2222.2222.2222');
  });

  it('cannot should call `doCheckout` when form is invalid', async () => {
    const wrapper = mount(<AppWrapper />);
    const form = wrapper.find('form');

    await act(async () => {
      form.simulate('submit');
    });

    expect(doCheckout).not.toHaveBeenCalled();
  });

  describe('Fields', () => {
    it('should show required errors', async () => {
      const wrapper = mount(<AppWrapper />);
      const form = wrapper.find('form');

      await act(async () => {
        form.simulate('submit');
      });

      wrapper.update();

      wrapper.find('form span').forEach((currentError, index) => {
        expect(currentError.text()).toEqual(requiredErrors[index]);
      });
    });

    describe('cardNumber', () => {
      it('should show an invalid card number message when there are less than 17 numbers', async () => {
        const wrapper = mount(<AppWrapper />);

        await forceErrorMessage(wrapper, 'card_number', '2222.2222');
        expect(wrapper.find('form span').text()).toEqual('O número do cartão é inválido.');
      });

      it('cannot show an invalid card number message when there are 17 or more', async () => {
        const wrapper = mount(<AppWrapper />);

        await forceErrorMessage(wrapper, 'card_number', '2222.2222.2222.22');
        expect(wrapper.find('form span')).not.toHaveLength(1);

        await forceErrorMessage(wrapper, 'card_number', '2222.2222.2222.2222');
        expect(wrapper.find('form span')).not.toHaveLength(1);
      });
    });

    describe('cardHolderName', () => {
      it('should show an invalid message when the name is invalid', async () => {
        const wrapper = mount(<AppWrapper />);

        await forceErrorMessage(wrapper, 'card_holder_name', 'LUAN ');
        expect(wrapper.find('form span').text()).toEqual('Escreva um nome válido.');

        await forceErrorMessage(wrapper, 'card_holder_name', 'LUAN 123231321');
        expect(wrapper.find('form span').text()).toEqual('Escreva um nome válido.');
      });

      it('cannot should show an invalid message when the name is valid', async () => {
        const wrapper = mount(<AppWrapper />);

        await forceErrorMessage(wrapper, 'card_holder_name', 'LUAN VIEIRA PEREIRA');
        expect(wrapper.find('form span')).not.toHaveLength(1);
      });
    });

    describe('cardExpirationDate', () => {
      it('should show an invalid message when the date is expired', async () => {
        const wrapper = mount(<AppWrapper />);

        await forceErrorMessage(wrapper, 'card_expiration_date', '02/2019');
        expect(wrapper.find('form span').text()).toEqual('A validade do cartão está expirada.');
      });

      it('should show an invalid message when the date is not filled in correctly', async () => {
        const wrapper = mount(<AppWrapper />);

        await forceErrorMessage(wrapper, 'card_expiration_date', '03/');

        expect(wrapper.find('form span').text()).toEqual('A data está inválida.');

        await forceErrorMessage(wrapper, 'card_expiration_date', '13/2050');
        expect(wrapper.find('form span').text()).toEqual('A data está inválida.');
      });

      it('should show an invalid message when the date is not filled in correctly and the form submitted', async () => {
        const wrapper = mount(<AppWrapper />);
        const form = wrapper.find('form');

        const fields = getFields(wrapper);

        await act(async () => {
          setFieldValues(fields, valuesWithInvalidExpiration);
        });

        wrapper.update();

        await act(async () => {
          form.simulate('submit');
        });

        wrapper.update();

        expect(wrapper.find('form span').text()).toEqual('A data está inválida.');
      });

      it('cannot should show an invalid message when the expiration date is valid', async () => {
        const wrapper = mount(<AppWrapper />);

        const date = new Date();
        //current month
        const expirationDate = `${formatNumberToString(date.getMonth() + 1)}/${date.getFullYear()}`;

        await forceErrorMessage(wrapper, 'card_expiration_date', expirationDate);

        expect(wrapper.find('form span')).not.toHaveLength(1);
      });

      it('cannot should show an invalid message when the expiration date is valid and the form submitted', async () => {
        const wrapper = mount(<AppWrapper />);
        const form = wrapper.find('form');

        const fields = getFields(wrapper);

        await act(async () => {
          setFieldValues(fields);
        });

        wrapper.update();

        const date = new Date();
        //current month
        const expirationDate = `${formatNumberToString(date.getMonth() + 1)}/${date.getFullYear()}`;

        await forceErrorMessage(wrapper, 'card_expiration_date', expirationDate);

        await act(async () => {
          form.simulate('submit');
        });

        expect(wrapper.find('form span')).not.toHaveLength(1);
      });
    });

    describe('cardCVV', () => {
      it('should show an invalid message when the cvv is invalid', async () => {
        const wrapper = mount(<AppWrapper />);

        await forceErrorMessage(wrapper, 'card_cvv', '22');
        expect(wrapper.find('form span').text()).toEqual('O CVV deve ter entre 3 e 4 números.');
      });

      it('cannot should show an invalid message when the cvv is valid', async () => {
        const wrapper = mount(<AppWrapper />);

        await forceErrorMessage(wrapper, 'card_cvv', '222');
        expect(wrapper.find('form span')).not.toHaveLength(1);

        await forceErrorMessage(wrapper, 'card_cvv', '2222');
        expect(wrapper.find('form span')).not.toHaveLength(1);
      });
    });
  });
});

jest.restoreAllMocks();

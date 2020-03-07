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

const getFields = (wrapper, fields = fieldIds) =>
  fields.map(field => wrapper.find(`input#${field}`));

const setFieldValues = (fields, values = fieldValues) =>
  values.forEach((value, index) => {
    fields[index].simulate('change', {
      persist: () => {},
      target: {
        name: fieldIds[index],
        value: value
      }
    });
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
      card_number: '2222.2222.2222.2222',
      card_holder_name: 'LUAN VIEIRA PEREIRA',
      card_expiration_date: '12/2021',
      card_cvv: '444'
    });
  });

  it('cannot should call `doCheckout` when form is invalid', async () => {
    const wrapper = mount(<AppWrapper />);
    const form = wrapper.find('form');

    await act(async () => {
      form.simulate('submit');
    });

    expect(doCheckout).not.toHaveBeenCalled();
  });
});

jest.restoreAllMocks();

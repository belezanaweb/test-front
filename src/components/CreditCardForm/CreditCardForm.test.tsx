import React from 'react';
import { act, cleanup, fireEvent, render } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';

import { provider } from '../../utils/testUtils';

import CreditCardForm from './CreditCardForm';
import CreditCardFormController from './CreditCardFormController';

afterEach(function() {
  cleanup();
});

describe('CreditCard Form', () => {
  describe('when not exist CreditCardController', () => {
    it('should not display form entries', () => {
      const { container } = provider(<CreditCardForm />, render);

      expect(container).toBeEmpty();
    });
  });

  describe('when adding new valid credit card data', () => {
    it('should render a credit card form', () => {
      const handleSubmit = () => {};

      const { container } = provider((
        <CreditCardFormController onSubmit={handleSubmit}>
          {() => (
            <>
              <CreditCardForm />
            </>
          )}
        </CreditCardFormController>
      ), render);
  
      expect(container).toMatchSnapshot();
    });

    it('should call handle submit', async () => {
      const data = {
        code: '309',
        expiringDate: '10/2020',
        name: 'John Joe',
        number: '5507.6695.7339.8053',
      };

      const handleSubmit = jest.fn(() => true);

      const { getByLabelText, getByTestId } = provider((
        <CreditCardFormController onSubmit={handleSubmit}>
          {() => (
            <>
              <CreditCardForm />
            </>
          )}
        </CreditCardFormController>
      ), render);
  
      await act(async () => {
        fireEvent.change(
          getByLabelText('card number'),
          {
            target: { value: data.number.replace(/\./gi, '') }
          },
        );
      });

      await act(async () => {
        fireEvent.change(getByLabelText('name'), { target: { value: data.name } });
      });

      await act(async () => {
        fireEvent.change(
          getByLabelText('expiring date'),
          {
            target: { value: data.expiringDate.replace('/', '') } 
          }
        );
      });

      await act(async () => {
        fireEvent.change(
          getByLabelText('code verification'),
          {
            target: { value: data.code }
          }
        );
      });

      await act(async () => {
        fireEvent.submit(getByTestId('form'))
      });

      expect(getByLabelText('card number')).toHaveValue(data.number);
      expect(getByLabelText('name')).toHaveValue(data.name);
      expect(getByLabelText('expiring date')).toHaveValue(data.expiringDate);
      expect(getByLabelText('code verification')).toHaveValue(data.code);  

      expect(handleSubmit).toBeCalled();
    });
  });

  describe('when adding a invalid credit card number', () => {
    it('should show an error message when trying to send', () => {});
  });

  describe('when adding a invalid name', () => {
    it('should show an error message when trying to send', () => {});
  });

  describe('when adding a invalid expiring date for an credit card', () => {
    it('should show an error message when trying to send', () => {});
  });

  describe('when there are no entries', () => {
    it('should show an error message when trying to send', async () => {
      const handleSubmit = jest.fn(() => true);

      const { container, getByTestId } = provider((
        <CreditCardFormController onSubmit={handleSubmit}>
          {() => (
            <>
              <CreditCardForm />
            </>
          )}
        </CreditCardFormController>
      ), render);

      await act(async () => {
        fireEvent.submit(getByTestId('form'))
      });

      expect(handleSubmit).not.toBeCalled();
      expect(container).toMatchSnapshot();
    });
  });
});

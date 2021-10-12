import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import store from '../../../store/store'
import PaymentForm from '.'

describe('Testing a Payment form', () => {
  it('should set values in the Payment form', () => {
    render(
      <Provider store={store}>
        <PaymentForm />
      </Provider>
    )
    userEvent.type(screen.getByTestId('cardNumber'), '1111111111111111')
    userEvent.type(screen.getByTestId('name'), 'Jose Kim')
    userEvent.type(screen.getByTestId('expirationDate'), '222222')
    userEvent.type(screen.getByTestId('cvvCode'), '123')

    expect(screen.getByTestId('cardNumber')).toHaveValue('1111.1111.1111.1111')
    expect(screen.getByTestId('name')).toHaveValue('Jose Kim')
    expect(screen.getByTestId('expirationDate')).toHaveValue('22/2222')
    expect(screen.getByTestId('cvvCode')).toHaveValue('123')

    screen.debug()
  })
})

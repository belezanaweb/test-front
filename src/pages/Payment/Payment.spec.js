import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import store from '../../store/store'
import Payment from '.'

describe('Testing a Payment page', () => {
  it('should render a Payment page in the document"', () => {
    render(
      <Provider store={store}>
        <Payment />
      </Provider>
    )
    expect(screen.getByTestId('payment-page')).toBeTruthy()
  })
})

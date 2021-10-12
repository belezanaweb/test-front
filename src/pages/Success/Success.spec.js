import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from '../../store/store'
import Success from '.'

describe('Render a Success page', () => {
  it('should render a Success page in the document"', () => {
    const { getByTestId, debug } = render(
      <Provider store={store}>
        <Success />
      </Provider>
    )
    debug()
    expect(getByTestId('success-page')).toBeTruthy()
  })
})

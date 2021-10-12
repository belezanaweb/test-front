import React from 'react'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from '../../store/store'
import ProductItem from '.'

describe('<ProductItem />', () => {
  it('should render a ProductItem page in the document', () => {
    render(
      <Provider store={store}>
        <ProductItem />
      </Provider>
    )
    expect(screen.getByTestId('product-item')).toBeTruthy()
  })
})

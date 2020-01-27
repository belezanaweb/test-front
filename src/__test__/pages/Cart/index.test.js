import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'
import Cart from '~/pages/Cart'

describe('Cart Component', () => {
  it('Should keep the cart in localstorage', () => {
    const mockStore = configureStore()
    const store = mockStore({
      cart: [{ quantity: 1, product: {} }],
      subTotal: '',
      shippingTotal: '',
      discount: '',
      total: ''
    })
    const test = shallow(<Cart store={store} />)
      .childAt(0)
      .dive()

    const classInstace = test.instance()
    classInstace.handleCheckout()
    expect(localStorage.setItem).toHaveBeenCalledWith('sacola', JSON.stringify(false))
  })
})

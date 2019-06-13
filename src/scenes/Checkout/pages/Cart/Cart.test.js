// React components
import React from 'react'
import ReactDOM from 'react-dom'

// Enzyme
import Enzyme, { shallow, mount } from '../../../../enzyme'
import Adapter from 'enzyme-adapter-react-16'

// Redux functions
import { Provider } from 'react-redux'

// Redux mock
import createStore from 'redux-mock-store'
import cartData from '../../../../mocks/cartData'

// My component
import Cart from './index'

// Prepare mock store and initial state
const mockStore = createStore()

const INITIAL_STATE = {
  checkout: {
    loading: true,
    cart: {
      items: cartData.items
    },
    subTotal: cartData.subTotal,
    shippingTotal: cartData.shippingTotal,
    discount: cartData.discount,
    total: 0,
    flash: false
  },
  page: {
    loading: true,
    page: 'Cart'
  }
}

// Setting the store
const store = mockStore(INITIAL_STATE)

Enzyme.configure({ adapter: new Adapter() })

const component = (
  <Provider store={store}>
    <Cart />
  </Provider>
)

describe('testing Cart scene', () => {
  it('renders cart with items like api', () => {
    mount(component)
  })

  it('tests if the sum of products is equal to the subtotal', () => {
    var subTotal = 0
    for (var key in INITIAL_STATE.checkout.cart.items) {
      const item = INITIAL_STATE.checkout.cart.items[key]
      subTotal += item.product.priceSpecification.price
    }

    const verifySubTotal = () => {
      return INITIAL_STATE.checkout.subTotal == subTotal
    }
    const underTest = verifySubTotal()
    expect(underTest).toBe(true)
  })
})

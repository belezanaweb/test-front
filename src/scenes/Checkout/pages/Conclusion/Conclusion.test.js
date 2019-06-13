// React components
import React from 'react'

// Enzyme
import Enzyme, { shallow, mount } from '../../../../enzyme'
import Adapter from 'enzyme-adapter-react-16'

// Redux mock
import createStore from 'redux-mock-store'
import cartData from '../../../../mocks/cartData'

// Redux functions
import { Provider } from 'react-redux'

// My component
import Conclusion from './index'

// Prepare mock store and initial state
const mockStore = createStore()

const INITIAL_STATE = {
  card: {
    loading: true,
    data: {
      cardname: null,
      cardnumber: null,
      cardvalidity: null,
      cardcvv: null
    }
  },
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
    page: 'Conclusion'
  }
}

// Setting the store
const store = mockStore(INITIAL_STATE)

Enzyme.configure({ adapter: new Adapter() })

const component = (
  <Provider store={store}>
    <Conclusion />
  </Provider>
)

const wrapper = shallow(<Conclusion store={store} />)

describe('testing Conclusion scene', () => {
  it('renders conclusion without a card', () => {
    mount(component)
  })
})

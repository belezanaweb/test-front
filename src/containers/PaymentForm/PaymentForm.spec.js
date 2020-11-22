import React from 'react'
import { Provider } from 'react-redux'
import PaymentForm from './PaymentForm'
import store from './../../store/store'
import { shallow } from 'enzyme'

describe('PaymentForm component', () => {
  it('renders PaymentForm', () => {
    const component = shallow(
      <Provider store={store}>
        <PaymentForm />
      </Provider>
    )

    expect(component.exists()).toBe(true)
  })
})

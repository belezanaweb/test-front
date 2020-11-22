import React from 'react'
import SummaryCart from './SummaryCart'
import { shallow } from 'enzyme'

describe('SummaryCart component', () => {
  it('renders SummaryCart', () => {
    const data = {
      id: '5b15c171e4b0023bb624f616',
      subTotal: 624.8,
      shippingTotal: 5.3,
      discount: 30,
      total: 618.9
    }

    const component = shallow(<SummaryCart info={data} />)

    expect(component.exists()).toBe(true)
  })
})

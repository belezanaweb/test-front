import React from 'react'
import { shallow } from 'enzyme'
import { findByTestAtrr, checkProps } from '../../utils'
import ProductCartInfo from '~/components/ProductCartInfo'

const setUp = (props = {}) => {
  const component = shallow(<ProductCartInfo {...props} />)
  return component
}

describe('ProductCartInfo Component', () => {
  describe('Checking PropTypes', () => {
    it('Should not throw a worning', () => {
      const expectedProps = {
        subTotal: 'Test subTotal',
        shippingTotal: 'Test shippingTotal',
        discount: 'Test discount',
        total: 'Test total',
        classNameContainer: 'Test classNameContainer'
      }

      const propsErr = checkProps(ProductCartInfo, expectedProps)
      expect(propsErr).toBeUndefined()
    })
  })

  describe('Have props', () => {
    let wrapper
    beforeEach(() => {
      const props = {
        subTotal: 'Test subTotal',
        shippingTotal: 'Test shippingTotal',
        discount: 'Test discount',
        total: 'Test total',
        classNameContainer: 'Test classNameContainer'
      }
      wrapper = setUp(props)
    })

    it('Should render without errors', () => {
      const component = findByTestAtrr(wrapper, 'productCartInfoComponent')
      expect(component.length).toBe(1)
    })

    it('Should render a produtosSubTotal', () => {
      const produtosSubTotal = findByTestAtrr(wrapper, 'produtosSubTotal')
      expect(produtosSubTotal.length).toBe(1)
    })

    it('Should render a freteShippingTotal', () => {
      const freteShippingTotal = findByTestAtrr(wrapper, 'freteShippingTotal')
      expect(freteShippingTotal.length).toBe(1)
    })

    it('Should render a descontoDiscount', () => {
      const descontoDiscount = findByTestAtrr(wrapper, 'descontoDiscount')
      expect(descontoDiscount.length).toBe(1)
    })

    it('Should render a total', () => {
      const total = findByTestAtrr(wrapper, 'total')
      expect(total.length).toBe(1)
    })
  })

  describe('Have NO props', () => {
    let wrapper
    beforeEach(() => {
      wrapper = setUp()
    })

    it('Should not render', () => {
      const component = findByTestAtrr(wrapper, 'productCartInfoComponent')
      expect(component.length).toBe(0)
    })
  })
})

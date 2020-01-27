import React from 'react'
import { shallow } from 'enzyme'
import { findByTestAtrr, checkProps } from '../../utils'
import ProductCart from '~/components/ProductCart'

const setUp = (props = {}) => {
  const component = shallow(<ProductCart {...props} />)
  return component
}

describe('ProductCart Component', () => {
  describe('Checking PropTypes', () => {
    it('Should not throw a worning', () => {
      const expectedProps = {
        productIMG: 'Test img',
        productName: 'Test name',
        productPrice: 'Price'
      }

      const propsErr = checkProps(ProductCart, expectedProps)
      expect(propsErr).toBeUndefined()
    })
  })

  describe('Have props', () => {
    let wrapper
    beforeEach(() => {
      const props = {
        productIMG: 'Test img',
        productName: 'Test name',
        productPrice: 'Price'
      }
      wrapper = setUp(props)
    })

    it('Should render without errors', () => {
      const component = findByTestAtrr(wrapper, 'productCartComponent')
      expect(component.length).toBe(1)
    })

    it('Should render a productIMG', () => {
      const productIMG = findByTestAtrr(wrapper, 'productIMG')
      expect(productIMG.length).toBe(1)
    })

    it('Should render a productName', () => {
      const productName = findByTestAtrr(wrapper, 'productName')
      expect(productName.length).toBe(1)
    })
    it('Should render a productPrice', () => {
      const productPrice = findByTestAtrr(wrapper, 'productPrice')
      expect(productPrice.length).toBe(1)
    })
  })

  describe('Have NO props', () => {
    let wrapper
    beforeEach(() => {
      wrapper = setUp()
    })

    it('Should not render', () => {
      const component = findByTestAtrr(wrapper, 'productCartComponent')
      expect(component.length).toBe(0)
    })
  })
})

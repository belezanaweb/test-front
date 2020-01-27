import React from 'react'
import { shallow } from 'enzyme'
import { findByTestAtrr } from '../../utils'
import BLWButton from '../../../components/BLWButton'

const setUp = (props = {}) => {
  const component = shallow(<BLWButton {...props} />)
  return component
}

describe('BLWButton Compontent', () => {
  describe('Renders', () => {
    let wrapper
    let mockfunc
    beforeEach(() => {
      mockfunc = jest.fn()
      const props = {
        onClick: mockfunc
      }
      wrapper = setUp(props)
    })

    it('Should Render a button', () => {
      const button = findByTestAtrr(wrapper, 'buttonComponent')
      expect(button.length).toBe(1)
    })

    it('Should emit callback on click event', () => {
      const button = findByTestAtrr(wrapper, 'buttonComponent')
      button.simulate('click')
      const callback = mockfunc.mock.calls.length
      expect(callback).toBe(1)
    })
  })
})

import React from 'react'
import { shallow } from 'enzyme'
import { findByTestAtrr, checkProps } from '../../utils'
import BLWSingleTitle from '../../../components/BLWSingleTitle'

const setUp = (props = {}) => {
  const component = shallow(<BLWSingleTitle {...props} />)
  return component
}

describe('BLWSingleTitle Component', () => {
  describe('Checking PropTypes', () => {
    it('Should not throw a worning', () => {
      const expectedProps = {
        className: 'Test className',
        id: 'Test id',
        title: 'Test title'
      }

      const propsErr = checkProps(BLWSingleTitle, expectedProps)
      expect(propsErr).toBeUndefined()
    })
  })

  describe('Render component', () => {
    let wrapper
    beforeEach(() => {
      const props = {
        className: 'Test className',
        id: 'Test id',
        title: 'Test title'
      }
      wrapper = setUp(props)
    })

    it('Should render without errors', () => {
      const component = findByTestAtrr(wrapper, 'singleTitleComponent')
      expect(component.length).toBe(1)
    })

    it('Should render a title', () => {
      const title = findByTestAtrr(wrapper, 'title')
      expect(title.length).toBe(1)
    })
  })
})

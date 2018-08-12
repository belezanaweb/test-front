import React from 'react'
import { mount } from 'enzyme'

import Form from '../Form/index'

const card = {
  cardNumber: 1111111111111111
}

describe('Payment Form Component', () => {
  describe('Tests in Input #card-number', () => {
    it('should input type be a number', () => {
      const wrapper = mount(<Form />)

      expect(wrapper.find('#card-number').prop('type')).toBe('number')
    })

    it('should receive a valid card number', () => {
      const wrapper = mount(<Form />)

      wrapper.setState({ card })

      expect(String(wrapper.state('card').cardNumber)).toHaveLength(16)
    })

    it('should update value', () => {
      const wrapper = mount(<Form />)

      wrapper.setState({ card })

      wrapper.find('#card-number').simulate('keydown', {
        target: { value: wrapper.setState({ card: { cardNumber: 2222222222222222 } }) }
      })

      expect(wrapper.state('card').cardNumber).toBe(2222222222222222)
    })
  })
})

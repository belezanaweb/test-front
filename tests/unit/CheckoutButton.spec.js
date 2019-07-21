import { shallowMount } from '@vue/test-utils'
import CheckoutButton from '@/components/CheckoutButton'

describe('CheckoutButton.vue', () => {
  let wrapper
  const slots = {
    default: 'TEST BUTTON'
  }

  beforeEach(() => {
    wrapper = shallowMount(CheckoutButton, {
      slots
    })
  })

  it('displays button slot', () => {
    const btnText = wrapper.find('button').text()

    expect(btnText).toContain(slots.default)
  })

  it('disable button when disabled props is passed', () => {
    expect(wrapper.find('button').attributes('disabled')).toBeFalsy()
    
    wrapper.setProps({ disabled: true })
    expect(wrapper.find('button').attributes('disabled')).toBeTruthy()
  })
})

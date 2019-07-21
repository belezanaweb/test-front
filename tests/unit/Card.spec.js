import { shallowMount } from '@vue/test-utils'
import Card from '@/components/ui/Card'

describe('ui/Card.vue', () => {
  let wrapper
  const slots = {
    default: '<div>MY CARD</div>'
  }

  beforeEach(() => {
    wrapper = shallowMount(Card, {
      slots
    })
  })

  it('displays card content by slot', () => {
    const cardStot = wrapper.html()

    expect(cardStot).toContain(slots.default)
  })

  it('add shadow class when shadow prop is passed', () => {
    expect(wrapper.classes('shadow')).toBeFalsy()

    wrapper.setProps({ shadow: true })
    expect(wrapper.classes('shadow')).toBe(true)
  })

  it('add border class when border prop is passed', () => {
    expect(wrapper.classes('border')).toBeFalsy()

    wrapper.setProps({ border: true })
    expect(wrapper.classes('border')).toBe(true)
  })
})

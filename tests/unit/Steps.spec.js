import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import Step from '@/components/Steps'

describe('Step.vue', () => {
  let wrapper
  const propsData = {
    items: [
      {
        to: '/foo',
        label: 'foo'
      },
      {
        to: '/bar',
        label: 'bar'
      }
    ]
  }

  beforeEach(() => {
    wrapper = shallowMount(Step, {
      propsData,
      stubs: {
        RouterLink: RouterLinkStub
      }
    })
  })

  it('displays steps list when passed', () => {
    const steps = wrapper.findAll(RouterLinkStub)

    expect(steps.length).toBe(propsData.items.length)
  })

  it('hide steps list when items is not passed', () => {
    wrapper.setProps({ items: [] })
    const steps = wrapper.findAll(RouterLinkStub)

    expect(steps.length).toBe(0)
  })

  it('displays steps labels when passed', () => {
    const steps = wrapper.findAll(RouterLinkStub)

    steps.wrappers.map((item, i) => {
      expect(item.text()).toBe(propsData.items[i].label)
    })
  })

  it('displays steps path when passed', () => {
    const steps = wrapper.findAll(RouterLinkStub)

    steps.wrappers.map((item, i) => {
      expect(item.vm.to).toBe(propsData.items[i].to)
    })
  })
})

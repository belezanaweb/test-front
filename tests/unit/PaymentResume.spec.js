import { mount, createLocalVue } from '@vue/test-utils'
import PaymentSummary from '@/components/PaymentSummary'
import hideDigits from '@/directives/hideDigits'

const localVue = createLocalVue()

localVue.directive('hide-digits', hideDigits)

describe('PaymentSummary.vue', () => {
  let wrapper
  const propsData = {
    summary: {
      creditCardNumber: '1234 1234 1234 1234',
      holderName: 'Teste teste',
      cvv: '123',
      validity: '12/2020',
    }
  }

  beforeEach(() => {
    wrapper = mount(PaymentSummary, {
      propsData,
      localVue
    })
  })

  it('displays credit card number with mask when passed', () => {
    const creditCardItem = wrapper.findAll('li').at(0)

    expect(creditCardItem.text()).toBe('******************** 1234')
  })

  it('displays credit card number with mask when passed', () => {
    const holderNameItem = wrapper.findAll('li').at(1)

    expect(holderNameItem.text()).toBe(propsData.summary.holderName)
  })

  it('displays credit card number with mask when passed', () => {
    const validityItem = wrapper.findAll('li').at(2)

    expect(validityItem.text()).toBe(propsData.summary.validity)
  })
})

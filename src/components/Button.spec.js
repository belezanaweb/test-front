import React from 'react';
import { mount } from 'enzyme';

import Button from './Button';

const setup = ({ title }) => {
  const actions = {
    onClickHandler: jest.fn()
  }

  const component = mount(
    <Button title={title} {...actions} />
  )

  return {
    component,
    title: component.children().at(0),
    actions,
    onClickHandler: jest.fn()
  }
}

describe('<Button />', () => {
  it('should render title', () => {
    const { title } = setup({ title: 'Seguir para o pagamento' })
    expect(title.text()).toMatch(/^Seguir para o pagamento$/)
  })

  it('should handle click', () => {
    const { component, actions } = setup({
      title: 'Seguir para o pagamento'
    })
    component.simulate('click')
    expect(actions.onClickHandler).toBeCalled()
  })
})

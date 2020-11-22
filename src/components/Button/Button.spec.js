import React from 'react'
import BButton from './Button'
import { shallow } from 'enzyme'

describe('Button component', () => {
  const value = 'hellotest'
  const newValue = 'newvalue'

  it('renders button', () => {
    const component = shallow(<BButton> {value} </BButton>)

    expect(component.exists()).toBe(true)
  })

  it('Simulate Click', () => {
    const onClick = jest.fn()
    const component = shallow(<BButton onClick={onClick}> {value} </BButton>)
    const evt = { target: { value: newValue } }

    component.find('button').simulate('click', evt)

    expect(onClick).toBeCalledTimes(1)
  })
})

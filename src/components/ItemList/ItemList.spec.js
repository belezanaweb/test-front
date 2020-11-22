import React from 'react'
import ItemList from './ItemList'
import { shallow } from 'enzyme'

describe('ItemList component', () => {
  it('renders ItemList', () => {
    const component = shallow(<ItemList />)

    expect(component.exists()).toBe(true)
  })
})

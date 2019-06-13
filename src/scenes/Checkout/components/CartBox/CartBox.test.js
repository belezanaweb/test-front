import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, { shallow, mount } from '../../../../enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducers from '../../../../store/reducers'
const store = createStore(rootReducers, applyMiddleware(thunk))

import CartBox from './index'

Enzyme.configure({ adapter: new Adapter() })

const component = <CartBox store={store} />

describe('testing CartBox', () => {
  it('tests the cartbox with initial store', () => {
    mount(component)
  })
})

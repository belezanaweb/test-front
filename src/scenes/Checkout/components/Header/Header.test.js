import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, { shallow, mount } from '../../../../enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducers from '../../../../store/reducers'
const store = createStore(rootReducers, applyMiddleware(thunk))

import Header from './index'

Enzyme.configure({ adapter: new Adapter() })

describe('testing Header', () => {
  it('renders with initial store', () => {
    shallow(<Header store={store} />)
  })
})

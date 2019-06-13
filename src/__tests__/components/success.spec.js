import React from 'react'
import {mount} from 'enzyme'
import {Provider} from 'react-redux'
import Products from '../../components/products/'
import mockApiData from '../../mocks/mockApi'
import createStore from 'redux-mock-store';

const mockStore = createStore();

const INITIAL_STATE = {
  products: mockApiData,
}

const store = mockStore(INITIAL_STATE)

it('should render the list', () => {
  const wrapper = mount(<Provider store={store}><Products /></Provider>);

  expect(wrapper.find('section').length).toBe(1);
  expect(wrapper.find('.product-item').length).toBe(9);
})

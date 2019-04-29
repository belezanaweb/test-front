import { createStore } from 'redux';

function reducer() {
  return [{
    name: 'product one'
  }, {
    name: 'product two'
  }]
}

const store = createStore(reducer);

export default store;

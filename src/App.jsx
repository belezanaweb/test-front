import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import ProductsPage from './components/ProductsPage/ProductsPage';

const App = () => (
  <Provider store={store}>
    <ProductsPage />
  </Provider>
);

export default App;

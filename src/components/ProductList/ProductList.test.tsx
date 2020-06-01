import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import { provider } from '../../utils/testUtils';

import ProductList from './ProductList';

afterEach(function() {
  cleanup();
});

describe('<ProductList />', () => {
  it('should not render when data is empty.', () => {
    provider(<ProductList />, render);
  });
});

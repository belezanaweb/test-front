import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import { provider } from '../../utils/testUtils';

import ProductListItem from './ProductListItem';
import mock from '../../store/models/__mocks__/cart.json';

afterEach(function() {
  cleanup();
});

describe('<ProductListItem />', () => {
  it('should not render when data is empty.', () => {
    const data = mock.items[0];

    provider(<ProductListItem data={data.product} />, render);
  });
});

import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { provider } from '../../utils/testUtils';

import Text from './Text';

describe('<Text />', () => {
  it('should render Text', () => {
    const { container } = provider(<Text>The quick brown fox jumps over the lazy dog</Text>, render);

    expect(container).toMatchSnapshot();
  });
});

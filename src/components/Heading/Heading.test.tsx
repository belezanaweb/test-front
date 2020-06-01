import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { provider } from '../../utils/testUtils';

import Heading from './Heading';

describe('<Heading />', () => {
  it('should render Heading', () => {
    const { container } = provider(<Heading>The quick brown fox jumps over the lazy dog</Heading>, render);

    expect(container).toMatchSnapshot();
  });
});

import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { provider } from '../../utils/testUtils';

import Card from './Card';

describe('<Card />', () => {
  it('should render Card', () => {
    const { container } = provider(<Card>Card</Card>, render);

    expect(container).toMatchSnapshot();
  });
});

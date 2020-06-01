import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { provider } from '../../utils/testUtils';

import Feedback from './Feedback';

describe('<Feedback />', () => {
  it('should render Feedback', () => {
    const { container } = provider(<Feedback>Feedback</Feedback>, render);

    expect(container).toMatchSnapshot();
  });
});

import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { provider } from '../../utils/testUtils';

import Text from '../Text';
import Segment from './Segment';

describe('<Segment />', () => {
  it('should render Segment', () => {
    const { container } = provider((
      <Segment>
        <Text>This is a segment</Text>
      </Segment>
    ), render);

    expect(container).toMatchSnapshot();
  });
});

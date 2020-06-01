import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import { provider } from '../../utils/testUtils';

import TextField from './TextField';

afterEach(function() {
  cleanup();
});

describe('<TextField />', () => {
  it('should render with initial value.', () => {
    provider(<TextField role="input" name="name" value="Dear Rosemary" />, render);

    expect(screen.queryByRole('input')).toHaveValue('Dear Rosemary');
  });

  // TODO: Should format value like mask prop.
});

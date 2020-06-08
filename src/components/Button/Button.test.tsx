import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import 'jest-styled-components';

import { provider } from '../../utils/testUtils';

import Button from './Button';

describe('<Button />', () => {
  it('should render Button', () => {
    const { container } = provider(<Button>Button</Button>, render);

    expect(container).toMatchSnapshot();
  });

  it('should render a fluid Button', () => {
    const { container } = provider(<Button fluid>Button</Button>, render);

    expect(container.firstChild).toHaveStyleRule('width', '100%');
    expect(container).toMatchSnapshot();
  });
});

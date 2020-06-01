import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { provider } from '../../utils/testUtils';

import Steps from './Steps';

describe('<Steps />', () => {
  it('should render Steps', () => {
    const { container } = provider((
      <BrowserRouter>
        <Steps />
      </BrowserRouter>
    ), render);

    expect(container).toMatchSnapshot();
  });
});

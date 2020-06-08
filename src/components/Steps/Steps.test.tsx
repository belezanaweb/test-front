import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import 'jest-styled-components';

import theme from '../../theme'
import { provider } from '../../utils/testUtils';

import Steps from './Steps';

jest.mock('react-router-dom', () => ({
  useLocation: () => ({
    pathname: '/payment'
  }),
}));

afterEach(() => {
  jest.resetAllMocks();
});

describe('<Steps />', () => {
  it('should render Steps', () => {
    const { container } = provider(<Steps />, render);

    expect(container).toMatchSnapshot();
  });

  it('should highlight when is a current step', () => {
    const { getByTitle } = provider(<Steps />, render);

    expect(getByTitle('Pagamento')).toHaveStyleRule('color', theme.colors.primaryLight);
  });
});

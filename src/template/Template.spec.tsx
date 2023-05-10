import Template from '.';
import { useLocation } from 'react-router-dom';
import { screen } from '@testing-library/react';
import { customRender } from '_test/render';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: jest.fn().mockImplementation(() => ({})),
}));
const mockedLocation = jest.mocked(useLocation, true);

describe('Template', () => {
  it('should be render outlet', () => {
    customRender(<span>outlet</span>, <Template />);

    const outlet = screen.getByText(/outlet/i);
    expect(outlet).toBeInTheDocument();
  });

  it('should be bag menu selected', () => {
    mockedLocation.mockImplementation(() => ({
      pathname: '/bag',
      hash: '',
      key: '',
      search: '',
      state: {},
    }));
    customRender(<span>outlet</span>, <Template />);

    const element = screen.getAllByTestId('typography');
    expect(element[0]).toHaveClass('selected');
  });

  it('should be payment menu selected', () => {
    mockedLocation.mockImplementation(() => ({
      pathname: '/payment',
      hash: '',
      key: '',
      search: '',
      state: {},
    }));
    customRender(<span>outlet</span>, <Template />);

    const element = screen.getAllByTestId('typography');
    expect(element[1]).toHaveClass('selected');
  });

  it('should be confirmation menu selected', () => {
    mockedLocation.mockImplementation(() => ({
      pathname: '/confirmation',
      hash: '',
      key: '',
      search: '',
      state: {},
    }));
    customRender(<span>outlet</span>, <Template />);

    const element = screen.getAllByTestId('typography');
    expect(element[2]).toHaveClass('selected');
  });
});


import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('should match component snapshot', () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });
});

import Theme from '.';
import { screen, render } from '@testing-library/react';

describe('Theme', () => {
  it('should be render children', () => {
    render(<Theme><span>children</span></Theme>);

    const children = screen.getByText('children');
    expect(children).toBeInTheDocument();
  });
});

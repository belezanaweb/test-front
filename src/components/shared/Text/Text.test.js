import { render, screen } from '@testing-library/react';
import Text from './Text';

describe('<Text /> component', () => {
  it('should render children without any error', () => {
    render(<Text>Hello World</Text>);
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });

  it('should apply default styles', () => {
    render(<Text>Hello World</Text>);
    expect(screen.getByText('Hello World')).toHaveClass('colorTextPrimary');
    expect(screen.getByText('Hello World')).toHaveClass('fontSizeMedium');
    expect(screen.getByText('Hello World')).toHaveClass('fontWeightNormal');
    expect(screen.getByText('Hello World')).toHaveClass(
      'defaultTextDecoration',
    );
  });

  it('should apply custom styles', () => {
    render(
      <Text
        color="secondary"
        size="large"
        weight="bold"
        decoration="scratch"
        className="custom-class"
      >
        Hello World
      </Text>,
    );
    expect(screen.getByText('Hello World')).toHaveClass('colorTextSecondary');
    expect(screen.getByText('Hello World')).toHaveClass('fontSizeLarge');
    expect(screen.getByText('Hello World')).toHaveClass('fontWeightBold');
    expect(screen.getByText('Hello World')).toHaveClass(
      'scratchTextDecoration',
    );
    expect(screen.getByText('Hello World')).toHaveClass('custom-class');
  });

  it('should render as a different component', () => {
    const { container } = render(<Text component="h1">Hello World</Text>);
    expect(container.querySelector('h1')).toBeInTheDocument();
  });
});

import { render } from '@testing-library/react';
import Text from './Text';

describe('<Text /> component', () => {
  it('should render children without any error', () => {
    const { getByText } = render(<Text>Hello World</Text>);
    expect(getByText('Hello World')).toBeInTheDocument();
  });

  it('should apply default styles', () => {
    const { getByText } = render(<Text>Hello World</Text>);
    expect(getByText('Hello World')).toHaveClass('colorTextPrimary');
    expect(getByText('Hello World')).toHaveClass('fontSizeMedium');
    expect(getByText('Hello World')).toHaveClass('fontWeightNormal');
    expect(getByText('Hello World')).toHaveClass('defaultTextDecoration');
  });

  it('should apply custom styles', () => {
    const { getByText } = render(
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
    expect(getByText('Hello World')).toHaveClass('colorTextSecondary');
    expect(getByText('Hello World')).toHaveClass('fontSizeLarge');
    expect(getByText('Hello World')).toHaveClass('fontWeightBold');
    expect(getByText('Hello World')).toHaveClass('scratchTextDecoration');
    expect(getByText('Hello World')).toHaveClass('custom-class');
  });

  it('should render as a different component', () => {
    const { container } = render(<Text component="h1">Hello World</Text>);
    expect(container.querySelector('h1')).toBeInTheDocument();
  });
});

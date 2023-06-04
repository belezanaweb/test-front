import { render } from '@testing-library/react';
import Text from './Text';

describe('<Text /> component', () => {
  it('should render with default props', () => {
    const { getByText } = render(<Text>Hello World</Text>);
    const textElement = getByText(/Hello World/i);
    expect(textElement).toBeInTheDocument();
    expect(textElement).toHaveStyle('color: #000000');
    expect(textElement).toHaveStyle('font-size: 14px');
    expect(textElement).toHaveStyle('font-weight: 400');
    expect(textElement.tagName).toMatch(/p/i);
  });

  it('should render with custom props', () => {
    const { getByText } = render(
      <Text color="secondary" size="large" weight="bold" component="h1">
        Hello World
      </Text>,
    );
    const textElement = getByText(/Hello World/i);
    expect(textElement).toBeInTheDocument();
    expect(textElement).toHaveStyle('color: #515151');
    expect(textElement).toHaveStyle('font-size: 16px');
    expect(textElement).toHaveStyle('font-weight: 700');
    expect(textElement.tagName).toMatch(/h1/i);
  });
});

import { render, fireEvent } from '@testing-library/react';
import Button from './Button';

jest.mock('../../../contexts', () => ({
  useCheckoutContext: jest.fn(() => ({
    currentTab: 'currentTab',
  })),
}));

describe('<Button /> component', () => {
  it('should render children prop', () => {
    const buttonText = 'Click me';
    const { getByText } = render(<Button>{buttonText}</Button>);
    const buttonElement = getByText(buttonText);
    expect(buttonElement).toBeInTheDocument();
  });

  it('should call onClick prop when button is clicked', () => {
    const onClickMock = jest.fn();
    const { getByText } = render(
      <Button onClick={onClickMock}>Click me</Button>,
    );
    const buttonElement = getByText('Click me');
    fireEvent.click(buttonElement);
    expect(onClickMock).toHaveBeenCalled();
  });

  it('should apply Button CSS class', () => {
    const { getByText } = render(<Button>Click me</Button>);
    const buttonElement = getByText('Click me');
    expect(buttonElement).toHaveClass('Button');
  });
});

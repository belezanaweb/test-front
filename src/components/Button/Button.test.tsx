import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./index";


const props = {
  handleClick: jest.fn(),
  allow: true
};

describe("Button", () => {
  test("should render component without crash", () => {
    render(<Button {...props}>PAGAMENTO</Button>);
    const text = screen.getByText(/pagamento/i);
    expect(text).toBeInTheDocument();
  });

  test("should call handleClick when clicked", () => {
    const { getByText } = render(<Button {...props}>PAGAMENTO</Button>);
    fireEvent.click(getByText('PAGAMENTO'));
    expect(props.handleClick).toHaveBeenCalled()
  });

  test("should NOT call handleClick when clickked", () => {
    const blockProps = {
      handleClick: jest.fn(),
      allow: false
    };
    const { getByText } = render(<Button {...blockProps}>PAGAMENTO</Button>);
    fireEvent.click(getByText('PAGAMENTO'));
    expect(blockProps.handleClick).not.toHaveBeenCalled()
  });
});
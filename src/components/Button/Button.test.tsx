import { render, screen } from "@testing-library/react";
import Button from "./index";


const props = {
  handleClick: () => "mock function",
  allow: true
};

describe("Button", () => {
  test("should render component without crash", () => {
    render(<Button {...props}>PAGAMENTO</Button>);
    const link = screen.getByText(/pagamento/i);
    expect(link).toBeInTheDocument();
  });
});
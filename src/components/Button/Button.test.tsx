import { render, screen } from "@testing-library/react";
import Button from "./index";

describe("Button", () => {
  test("should render component without crash", () => {
    render(<Button to="/pagamento">PAGAMENTO</Button>);
    const link = screen.getByText(/pagamento/i);
    expect(link).toBeInTheDocument();
  });
});
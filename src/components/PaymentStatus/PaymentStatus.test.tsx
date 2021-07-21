import { render, screen } from "@testing-library/react";
import PaymentStatus from "./index";

describe("PaymentStatus", () => {
  test("should render component without crash", () => {
    render(<PaymentStatus />);
    const element = screen.getByTestId('paymentStatus-test')
    expect(element).toBeInTheDocument();
  });
});
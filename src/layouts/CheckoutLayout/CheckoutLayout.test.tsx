import { render, screen } from "@testing-library/react";
import CheckoutLayout from "./index";

describe("CheckoutLayout", () => {
    test("should render component without crash", () => {
        render(<CheckoutLayout>Checkout</CheckoutLayout>);
        const input = screen.getByText(/checkout/i);
        expect(input).toBeInTheDocument();
    });
});
import { render, screen } from "@testing-library/react";
import CardForm from "./index";
import BillingContextProvider from '../../contexts/BillingContext'

describe("CardForm", () => {
    test("should render component without crash", () => {
        render(<BillingContextProvider><CardForm /></BillingContextProvider>);
        const title = screen.getByText(/CVV/i);
        expect(title).toBeInTheDocument();
    });
});
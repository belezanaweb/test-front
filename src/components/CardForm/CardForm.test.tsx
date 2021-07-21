import { fireEvent, render, screen } from "@testing-library/react";
import CardForm from "./index";
import BillingContextProvider from '../../contexts/BillingContext'

const handleSubmit = jest.fn()

describe("CardForm", () => {
    test("should render component without crash", () => {
        render(<BillingContextProvider><CardForm /></BillingContextProvider>);
        const title = screen.getByTestId('cardForm-test');
        expect(title).toBeInTheDocument();
    });

    test("should NOT submit form when clicked", () => {
        const { getByTestId } = render(<BillingContextProvider><CardForm /></BillingContextProvider>);
        fireEvent.submit(getByTestId('cardForm-test'))
        expect(handleSubmit).not.toHaveBeenCalled();
    });
});
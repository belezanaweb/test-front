import { render, screen } from "@testing-library/react";
import CardForm from "./index";

describe("CardForm", () => {
    test("should render component without crash", () => {
        render(<CardForm />);
        const title = screen.getByText(/CVV/i);
        expect(title).toBeInTheDocument();
    });
});
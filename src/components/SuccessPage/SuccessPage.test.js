import React from "react";
import SuccessPage from "./index";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("Elements renders successfully", () => {
    test("Page elements are rendered", async () => {
        const {getByText, getAllByText} = render(<SuccessPage />);

        const header = getByText(/Confirmação/i);
        const heading = getAllByText(/Pagamento/i);
        const successMessage = getByText(/Compra efeituada com sucesso/i);
        const totalPrice = getByText(/Total/i);      

        expect(header).toBeInTheDocument();
        expect(heading[1]).toBeInTheDocument();
        expect(successMessage).toBeInTheDocument();
        expect(totalPrice).toBeInTheDocument();
    })
})
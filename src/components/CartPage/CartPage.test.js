import React from "react";
import CartPage from "./index";
import PaymentPage from "../PaymentPage"
import { render, screen, waitFor } from "@testing-library/react";
import { createMemoryHistory } from 'history';
import { Router, MemoryRouter, Route } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";

describe("Elements renders successfully", () => {
    test("Page elements are rendered", async () => {
        const utils = render(<CartPage />);
        const getByText = utils.getByText;
        const getAllByText = utils.getAllByText;

        const header = getByText(/Sacola/i);
        const products = getAllByText(/Produtos/i);
        const totalPrice = getByText(/Total/i);
        const button = getByText(/Seguir para o pagamento/i);

        expect(header).toBeInTheDocument();
        expect(products[0]).toBeInTheDocument();
        expect(products[1]).toBeInTheDocument();
        expect(products[2]).toBe(undefined);
        expect(totalPrice).toBeInTheDocument();
        expect(button).toBeInTheDocument();
    })
})

const renderComponent = () => 
    render(<MemoryRouter initialEntries={["/cart"]}>  
    <Route exact path="/cart">
        <CartPage />
    </Route>
 </MemoryRouter>
)

describe("CartPage buttons works properly", () => {
    test("Header button is functional", async () => {
                const history = createMemoryHistory()
        render(
            <Router history={history}>
                <CartPage />
            </Router>
        )

        expect(screen.getByText(/Sacola/i)).toBeInTheDocument()
        const header = screen.getAllByText(/Pagamento/i);
        await userEvent.click(header[0]);

        const PaymentPageHeader = screen.getAllByText(/Pagamento/i);
        expect(PaymentPageHeader[0]).toBeInTheDocument();
        
    })
})


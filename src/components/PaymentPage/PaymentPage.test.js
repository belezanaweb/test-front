import React from "react";
import PaymentPage from "./index";
import { render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

describe("PaymentPage renders successfully", () => {
    test("Page elements are rendered", async () => {
        const utils = render(<PaymentPage />);
        const getByText = utils.getByText;
        const getByLabelText = utils.getByLabelText;

        const header = getByText(/Pagamento/i);
        const heading = getByText(/Cartão de crédito/i);
        const creditCardNumberLabel = getByLabelText(/Número do cartão/i);
        const creditCardholderNameLabel = getByLabelText(/Nome do titular/i);
        const creditCardExpirationDateLabel = getByLabelText(/Validade/i);
        const creditCardSecurityNumberLabel = getByLabelText(/CVV/i);
        const totalPrice = getByText(/Total/i);
        const button = getByText(/Finalizar o pedido/i);

        expect(header).toBeInTheDocument();
        expect(heading).toBeInTheDocument();
        expect(creditCardNumberLabel).toBeInTheDocument();
        expect(creditCardholderNameLabel).toBeInTheDocument();
        expect(creditCardExpirationDateLabel).toBeInTheDocument();
        expect(creditCardSecurityNumberLabel).toBeInTheDocument();
        expect(totalPrice).toBeInTheDocument();
        expect(button).toBeInTheDocument();
    })
})

describe("Inputs are receiving data", () => {
    test("All inputs can be typed on", async () => {
        const utils = render(<PaymentPage />);
        const getByLabelText = utils.getByLabelText;

        const creditCardNumberInput = getByLabelText(/Número do cartão/i);
        const creditCardholderNameInput = getByLabelText(/Nome do titular/i);
        const creditCardExpirationDateInput = getByLabelText(/Validade/i);
        const creditCardSecurityNumberInput = getByLabelText(/CVV/i);

        await userEvent.type(creditCardNumberInput, "5555555555555555");
        await userEvent.type(creditCardholderNameInput, "Carlos Oliveira");
        await userEvent.type(creditCardExpirationDateInput, "022021");
        await userEvent.type(creditCardSecurityNumberInput, "123");

        expect(creditCardNumberInput).toHaveValue("5555.5555.5555.5555");
        expect(creditCardholderNameInput).toHaveValue("Carlos Oliveira");
        expect(creditCardExpirationDateInput).toHaveValue("02/2021");
        expect(creditCardSecurityNumberInput).toHaveValue("123");
    })
})

describe("Inputs are validating data", () => {
    test("All inputs expects certain kinds of data", async () => {
        const utils = render(<PaymentPage />);
        const getByLabelText = utils.getByLabelText;

        const creditCardNumberInput = getByLabelText(/Número do cartão/i);
        const creditCardholderNameInput = getByLabelText(/Nome do titular/i);
        const creditCardExpirationDateInput = getByLabelText(/Validade/i);
        const creditCardSecurityNumberInput = getByLabelText(/CVV/i);

        await userEvent.type(creditCardNumberInput, "aaaaaaabbbbbbccccccdddddd");
        await userEvent.type(creditCardholderNameInput, "555555555555");
        await userEvent.type(creditCardExpirationDateInput, "abcdefg");
        await userEvent.type(creditCardSecurityNumberInput, "aaaaaaadddeeee");

        expect(creditCardNumberInput).toHaveValue("");
        expect(creditCardholderNameInput).toHaveValue(""); 
        expect(creditCardExpirationDateInput).toHaveValue(""); 
        expect(creditCardSecurityNumberInput).toHaveValue("");  
    })

    test("Error messages appear when there's an error", async () => {
        const utils = render(<PaymentPage />);
        const getByLabelText = utils.getByLabelText;

        const creditCardNumberInput = getByLabelText(/Número do cartão/i);
        const creditCardholderNameInput = getByLabelText(/Nome do titular/i);
        const creditCardExpirationDateInput = getByLabelText(/Validade/i);
        const creditCardSecurityNumberInput = getByLabelText(/CVV/i);

        await userEvent.type(creditCardNumberInput, "555");
        await userEvent.type(creditCardholderNameInput, "f");
        await userEvent.type(creditCardExpirationDateInput, "01/1960");
        await userEvent.type(creditCardSecurityNumberInput, "1");

        const button = utils.getByText(/finalizar o pedido/i);
        await waitFor(() => {userEvent.click(button)});

        const creditCardErrorMessage =  utils.getByText(/Número de cartão de crédito inválido/i)
        const nameErrorMessage = utils.getByText(/Titular inválido/i)
        const expirationDateErrorMessage = utils.getByText(/Data de validade inválida/i)
        const securityCodeErrorMessage = utils.getByText(/CVV inválido/i)

        expect(creditCardNumberInput).toHaveValue("555");
        expect(creditCardholderNameInput).toHaveValue("f"); 
        expect(creditCardExpirationDateInput).toHaveValue("01/1960"); 
        expect(creditCardSecurityNumberInput).toHaveValue("1");  
    })
})

describe("Form inputs are working", () => {
    test("The form successfully receives and stores data", async () => {
        const handleContextForm = jest.fn();
        const history = createMemoryHistory();

        const { getByText, getByLabelText } = render(
            <Router history={history}>
            <PaymentPage handleContextForm={handleContextForm} />
            </Router>
        );

        const creditCardNumberInput = getByLabelText(/Número do cartão/i);
        const creditCardholderNameInput = getByLabelText(/Nome do titular/i);
        const creditCardExpirationDateInput = getByLabelText(/Validade/i);
        const creditCardSecurityNumberInput = getByLabelText(/CVV/i);

        await userEvent.type(creditCardNumberInput, "5555555555555555");
        await userEvent.type(creditCardholderNameInput, "José Carlos");
        await userEvent.type(creditCardExpirationDateInput, "012021");
        await userEvent.type(creditCardSecurityNumberInput, "111");

        
        expect(creditCardNumberInput).toHaveValue("5555.5555.5555.5555");
        expect(creditCardholderNameInput).toHaveValue("José Carlos"); 
        expect(creditCardExpirationDateInput).toHaveValue("01/2021"); 
        expect(creditCardSecurityNumberInput).toHaveValue("111");  

        const finishOrderButton = getByText(/Finalizar o pedido/i);
        
        await waitFor(() => {userEvent.click(finishOrderButton)}); 
        expect(handleContextForm).toHaveBeenCalledWith({ 
            creditCard: "****.****.****.5555",
            name: "José Carlos",
            expirationDate: "01/2021",
            securityCode: "111"
        });
    })
})

describe("Rerouting is functional", () => {
    test("header button is functional", async () => {
        const handleContextForm = jest.fn();
        const history = createMemoryHistory();

        const { getByText } = render(
            <Router history={history}>
            <PaymentPage handleContextForm={handleContextForm} />
            </Router>
        );

        const headerButton = getByText(/Sacola/i)
        
        const leftClick = { button: 0 }
        userEvent.click(headerButton, leftClick);
                
        await waitFor(() => expect(headerButton).toBeInTheDocument())

    });  
})

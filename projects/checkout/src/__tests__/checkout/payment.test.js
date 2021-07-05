/**
 * @jest-environment jsdom
 */
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, waitFor } from "@testing-library/react";
import PaymentPage from "../../pages/checkout/payment";

jest.mock("@belezanaweb/store", () => ({
  useUserState: jest.fn().mockImplementation(() => {
    return {
      purchaseItemsResume: {
        subTotal: 283,
        shippingTotal: 17,
        discount: 15,
        total: 200,
      },
    };
  }),
  useUserDispatch: jest.fn().mockImplementation(() => {
    return jest.fn();
  }),
}));

const handleSubmit = jest.fn();

const wrapper = () => render(<PaymentPage />);

describe("Tests about Confirmation Page", () => {
  it("Check if page loads correctly and the dynamic list item as well", async () => {
    const { getByText } = wrapper();

    await waitFor(() => {
      const text = getByText("Cartão de crédito");
      expect(text).toBeInTheDocument();
    });
  });

  it("Test if form is validating correclty", async () => {
    const { getByText, getByLabelText } = wrapper();

    const inputCardNumber = getByLabelText("Número do cartão");
    const inputName = getByLabelText("Nome do Titular");
    const inputValidation = getByLabelText("Validade mês/ano");
    const inputCVV = getByLabelText("CVV");
    const btn = getByText("Finalizar o pedido");

    fireEvent.change(inputCardNumber, {
      target: { value: "1234.4321.1122.3344" },
    });
    fireEvent.change(inputName, { target: { value: "Teste da Silva" } });
    fireEvent.change(inputValidation, { target: { value: "12/2024" } });
    fireEvent.change(inputCVV, { target: { value: "009" } });

    await waitFor(() => {
      fireEvent.click(btn);
    });
  });

  it("Test if form is treating errors correclty", async () => {
    const { getByText, getByLabelText } = wrapper();

    const inputCardNumber = getByLabelText("Número do cartão");
    const inputName = getByLabelText("Nome do Titular");
    const inputValidation = getByLabelText("Validade mês/ano");
    const inputCVV = getByLabelText("CVV");
    const btn = getByText("Finalizar o pedido");

    fireEvent.change(inputCardNumber, {
      target: { value: "1234.4321.1122" },
    });
    fireEvent.change(inputName, { target: { value: "Teste da Silva" } });
    fireEvent.change(inputValidation, { target: { value: "2024" } });
    fireEvent.change(inputCVV, { target: { value: "" } });

    await waitFor(() => {
      fireEvent.click(btn);
    });
  });
});

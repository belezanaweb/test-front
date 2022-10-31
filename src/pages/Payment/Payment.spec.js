import React from "react";
import { act, render, screen, waitFor } from "@testing-library/react";
import Payment from ".";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import TestUtils from "react-dom/test-utils";

import MutationObserver from "@sheerun/mutationobserver-shim";
window.MutationObserver = MutationObserver;

jest.mock("axios");

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

describe("Payment page tests", () => {
  it("should show that all fields are required", async () => {
    render(<Payment />);
    act(() => {
      userEvent.click(screen.getByText("Finalizar o pedido"));
    });

    await waitFor(() => {
      expect(
        screen.getByText("Número do cartão é obrigatório.")
      ).toBeInTheDocument();
      expect(
        screen.getByText("Nome do titular é obrigatório.")
      ).toBeInTheDocument();
      expect(
        screen.getByText("Data de validade é obrigatória.")
      ).toBeInTheDocument();
      expect(screen.getByText("CVV é obrigatório.")).toBeInTheDocument();
    });
  });

  it("should change cartData and redirect to sucess page when all fields are correctly filled", async () => {
    render(<Payment />);
    act(() => {
      changeInputMaskValue(
        screen.getByTestId("creditCardNumber"),
        "1111111111111111"
      );
    });
    act(() => {
      changeInputMaskValue(screen.getByTestId("ownerName"), "Teste nome");
    });
    act(() => {
      changeInputMaskValue(screen.getByTestId("validateDate"), "01/2001");
    });
    act(() => {
      changeInputMaskValue(screen.getByTestId("securityCode"), "111");
    });

    act(() => {
      userEvent.click(screen.getByText("Finalizar o pedido"));
    });

    await waitFor(() => {
      expect(mockedUsedNavigate).toHaveBeenCalledWith("/sucessfullPurchase");
    });
  });
});

function changeInputMaskValue(element, value) {
  element.value = value;
  element.selectionStart = element.selectionEnd = value.length;
  TestUtils.Simulate.change(element);
}

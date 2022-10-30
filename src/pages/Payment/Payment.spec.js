import React from "react";
import {
  act,
  render,
  screen,
  waitFor,
  fireEvent,
} from "@testing-library/react";
import Payment from ".";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
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
    fireEvent.change(screen.getByTestId("cardNumber"), {
      target: { value: "1111111111111111" },
    });
    fireEvent.change(screen.getByTestId("ownerName"), {
      target: { value: "Teste nome" },
    });
    fireEvent.change(screen.getByTestId("validateDate"), {
      target: { value: "01/2001" },
    });
    fireEvent.change(screen.getByTestId("securityCode"), {
      target: { value: "111" },
    });

    act(() => {
      userEvent.click(screen.getByText("Finalizar o pedido"));
    });

    await waitFor(() => {
      expect(mockedUsedNavigate).toHaveBeenCalledWith("/sucessfullPurchase");
    });
  });
});

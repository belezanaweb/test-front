import React from "react";
import { act, render, screen, waitFor } from "@testing-library/react";
import Payment from ".";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import MutationObserver from "@sheerun/mutationobserver-shim";
window.MutationObserver = MutationObserver;

jest.mock("axios");

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
});

import React from "react";
import { render, screen } from "@testing-library/react";
import { RoutesList } from ".";
import { MemoryRouter } from "react-router-dom";
import { useCart } from "../contexts/cart";

import "@testing-library/jest-dom";

jest.mock("axios");

jest.mock("../contexts/cart");
const hook = { useCart };
const STATE_SPY = jest.spyOn(hook, "useCart");

describe("ShoppingCart page tests", () => {
  it("should verify if tab redirects to shopping cart page", async () => {
    STATE_SPY.mockReturnValue({
      cart: {
        paymentData: null,
      },
    });
    render(<RoutesList />, { wrapper: MemoryRouter });
    expect(screen.getByText("SACOLA")).toHaveAttribute("href", "/shoppingCart");
  });

  it("should verify if tab redirects to payment page", async () => {
    STATE_SPY.mockReturnValue({
      cart: {
        paymentData: null,
      },
    });
    render(<RoutesList />, { wrapper: MemoryRouter });
    expect(screen.getByText("PAGAMENTO")).toHaveAttribute("href", "/payment");
  });

  it("should verify if tab redirects to sucessfullPurchase", async () => {
    STATE_SPY.mockReturnValue({
      cart: {
        paymentData: {
          creditCardNumber: "any value",
          ownerName: "any value",
          validateDate: "any value",
        },
      },
    });
    render(<RoutesList />, { wrapper: MemoryRouter });
    expect(screen.getByText("CONFIRMAÇÃO")).toHaveAttribute(
      "href",
      "/sucessfullPurchase"
    );
  });
});

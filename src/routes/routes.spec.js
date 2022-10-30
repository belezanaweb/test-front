import React from "react";
import { render, screen } from "@testing-library/react";
import { RoutesList } from ".";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";

jest.mock("axios");

describe("ShoppingCart page tests", () => {
  it("should verify if tab redirects to shopping cart page", async () => {
    render(<RoutesList />, { wrapper: MemoryRouter });
    expect(screen.getByText("SACOLA")).toHaveAttribute("href", "/shoppingCart");
  });

  it("should verify if tab redirects to payment page", async () => {
    render(<RoutesList />, { wrapper: MemoryRouter });
    expect(screen.getByText("PAGAMENTO")).toHaveAttribute("href", "/payment");
  });

  it("should verify if tab redirects to sucessfullPurchase", async () => {
    render(<RoutesList />, { wrapper: MemoryRouter });
    expect(screen.getByText("CONFIRMAÇÃO")).toHaveAttribute(
      "href",
      "/sucessfullPurchase"
    );
  });
});

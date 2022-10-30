import React from "react";
import { act, render, screen, waitFor } from "@testing-library/react";
import ShoppingCart from ".";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { useCart } from "../../contexts/cart";
import MutationObserver from "@sheerun/mutationobserver-shim";
window.MutationObserver = MutationObserver;

jest.mock("axios");

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

const mockedData = {
  subTotal: "R$ 624,80",
  shippingTotal: "R$ 5,30",
  discount: "R$ 30,00",
  total: "R$ 600.10",
  items: [
    {
      quantity: 1,
      product: {
        sku: "24410",
        name: "description",
        imageObjects: [
          {
            featured: true,
            thumbnail: "https://thumbnail.png",
            small: "https://small.png",
            medium: "https://medium.png",
            large: "https://large.png",
            extraLarge: "https://extraLarge.png",
            valid: true,
          },
        ],
        priceSpecification: {
          sku: "24410",
          price: "R$ 225,90",
          originalPrice: "R$ 225,90",
          maxPrice: "R$ 243,90",
          percent: "7%",
          discount: "R$ 18,00",
        },
      },
    },
  ],
};

jest.mock("../../contexts/cart");
const hook = { useCart };
const STATE_SPY = jest.spyOn(hook, "useCart");
STATE_SPY.mockReturnValue({ cart: mockedData });

describe("ShoppingCart page tests", () => {
  it("should verify if button redirects to payment page", async () => {
    render(<ShoppingCart />, { wrapper: MemoryRouter });
    act(() => {
      userEvent.click(screen.getByText("Seguir para o pagamento"));
    });
    await waitFor(() => {
      expect(mockedUsedNavigate).toHaveBeenCalledWith("/payment");
    });
  });

  it("should show right products fields and also show total payment", async () => {
    render(<ShoppingCart />, { wrapper: MemoryRouter });

    await waitFor(() => {
      expect(screen.getByTestId("productImage")).toHaveAttribute(
        "src",
        mockedData.items[0].product.imageObjects[0].thumbnail
      );
      expect(
        screen.getByText(mockedData.items[0].product.priceSpecification.price)
      ).toBeInTheDocument();
      expect(
        screen.getByText(mockedData.items[0].product.name)
      ).toBeInTheDocument();

      expect(screen.getByText(mockedData.subTotal)).toBeInTheDocument();
      expect(screen.getByText(mockedData.shippingTotal)).toBeInTheDocument();
      expect(screen.getByText("- " + mockedData.discount)).toBeInTheDocument();
      expect(screen.getByText(mockedData.total)).toBeInTheDocument();
    });
  });
});

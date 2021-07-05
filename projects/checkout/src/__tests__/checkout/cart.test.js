/**
 * @jest-environment jsdom
 */
import React from "react";
import Router from "next/router";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, waitFor, cleanup } from "@testing-library/react";
import CartPage from "../../pages/checkout/cart";

afterEach(cleanup);

jest.mock("next/router", () => ({
  push: jest.fn(),
}));

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

jest.mock("@belezanaweb/services", () => ({
  Client: {
    getPurchaseResume: jest.fn().mockImplementation(() => {
      return {
        data: {
          items: [
            {
              product: {
                name: "Product name",
                imageObjects: [
                  {
                    small: "small image 01",
                  },
                ],
                priceSpecification: {
                  price: 225.9,
                },
              },
            },
            {
              product: {
                name: "Product name 02",
                imageObjects: [
                  {
                    small: "small image 02",
                  },
                ],
                priceSpecification: {
                  price: 299,
                },
              },
            },
          ],
        },
      };
    }),
  },
}));

const wrapper = () => render(<CartPage />);

describe("Tests about Cart Page", () => {
  it("Check if page loads correctly and the dynamic list item as well", async () => {
    const { getByText } = wrapper();

    await waitFor(() => {
      const text = getByText("Product name 02");
      expect(text).toBeInTheDocument();
    });
  });

  it("Check if button is calling router correclty", async () => {
    const { getByText } = wrapper();

    await waitFor(() => {
      const btn = getByText("Seguir para o pagamento");

      fireEvent.click(btn);
    });
    expect(Router.push).toBeCalled();
  });
});

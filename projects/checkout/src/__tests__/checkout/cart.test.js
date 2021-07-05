/**
 * @jest-environment jsdom
 */
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, waitFor } from "@testing-library/react";
import CartPage from "../../pages/checkout/cart";

jest.mock("@belezanaweb/store");

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

const setProductList = jest.fn();

const wrapper = () => render(<CartPage />);

describe("Tests about Cart Page", () => {
  it("Check if is loading correctly", () => {
    const { getByText } = wrapper();

    const btn = getByText(/Seguir para o pagamento/i);
    expect(btn).toBeInTheDocument();
  });

  it("Check if the items list is loading correclty", async () => {
    const { getByText } = wrapper();

    await waitFor(() => {
      const text = getByText(/Product name 02/i);
      expect(text).toBeInTheDocument();
    });
  });
});

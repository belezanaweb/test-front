/**
 * @jest-environment jsdom
 */
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, waitFor } from "@testing-library/react";
import ConfirmationPage from "../../pages/checkout/confirmation";

jest.mock("@belezanaweb/store", () => ({
  useUserState: jest.fn().mockImplementation(() => {
    return {
      cartResume: {
        items: [
          {
            imageSrc: "image src",
            imageAlt: "image alt",
            name: "Product Name",
          },
        ],
      },
      purchaseItemsResume: {
        subTotal: 283,
        shippingTotal: 17,
        discount: 15,
        total: 200,
      },
      creditCardDetails: {
        number: 1234,
        name: "Card Name",
        expirationDate: "12/2024",
      },
    };
  }),
  useUserDispatch: jest.fn().mockImplementation(() => {
    return jest.fn();
  }),
}));

const wrapper = () => render(<ConfirmationPage />);

describe("Tests about Confirmation Page", () => {
  it("Check if page loads correctly and the dynamic list item as well", async () => {
    const { getByText } = wrapper();

    await waitFor(() => {
      const text = getByText("Product Name");
      expect(text).toBeInTheDocument();
    });
  });
});

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProductsCartContainer from ".";
import { useDeviceSize } from "../../contexts/deviceSize";

const mockedData = [
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
        price: 225.9,
        originalPrice: 225.9,
        maxPrice: 243.9,
        percent: 7,
        discount: 18,
      },
    },
  },
];

jest.mock("../../contexts/deviceSize");
const hook = { useDeviceSize };
const STATE_SPY = jest.spyOn(hook, "useDeviceSize");

describe("ProductsCartContainer unit tests", () => {
  it("should show first product image, product price and product description", () => {
    STATE_SPY.mockReturnValue("default");

    render(<ProductsCartContainer items={mockedData} />);

    expect(screen.getByTestId("productImage")).toHaveAttribute(
      "src",
      mockedData[0].product.imageObjects[0].small
    );
    expect(
      screen.getByText(mockedData[0].product.priceSpecification.price)
    ).toBeInTheDocument();
    expect(screen.getByText(mockedData[0].product.name)).toBeInTheDocument();
  });

  it("should show small image when screen is small ", () => {
    STATE_SPY.mockReturnValue("small");
    render(<ProductsCartContainer items={mockedData} />);
    expect(
      expect(screen.getByTestId("productImage")).toHaveAttribute(
        "src",
        mockedData[0].product.imageObjects[0].small
      )
    );
  });

  it("should show small image when screen is medium", () => {
    STATE_SPY.mockReturnValue("medium");
    render(<ProductsCartContainer items={mockedData} />);

    expect(
      expect(screen.getByTestId("productImage")).toHaveAttribute(
        "src",
        mockedData[0].product.imageObjects[0].medium
      )
    );
  });
});

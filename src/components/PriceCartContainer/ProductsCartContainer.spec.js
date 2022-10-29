import React from "react";
import { render, screen } from "@testing-library/react";
import PriceCartContainer from ".";
import "@testing-library/jest-dom";

describe("ProductsCartContainer", () => {
  it("price, shipping, discount and total should be shown", () => {
    const productsPrice = "R$ 624,80";
    const shippingTotal = "R$ 5,30";
    const discount = "R$ 30,00";
    const total = "R$ 600,10";

    render(
      <PriceCartContainer
        discount={discount}
        shippingTotal={shippingTotal}
        total={total}
        subTotal={productsPrice}
      />
    );

    expect(screen.getByText(productsPrice)).toBeInTheDocument();
    expect(screen.getByText(shippingTotal)).toBeInTheDocument();
    expect(screen.getByText(discount)).toBeInTheDocument();
    expect(screen.getByText(total)).toBeInTheDocument();
  });
});

import { render, screen } from "@testing-library/react";
import PaymentData from "./index";
import BillingContextProvider from '../../contexts/BillingContext'
import React from "react";


describe("PaymentData", () => {
  test("should render component without crash", () => {
    render(<BillingContextProvider><PaymentData /></BillingContextProvider>);
    const element = screen.getByTestId('paymentData-test')
    expect(element).toBeInTheDocument();
  });
});
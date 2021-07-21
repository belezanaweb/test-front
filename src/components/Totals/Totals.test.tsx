import { render, screen } from "@testing-library/react";
import { userCart } from "../../constants/cart";
import Totals from "./index";
const request = require('isomorphic-fetch')

async function getCart() {
  return await (await request(userCart)).json()
}

describe("Totals", () => {
  test("should render component without crash", async () => {
    const cart = await getCart()
    render(<Totals {...cart} />);
    const product = screen.getByText(/produtos/i);
    expect(product).toBeInTheDocument();
  });
});
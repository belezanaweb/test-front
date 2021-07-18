import { render, screen } from "@testing-library/react";
import { userCart } from "../../constants/cart";
import Shelf from "./index";
const request = require('isomorphic-fetch')

async function getCart() {
  return await (await request(userCart)).json()
}

describe("Shelf", () => {
  test("should render component without crash", async () => {
    const cart = await getCart()
    render(<Shelf {...cart} />);
    const product = screen.getByTestId('product-shelf');
    expect(product).toBeInTheDocument();
  });
});
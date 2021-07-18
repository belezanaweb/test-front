import { render, screen } from "@testing-library/react";
import Totals from "./index";
const request = require('isomorphic-fetch')

async function getCart() {
  return await (await request('http://www.mocky.io/v2/5b15c4923100004a006f3c07')).json()
}

describe("Totals", () => {
  test("should render component without crash", async () => {
    const cart = await getCart()
    render(<Totals {...cart} />);
    const product = screen.getByText(/produtos/i);
    expect(product).toBeInTheDocument();
  });
});
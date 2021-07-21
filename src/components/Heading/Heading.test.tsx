import { render, screen } from "@testing-library/react";
import Heading from "./index";

describe("Heading", () => {
  test("should render component without crash", () => {
    render(<Heading>Produtos</Heading >);
    const heading = screen.getByText(/produtos/i);
    expect(heading).toBeInTheDocument();
  });
});
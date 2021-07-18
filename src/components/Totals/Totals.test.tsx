import { render, screen } from "@testing-library/react";
import Totals from "./index";

describe("Totals", () => {
  test("should render component without crash", () => {
    render(<Totals />);
    const title = screen.getByText(/produtos/i);
    expect(title).toBeInTheDocument();
  });
});
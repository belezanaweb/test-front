import { render ,screen } from "@testing-library/react";
import ProgressBar from "./index";

describe("ProgressBar", () => {
  test("should render component without crash", () => {
    render(<ProgressBar />);
    const heading = screen.getByText(/Sacola/i);
    expect(heading).toBeInTheDocument();
  });
});
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Hey from "../pages";

test("test", () => {
  const { container } = render(<Hey />);

  expect(container).toMatchSnapshot();
});

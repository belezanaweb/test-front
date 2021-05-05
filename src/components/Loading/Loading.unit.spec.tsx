import { render } from "@testing-library/react";
import React from "react";
import Loading from "./index";

describe("Loading", () => {
  it("should render a loading", () => {
    const { getByTestId } = render(<Loading data-testid="loading-test" />);

    expect(getByTestId("loading-test").tagName).toEqual("DIV");
  });

  it("should render loading", () => {
    const { getByTestId } = render(
      <Loading data-testid="loading-test" id="id-here">
        hello
      </Loading>
    );
    const element = getByTestId("loading-test");

    expect(element.tagName).toEqual("DIV");
    expect(element.getAttribute("id")).toEqual("id-here");
  });

  it("must contains text on children", () => {
    const value = "hello";
    const { getByTestId } = render(
      <Loading data-testid="loading-test">{value}</Loading>
    );

    const loading = getByTestId("loading-test");

    expect(loading.textContent).toEqual(value);
  });
});

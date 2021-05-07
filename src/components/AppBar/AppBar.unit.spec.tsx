import { render } from "@testing-library/react";
import React from "react";
import { AppBar, Theme } from "../index";

describe("AppBar", () => {
  it("should render a appbar", () => {
    const { getByTestId } = render(
      <Theme>
        <AppBar data-testid="appbar-test">test</AppBar>
      </Theme>
    );

    expect(getByTestId("appbar-test").tagName).toEqual("DIV");
  });

  it("must contains text on children", () => {
    const value = "hello";
    const { getByTestId } = render(
      <Theme>
        <AppBar data-testid="appbar-test">{value}</AppBar>
      </Theme>
    );

    const appbar = getByTestId("appbar-test");

    expect(appbar.textContent).toEqual(value);
  });
});

import { render } from "@testing-library/react";
import React from "react";
import { Typography, Theme } from "../index";

describe("Typography", () => {
  it("should render a typography", () => {
    const { getByTestId } = render(
      <Theme>
        <Typography data-testid="typography-test">test</Typography>
      </Theme>
    );

    expect(getByTestId("typography-test").tagName).toEqual("DIV");
  });

  it("must contains text on children", () => {
    const value = "hello";
    const { getByTestId } = render(
      <Theme>
        <Typography data-testid="typography-test">{value}</Typography>
      </Theme>
    );

    const typography = getByTestId("typography-test");

    expect(typography.textContent).toEqual(value);
  });
});

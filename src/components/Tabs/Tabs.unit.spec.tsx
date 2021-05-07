import { render } from "@testing-library/react";
import React from "react";
import { Tabs, Theme } from "../index";

describe("Tabs", () => {
  it("should render a tabs", () => {
    const { getByTestId } = render(
      <Theme>
        <Tabs data-testid="tabs-test">test</Tabs>
      </Theme>
    );

    expect(getByTestId("tabs-test").tagName).toEqual("DIV");
  });

  it("must contains text on children", () => {
    const value = "hello";
    const { getByTestId } = render(
      <Theme>
        <Tabs data-testid="tabs-test">{value}</Tabs>
      </Theme>
    );

    const tabs = getByTestId("tabs-test");

    expect(tabs.textContent).toEqual(value);
  });
});

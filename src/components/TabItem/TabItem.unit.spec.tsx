import { render } from "@testing-library/react";
import React from "react";
import { TabItem, Theme } from "../index";

describe("TabItem", () => {
  it("should render a tabitem", () => {
    const { getByTestId } = render(
      <Theme>
        <TabItem data-testid="tabitem-test">test</TabItem>
      </Theme>
    );

    expect(getByTestId("tabitem-test").tagName).toEqual("A");
  });

  it("must contains text on children", () => {
    const value = "hello";
    const { getByTestId } = render(
      <Theme>
        <TabItem data-testid="tabitem-test">{value}</TabItem>
      </Theme>
    );

    const tabitem = getByTestId("tabitem-test");

    expect(tabitem.textContent).toEqual(value);
  });
});

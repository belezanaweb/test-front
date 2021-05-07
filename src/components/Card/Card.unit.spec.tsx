import { render } from "@testing-library/react";
import React from "react";
import { Card, Theme } from "../index";

describe("Card", () => {
  it("should render a card", () => {
    const { getByTestId } = render(
      <Theme>
        <Card data-testid="card-test">test</Card>
      </Theme>
    );

    expect(getByTestId("card-test").tagName).toEqual("DIV");
  });

  it("must contains text on children", () => {
    const value = "hello";
    const { getByTestId } = render(
      <Theme>
        <Card data-testid="card-test">{value}</Card>
      </Theme>
    );

    const card = getByTestId("card-test");

    expect(card.textContent).toEqual(value);
  });
});

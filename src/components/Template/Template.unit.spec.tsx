import { render, screen } from "@testing-library/react";
import React from "react";
import { Template, Theme } from "../index";
import routeData from "react-router";

const mockLocation = {
  params: {},
  isExact: true,
  path: "",
  url: "",
};

describe("Template", () => {
  beforeEach(() => {
    jest.spyOn(routeData, "useRouteMatch").mockReturnValue(mockLocation);
  });

  it("should render a template", () => {
    render(
      <Theme>
        <Template data-testid="template-test">teste</Template>
      </Theme>
    );

    expect(screen.getByText(new RegExp("teste", "i"))).toBeInTheDocument();
  });
});

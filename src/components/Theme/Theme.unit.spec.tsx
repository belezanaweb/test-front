import React from "react";
import { render, screen } from "@testing-library/react";
import { Theme } from "..";

const renderTheme = () => {
  render(
    <Theme>
      <div>teste</div>
    </Theme>
  );
};

describe("Theme", () => {
  it("should render theme", async () => {
    renderTheme();

    expect(screen.getByText(/teste/i)).toBeInTheDocument();
  });
});

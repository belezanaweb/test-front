import { render, screen } from "@testing-library/react";
import Input from "./index";

describe("Input", () => {
    test("should render component without crash", () => {
        render(<Input />);
        const input = screen.getByTestId('inputTest');
        expect(input).toBeInTheDocument();
    });
});
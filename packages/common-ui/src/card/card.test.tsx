import { render, screen } from "../test/utils";
import { Card } from "./card";

describe('CardComponent', () => {
  let component: HTMLElement | null

  beforeEach(() => {
    render(<Card>card test</Card>)
    component = screen.queryByTestId('common-ui-card')
  })

  it('should render component correctly', () => {
    expect(component).toBeInTheDocument()
  });
});
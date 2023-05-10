import Section from '.';
import { screen } from '@testing-library/react';
import { customRender } from '_test/render';

describe('Components :: Section', () => {
  it('should be render element align center', () => {
    customRender(<Section align='center'><small>center</small></Section>);

    const element = screen.getByText('center');
    const section = screen.getByTestId('section');
    const styles = getComputedStyle(section);

    expect(element).toBeInTheDocument();
    expect(styles.alignItems).toEqual('center');
  });

  it('should be render element align start', () => {
    customRender(<Section align='start'><small>start</small></Section>);

    const element = screen.getByText('start');
    const section = screen.getByTestId('section');
    const styles = getComputedStyle(section);

    expect(element).toBeInTheDocument();
    expect(styles.alignItems).toEqual('start');
  });

  it('should be render element align end', () => {
    customRender(<Section align='end'><small>end</small></Section>);

    const element = screen.getByText('end');
    const section = screen.getByTestId('section');
    const styles = getComputedStyle(section);

    expect(element).toBeInTheDocument();
    expect(styles.alignItems).toEqual('end');
  });
});

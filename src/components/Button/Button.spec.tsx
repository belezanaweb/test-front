import Button from '.';
import { screen } from '@testing-library/react';
import { customRender } from '_test/render';

describe('Components :: Button', () => {
  it('should be render primary button', () => {
    customRender(<Button color='primary' />);

    const element = screen.getByRole('button');
    const styles = getComputedStyle(element);

    expect(styles.color).toEqual('rgb(255, 255, 255)');
    expect(styles.backgroundColor).toEqual('rgb(146, 34, 220)');
  });

  it('should be render secondary button', () => {
    customRender(<Button color='secondary' />);

    const element = screen.getByRole('button');
    const styles = getComputedStyle(element);

    expect(styles.color).toEqual('rgb(255, 255, 255)');
    expect(styles.backgroundColor).toEqual('rgb(0, 0, 0)');
  });

  it('should be render danger button', () => {
    customRender(<Button color='danger' />);

    const element = screen.getByRole('button');
    const styles = getComputedStyle(element);

    expect(styles.color).toEqual('rgb(0, 0, 0)');
    expect(styles.backgroundColor).toEqual('rgb(222, 22, 22)');
  });
});

import Typography from '.';
import { screen } from '@testing-library/react';
import { customRender } from '_test/render';

describe('Components :: Text', () => {
  it('should be render menu text', () => {
    customRender(<Typography type='Menu' value='menu' />);

    const element = screen.getByTestId('typography');
    const styles = getComputedStyle(element);

    expect(styles.color).toEqual('rgb(0, 0, 0)');
    expect(styles.fontSize).toEqual('14px');
    expect(styles.fontWeight).toEqual('400');
    expect(styles.fontFamily).toEqual('Arial');
    expect(styles.letterSpacing).toEqual('0.27px');
    expect(styles.textDecoration).toEqual('');
  });

  it('should be render menu disabled text', () => {
    customRender(<Typography type='MenuDisabled' value='menu disabled' />);

    const element = screen.getByTestId('typography');
    const styles = getComputedStyle(element);

    expect(styles.color).toEqual('rgb(155, 155, 155)');
    expect(styles.fontSize).toEqual('14px');
    expect(styles.fontWeight).toEqual('400');
    expect(styles.fontFamily).toEqual('Arial');
    expect(styles.letterSpacing).toEqual('0.27px');
    expect(styles.textDecoration).toEqual('');
  });
});

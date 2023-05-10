import Typography from '.';
import { screen } from '@testing-library/react';
import { customRender } from '_test/render';

describe('Components :: Text', () => {
  it('should be render value in format currency', () => {
    customRender(<Typography type='Value' value={12.34} currency />);

    const value = screen.getByText(/R\$ 12,34/i);
    expect(value).toBeInTheDocument();
  });

  it('should be render info text', () => {
    customRender(<Typography type='Info' value='info' />);

    const element = screen.getByTestId('typography');
    const styles = getComputedStyle(element);

    expect(styles.color).toEqual('rgb(81, 81, 81)');
    expect(styles.fontSize).toEqual('14px');
    expect(styles.fontWeight).toEqual('700');
    expect(styles.fontFamily).toEqual('Arial');
    expect(styles.letterSpacing).toEqual('0.27px');
    expect(styles.textDecoration).toEqual('');
  });

  it('should be render label text', () => {
    customRender(<Typography type='Label' value='label' />);

    const element = screen.getByTestId('typography');
    const styles = getComputedStyle(element);

    expect(styles.color).toEqual('rgb(0, 0, 0)');
    expect(styles.fontSize).toEqual('14px');
    expect(styles.fontWeight).toEqual('400');
    expect(styles.fontFamily).toEqual('Arial');
    expect(styles.letterSpacing).toEqual('0.27px');
    expect(styles.textDecoration).toEqual('');
  });

  it('should be render label strong text', () => {
    customRender(<Typography type='LabelStrong' value='label strong' />);

    const element = screen.getByTestId('typography');
    const styles = getComputedStyle(element);

    expect(styles.color).toEqual('rgb(0, 0, 0)');
    expect(styles.fontSize).toEqual('16px');
    expect(styles.fontWeight).toEqual('700');
    expect(styles.fontFamily).toEqual('Arial');
    expect(styles.letterSpacing).toEqual('0.27px');
    expect(styles.textDecoration).toEqual('');
  });

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

  it('should be render paragraph text', () => {
    customRender(<Typography type='Paragraph' value='paragraph' />);

    const element = screen.getByTestId('typography');
    const styles = getComputedStyle(element);

    expect(styles.color).toEqual('rgb(0, 0, 0)');
    expect(styles.fontSize).toEqual('12px');
    expect(styles.fontWeight).toEqual('400');
    expect(styles.fontFamily).toEqual('Arial');
    expect(styles.letterSpacing).toEqual('0.27px');
    expect(styles.textDecoration).toEqual('');
  });

  it('should be render title text', () => {
    customRender(<Typography type='Title' value='title' />);

    const element = screen.getByTestId('typography');
    const styles = getComputedStyle(element);

    expect(styles.color).toEqual('rgb(0, 0, 0)');
    expect(styles.fontSize).toEqual('20px');
    expect(styles.fontWeight).toEqual('400');
    expect(styles.fontFamily).toEqual('Arial');
    expect(styles.letterSpacing).toEqual('0.27px');
    expect(styles.textDecoration).toEqual('');
  });

  it('should be render title upper text', () => {
    customRender(<Typography type='TitleUpper' value='title upper' />);

    const element = screen.getByTestId('typography');
    const styles = getComputedStyle(element);

    expect(styles.color).toEqual('rgb(0, 0, 0)');
    expect(styles.fontSize).toEqual('22px');
    expect(styles.fontWeight).toEqual('400');
    expect(styles.fontFamily).toEqual('Arial');
    expect(styles.letterSpacing).toEqual('0.27px');
    expect(styles.textDecoration).toEqual('');
  });

  it('should be render value text', () => {
    customRender(<Typography type='Value' value='value' />);

    const element = screen.getByTestId('typography');
    const styles = getComputedStyle(element);

    expect(styles.color).toEqual('rgb(0, 0, 0)');
    expect(styles.fontSize).toEqual('14px');
    expect(styles.fontWeight).toEqual('400');
    expect(styles.fontFamily).toEqual('Helvetica Neue');
    expect(styles.letterSpacing).toEqual('0.27px');
    expect(styles.textDecoration).toEqual('');
  });

  it('should be render value bold text', () => {
    customRender(<Typography type='ValueBold' value='value bold' />);

    const element = screen.getByTestId('typography');
    const styles = getComputedStyle(element);

    expect(styles.color).toEqual('rgb(0, 0, 0)');
    expect(styles.fontSize).toEqual('14px');
    expect(styles.fontWeight).toEqual('700');
    expect(styles.fontFamily).toEqual('Helvetica Neue');
    expect(styles.letterSpacing).toEqual('0.27px');
    expect(styles.textDecoration).toEqual('');
  });

  it('should be render value disabled text', () => {
    customRender(<Typography type='ValueDisabled' value='value disabled' />);

    const element = screen.getByTestId('typography');
    const styles = getComputedStyle(element);

    expect(styles.color).toEqual('rgb(155, 155, 155)');
    expect(styles.fontSize).toEqual('14px');
    expect(styles.fontWeight).toEqual('400');
    expect(styles.fontFamily).toEqual('Helvetica Neue');
    expect(styles.letterSpacing).toEqual('0.27px');
    expect(styles.textDecoration).toEqual('line-through');
  });

  it('should be render value primary text', () => {
    customRender(<Typography type='ValuePrimary' value='value primary' />);

    const element = screen.getByTestId('typography');
    const styles = getComputedStyle(element);

    expect(styles.color).toEqual('rgb(146, 34, 220)');
    expect(styles.fontSize).toEqual('14px');
    expect(styles.fontWeight).toEqual('700');
    expect(styles.fontFamily).toEqual('Helvetica Neue');
    expect(styles.letterSpacing).toEqual('0.27px');
    expect(styles.textDecoration).toEqual('');
  });

  it('should be render value strong text', () => {
    customRender(<Typography type='ValueStrong' value='value strong' />);

    const element = screen.getByTestId('typography');
    const styles = getComputedStyle(element);

    expect(styles.color).toEqual('rgb(0, 0, 0)');
    expect(styles.fontSize).toEqual('16px');
    expect(styles.fontWeight).toEqual('700');
    expect(styles.fontFamily).toEqual('Helvetica Neue');
    expect(styles.letterSpacing).toEqual('0.27px');
    expect(styles.textDecoration).toEqual('');
  });
});

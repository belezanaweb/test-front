const colors = {
  primary: '#000000',
  secondary: '#515151',
  emphasis: '#9222DC',
  error: '#DE1616',
};

const sizes = {
  small: '14px',
  regular: '16px',
  large: '18px',
};

const weights = {
  bold: '700',
  regular: '400',
};

const Text = props => {
  const {
    children,
    color = 'primary',
    size = 'regular',
    weight = 'regular',
    component: Component = 'p',
  } = props;

  const styles = {
    color: colors[color] || color,
    fontSize: sizes[size] || size,
    fontWeight: weights[weight],
  };

  return <Component style={styles}>{children}</Component>;
};

export default Text;

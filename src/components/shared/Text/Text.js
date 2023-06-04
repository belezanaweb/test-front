const colors = {
  primary: '#000000',
  secondary: '#515151',
  emphasis: '#9222DC',
  error: '#DE1616',
};

const sizes = {
  small: '12px',
  regular: '14px',
  large: '16px',
  xlarge: '20px',
};

const weights = {
  bold: '700',
  regular: '400',
};

const decorations = {
  none: 'none',
  scratch: 'line-through',
};

const Text = props => {
  const {
    children,
    color = 'primary',
    size = 'regular',
    weight = 'regular',
    decoration = 'none',
    component: Component = 'p',
    className,
  } = props;

  const styles = {
    color: colors[color],
    fontSize: sizes[size],
    fontWeight: weights[weight],
    textDecoration: decorations[decoration],
  };

  return (
    <Component className={className} style={styles}>
      {children}
    </Component>
  );
};

export default Text;

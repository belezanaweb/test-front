import { colors, decorations, sizes, weights } from './utils';

const Text = props => {
  const {
    children,
    color = 'primary',
    size = 'medium',
    weight = 'normal',
    decoration = 'none',
    component: Component = 'p',
    className,
  } = props;

  const styles = [
    colors[color],
    sizes[size],
    weights[weight],
    decorations[decoration],
  ];

  return (
    <Component className={`${className} ${styles.join(' ')}`}>
      {children}
    </Component>
  );
};

export default Text;

import clsx from 'clsx';
import useStyles from './useStyles';

const Button = ({ children, onClick, disabled, type }) => {
  const classes = useStyles();

  return (
    <button
      className={clsx(classes.root, { [classes.disabled]: disabled })}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;

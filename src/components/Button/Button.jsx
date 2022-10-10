import useStyles from './useStyles';

const Button = ({ children, onClick }) => {
  const classes = useStyles();

  return (
    <button className={classes.root} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

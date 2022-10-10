import clsx from 'clsx';
import useStyles from './useStyles';

const Card = ({ children, className }) => {
  const classes = useStyles();

  return <div className={clsx(classes.root, className)}>{children}</div>;
};

export default Card;

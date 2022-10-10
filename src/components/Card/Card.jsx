import clsx from 'clsx';
import useStyles from './useStyles';

const Card = ({ children, className, classes }) => {
  const innerClasses = useStyles();

  return <div className={clsx(innerClasses.root, classes?.root, className)}>{children}</div>;
};

export default Card;

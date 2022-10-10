import useStyles from './useStyles';

const Fallback = () => {
  useStyles();

  return <div className="loader"></div>;
};

export default Fallback;

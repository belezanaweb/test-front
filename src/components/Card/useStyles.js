import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.common.white,
    borderRadius: '3px',
    boxShadow: '1px 1px 5px 0 rgba(0,0,29,0.22)'
  }
}));

export default useStyles;

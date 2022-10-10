import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles((theme) => ({
  nav: {
    position: 'relative',
    width: '100%',
    backgroundColor: theme.palette.common.white,
    boxShadow: '1px 1px 5px 0 rgba(0,0,29,0.22)'
  },
  list: {
    display: 'flex',
    padding: '12px 30px',
    '& > li + li': {
      marginLeft: '38px'
    }
  },
  link: {
    ...theme.typography.medium,
    fontWeight: '700',
    color: theme.palette.grey.main,
    '&$active': {
      color: theme.palette.primary.main
    }
  },
  active: {},
  content: {
    padding: '10px',
    backgroundColor: theme.palette.background.main,
    minHeight: '100vh'
  }
}));

export default useStyles;

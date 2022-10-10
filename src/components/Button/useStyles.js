import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles((theme) => ({
  root: {
    ...theme.typography.extraLarge,
    minWidth: '100%',
    padding: '18px 0',
    color: '#FFF',
    backgroundColor: theme.palette.primary.main,
    boxShadow: `inset 0 -3px 0 0 ${theme.palette.primary.dark}, 0 2px 4px 0 rgba(0,0,0,0.25)`,
    borderRadius: '3px',
    '&:hover': {
      boxShadow: 'none',
      backgroundColor: theme.palette.primary.dark
    },
    '&:active': {
      boxShadow: `inset 0 -3px 0 0 ${theme.palette.primary.dark}, 0 2px 4px 0 rgba(0,0,0,0.25)`,
      backgroundColor: theme.palette.primary.dark
    }
  },
  disabled: {
    backgroundColor: theme.palette.grey.dark
  }
}));

export default useStyles;

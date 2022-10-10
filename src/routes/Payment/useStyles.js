import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  card: { padding: '12px', paddingBottom: '24px' },
  form: {
    '&>div+div, &>div+button': {
      marginTop: '20px'
    }
  },
  title: {
    ...theme.typography.large,
    fontWeight: 700,
    color: theme.palette.grey.dark,
    marginLeft: '12px',
    marginBottom: '5px'
  },
  label: {
    ...theme.typography.small,
    color: theme.palette.grey.main,
    fontWeight: 700
  },
  input: {
    ...theme.typography.input,
    padding: '12px',
    borderRadius: '3px',
    boxShadow: 'inset 0 1px 2px 0 rgba(0,0,0,0.2)',
    '&.is-invalid': {
      paddingRight: 'revert',
      backgroundImage: 'none',
      borderColor: theme.palette.error.main,
      '&:focus': {
        borderColor: theme.palette.error.main,
        boxShadow: 'none'
      }
    },
    '&:focus': {
      borderColor: theme.palette.info.main,
      boxShadow: 'none'
    },
    '&::placeholder': {
      ...theme.typography.input,
      color: theme.palette.grey.light
    }
  },
  cvv: {
    letterSpacing: '-1px'
  },
  errorText: {
    ...theme.typography.small,
    color: theme.palette.error.main
  }
}));

export default useStyles;

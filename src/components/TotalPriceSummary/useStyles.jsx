import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles((theme) => ({
  labeledValue: {
    display: 'flex',
    justifyContent: 'space-between',
    ...theme.typography.large,
    '& + &': {
      marginTop: '8px'
    },
    '&:nth-last-child(1)': {
      marginTop: '16px',
      fontWeight: 700
    },
    '&:nth-last-child(2)': {
      color: theme.palette.primary.main
    }
  }
}));

export default useStyles;

import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles((theme) => ({
  root: {
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
  card: { padding: '12px' },
  feedbackContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  feedbackImage: {
    position: 'relative',
    display: 'inline-block',
    height: '30px',
    width: '30px',
    padding: '10px',
    borderRadius: '50%',
    border: `1px solid ${theme.palette.primary.light}`,
    marginBottom: '12px',
    '&::before': {
      position: 'absolute',
      left: 0,
      top: '42%',
      height: '30%',
      width: '1px',
      backgroundColor: theme.palette.primary.light,
      borderRadius: '3px',
      content: "''",
      transform: 'translateX(12px) rotate(-45deg)',
      transformOrigin: 'left bottom'
    },
    '&::after': {
      position: 'absolute',
      left: '0',
      bottom: '30%',
      height: '1px',
      width: '60%',
      backgroundColor: theme.palette.primary.light,
      borderRadius: '3px',
      content: "''",
      transform: 'translateX(12px) rotate(-45deg)',
      transformOrigin: 'left bottom'
    }
  },
  feedbackMessage: {
    ...theme.typography.large,
    fontWeight: 700,
    color: theme.palette.primary.light
  }
}));

export default useStyles;

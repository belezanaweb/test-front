import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles((theme) => ({
  root: {
    '&>div+div, &>div+button': {
      marginTop: '20px'
    }
  }
}));

export default useStyles;

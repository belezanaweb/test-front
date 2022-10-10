import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles((theme) => ({
  root: {
    '&>div+div': {
      marginTop: '20px'
    }
  }
}));

export default useStyles;

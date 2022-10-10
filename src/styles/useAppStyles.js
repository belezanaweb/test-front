import { createUseStyles } from 'react-jss';
import reset from './reset';

const useAppStyles = createUseStyles((theme) => ({
  '@global': {
    ...reset,
    body: {
      fontFamily: theme.typography.font.family,
      '-webkit-font-smoothing': 'antialiased',
      '-moz-osx-font-smoothing': 'grayscale',
      color: theme.palette.common.black
    }
  }
}));

export default useAppStyles;

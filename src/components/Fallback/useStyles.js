import { createUseStyles } from 'react-jss';

/**
 * Animation created by lukehaas and converted to JSS by matheus solha
 * https://projects.lukehaas.me/css-loaders/
 */

const useStyles = createUseStyles((theme) => ({
  '@global': {
    '.loader, .loader:before, .loader:after': {
      borderRadius: '50%',
      width: '2.5em',
      height: '2.5em',
      webkitAnimationFillMode: 'both',
      animationFillMode: 'both',
      webkitAnimation: 'load 1.8s infinite ease-in-out',
      animation: 'load 1.8s infinite ease-in-out'
    },
    '.loader': {
      color: theme.palette.primary.main,
      fontSize: '10px',
      margin: '80px auto',
      position: 'relative',
      webkitTransform: 'translateZ(0)',
      msTransform: 'translateZ(0)',
      transform: 'translateZ(0)',
      webkitAnimationDelay: '-0.16s',
      animationDelay: '-0.16s'
    },
    '.loader:before, .loader:after': {
      content: "''",
      position: 'absolute',
      top: '0'
    },
    '.loader:before': {
      left: '-3.5em',
      webkitAnimationDelay: '-0.32s',
      animationDelay: '-0.32s'
    },
    '.loader:after': {
      left: '3.5em'
    },
    '@keyframes load': {
      '0%, 80%, 100%': {
        boxShadow: '0 2.5em 0 -1.3em'
      },
      '40%': {
        boxShadow: '0 2.5em 0 0'
      }
    }
  }
}));

export default useStyles;

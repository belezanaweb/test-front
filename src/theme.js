import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#FF7800',
      main: '#FF6C00',
      dark: '#D45A00'
    },
    secondary: {
      light: '#CCC',
      main: '#212122',  
     },
    },
    typography: {
        fontFamily: 'Arimo',
        fontSize: 13,
    },
    overrides: {
      MuiContainer: {
        root: {
          background: '#EEE'
        },
      },
      MuiButton:{
        root:{
          color: '#fff !important',
          fontSize: 20,
          width: '100%'
        }

      }
    },
});

export default theme;
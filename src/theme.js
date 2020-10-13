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
      dark: '#000000'
     },
    },
    grey:{
      200: '#EEE'
    },
    shape:{
      borderRadius: 3
    },
    typography: {
        fontFamily: 'Helvetica',
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
          width: '100%',
          boxShadow: 'inset 0 -3px 0 0 #D45A00, 0 2px 4px 0 rgba(0,0,0,0.25)'
        }

      }
    },
});

export default theme;
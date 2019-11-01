import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    pallete:{
        primary: '#FF6C00'
    },
    typography:{
        bold: {
            fontWeight: 'bold'
        }
    }
});
theme.typography.body1 = {
    color: '#888',
    fontSize: 14
};

export default theme;
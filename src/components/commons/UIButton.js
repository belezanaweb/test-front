import React, {useState, useEffect} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Color from 'color';

const BootstrapButton = withStyles(theme=>({
  root: {
    boxShadow: '0 2px 4px 0 rgba(0,0,0,0.3)',
    fontSize: 16,
    width: `calc(100% - ${theme.spacing(1)*2}px)`,
    padding: '14px 16px 12px 16px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: theme.pallete.primary,
    borderColor: Color(theme.pallete.primary).darken(0.15).string(),
    borderWidth: '0 0 3px 0',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: Color(theme.pallete.primary).darken(0.15).string(),
      borderColor: Color(theme.pallete.primary).darken(0.15).string(),
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: theme.pallete.primary,
      borderColor: theme.pallete.primary,
    },
    '&:focus': {
      boxShadow: theme.pallete.primary,
      backgroundColor: theme.pallete.primary,
      borderColor: theme.pallete.primary,
    },
    '&[disabled]': {
      boxShadow: 'none',
      borderColor: 'transparent',
    },
  },
}))(Button);

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
}));


function UIButton( props ){
  const classes = useStyles();
  const history = useHistory();
  const [disabled, setDisabled] = useState( props.disabled || false );

  const linkTo = ( target ) => {
    history.push( target );
  };

  useEffect(()=>{
    setDisabled(!!props.disabled);
  }, [props.disabled]);

  return (
    <React.Fragment>
      <BootstrapButton 
        disabled={disabled}
        variant="contained" 
        color="primary" 
        onClick={(e)=>{
          if(props.onClick) props.onClick(e);
          else linkTo(props.linkTo);
        }}
        className={classes.margin}>
        {props.children || 'Button'}
      </BootstrapButton>
    </React.Fragment>
  );
}
    
export default UIButton;
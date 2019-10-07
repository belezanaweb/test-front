import * as React from 'react';
import { createJssStyle } from '../helper/styler';
// ---------------------------------------------------------------------
// --- STYLE -----------------------------------------------------------
// ---------------------------------------------------------------------
const { classes } = createJssStyle(theme => ({
  button: {
    cursor: 'pointer',
    height: 60,
    width: '100%',
    borderRadius: 4,
    backgroundColor: theme.primaryColor.main,
    boxShadow: `inset 0 -4px 0 0 ${theme.primaryColor.dark}, 0 2px 4px 0 rgba(0,0,0,.25)`,
    color: theme.primaryColor.contrastText,
    fontSize: 20,
    fontWeight: 700,
    textAlign: 'center',
    border: 'none',
    textTransform: 'uppercase',
    '&:hover': {
      backgroundColor: theme.primaryColor.dark,
      boxShadow: 'none'
    },
    '&:disabled': {
      backgroundColor: '#bbb',
      boxShadow: `inset 0 -4px 0 0 #aaa, 0 2px 4px 0 rgba(0,0,0,.25)`,
    }
  }
}));
// ---------------------------------------------------------------------
// --- COMPONENT -------------------------------------------------------
// ---------------------------------------------------------------------
export class Button extends React.Component<Props> {
  render() {
    const { disabled } = this.props;
    return (
      <button className={classes.button} disabled={disabled}>
        {this.props.children}
      </button>
    );
  }
}

interface Props {
  disabled?: boolean;
}

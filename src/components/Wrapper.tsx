import * as React from 'react';
import { createJssStyle } from '../helper/styler';
// ---------------------------------------------------------------------
// --- STYLE -----------------------------------------------------------
// ---------------------------------------------------------------------
const { classes } = createJssStyle(_ => ({
  wrapper: {
    '& > *': {
      marginBottom: 20
    }
  }
}));
// ---------------------------------------------------------------------
// --- COMPONENT -------------------------------------------------------
// ---------------------------------------------------------------------
export class Wrapper extends React.Component {
  render() {
    return <div className={classes.wrapper}>{this.props.children}</div>;
  }
}

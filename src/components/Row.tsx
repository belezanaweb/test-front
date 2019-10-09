import * as React from 'react';
import { createJssStyle } from '../helper/styler';
// ---------------------------------------------------------------------
// --- STYLE -----------------------------------------------------------
// ---------------------------------------------------------------------
const { classes } = createJssStyle(_ => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between'
  }
}));
// ---------------------------------------------------------------------
// --- COMPONENT -------------------------------------------------------
// ---------------------------------------------------------------------
export class Row extends React.Component {
  render() {
    return <div className={classes.root}>{this.props.children}</div>;
  }
}

import * as React from 'react';
import { createJssStyle } from '../helper/styler';
// ---------------------------------------------------------------------
// --- STYLE -----------------------------------------------------------
// ---------------------------------------------------------------------
const { classes } = createJssStyle((theme) => ({
  title: {
    color: theme.secondaryColor.main,
    fontSize: 14,
    textTransform: 'uppercase',
    padding: 0,
    marginLeft: 11,
    fontWeight: 'bold',
  }
}));
// ---------------------------------------------------------------------
// --- COMPONENT -------------------------------------------------------
// ---------------------------------------------------------------------
export class Title extends React.Component {
  render() {
    return <div className={classes.title}>{this.props.children}</div>;
  }
}

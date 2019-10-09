import * as React from 'react';
import { createJssStyle } from '../helper/styler';
// ---------------------------------------------------------------------
// --- STYLE -----------------------------------------------------------
// ---------------------------------------------------------------------
const { classes } = createJssStyle(_ => ({
  root: {
    display: 'flex',
    // justifyContent: 'space-between',
    '& > *': {
      marginRight: 16
    },
    '@media (max-width: 1024px)': {
      flexDirection: 'column',
      '& > *': {
        marginRight: 0,
        marginBottom: 16
      }
    }
  }
}));
// ---------------------------------------------------------------------
// --- COMPONENT -------------------------------------------------------
// ---------------------------------------------------------------------
export class ResponsivePanel extends React.Component {
  render() {
    return <div className={classes.root}>{this.props.children}</div>;
  }
}

import * as React from 'react';
import { createJssStyle } from '../helper/styler';
// ---------------------------------------------------------------------
// --- STYLE -----------------------------------------------------------
// ---------------------------------------------------------------------
const { classes } = createJssStyle(_ => ({
  card: {
    boxShadow: '1px 1px 5px 0 rgba(0,0,29,0.22)',
    background: '#fff',
    padding: 13,
    borderRadius: 3,
    '& > *': {
      marginBottom: 13,
      '&:last-child': {
        marginBottom: 0
      }
    }
  }
}));
// ---------------------------------------------------------------------
// --- COMPONENT -------------------------------------------------------
// ---------------------------------------------------------------------
export class Card extends React.Component {
  render() {
    return <div className={classes.card}>{this.props.children}</div>;
  }
}

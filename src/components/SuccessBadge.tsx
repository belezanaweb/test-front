import * as React from 'react';
import { createJssStyle } from '../helper/styler';
// tslint:disable: max-line-length
// ---------------------------------------------------------------------
// --- STYLE -----------------------------------------------------------
// ---------------------------------------------------------------------
const { classes } = createJssStyle(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: 12
  },
  badge: {
    border: `2px solid ${theme.primaryColor.main}`,
    padding: '10px 8px',
    borderRadius: 30
  },
  label: {
    color: '#ff7800',
    fontSize: 14,
    margin: '12px 0 4px 0',
    fontWeight: 'bold'
  }
}));
// ---------------------------------------------------------------------
// --- COMPONENT -------------------------------------------------------
// ---------------------------------------------------------------------
export class SuccessBadge extends React.Component {
  render() {
    return (
      <div className={classes.root}>
        <img
          className={classes.badge}
          alt="success"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAA2UlEQVQ4T62S2xGCQAxFTypROtFOpIv8KX/bhXQCnYiVxMkOMOvycAT2jyFzkvsQDnqmXIBGjuCZcgZeQHcU0PwwCchuoCkNRLlXCbS7gKY8gRtQSqCOV2710JQHcE9hm4EJrJIQweOT/ux3/mPpctMo0aXWEijzOQcOp0+25cND14BWAte5pdHDBOrGOribGzbF69FJoFhSMIaSSHGYQ2NqwzONxfUCF0sLJ6H0kjw579VoQVKP2LW1ZszWJgFUwCnv2t/AzFf//BnYsGS12H1YHsKXn2sXfgDNlU/cHwExagAAAABJRU5ErkJggg=="
        />
        <p className={classes.label}>COMPRA EFETUADA COM SUCESSO</p>
      </div>
    );
  }
}

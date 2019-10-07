import * as React from 'react';
import clsx from 'clsx';
import { createJssStyle } from '../helper/styler';
import { Link } from 'react-router-dom';
import { Connection, Inject } from 'exredux';
import { modelStore } from '../service/modelStore';
import { RouterModel } from '../service/models/RouterModel';
// ---------------------------------------------------------------------
// --- STYLE -----------------------------------------------------------
// ---------------------------------------------------------------------
const { classes } = createJssStyle(theme => ({
  pageHeader: {
    boxShadow: '1px 1px 5px 0 rgba(0,0,29,0.22)',
    padding: '15px 10px',
    background: '#fff',
    display: 'flex',
    justifyContent: 'space-around'
  },
  pageLinks: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 13,
    color: theme.links.main,
    cursor: 'pointer',
    textDecoration: 'none',
    '&:hover': {
      color: theme.links.hover
    }
  },
  activeLink: {
    color: theme.primaryColor.main,
    '&:hover': {
      color: theme.primaryColor.main
    }
  }
}));
// ---------------------------------------------------------------------
// --- COMPONENT -------------------------------------------------------
// ---------------------------------------------------------------------
class Props {
  @Inject router?: RouterModel;
}

@Connection({
  modelStore,
  props: Props
})
export class Header extends React.Component<Props> {
  render() {
    const links = [
      { link: '/cart', label: 'sacola' },
      { link: '/payment', label: 'pagamento', disabled: true },
      { link: '/success', label: 'confirmação', disabled: true }
    ];

    const { router } = this.props;

    return (
      <div className={classes.pageHeader}>
        {links.map((item, index) =>
          !item.disabled ? (
            <Link
              key={index}
              to={item.link}
              className={clsx(classes.pageLinks, {
                [classes.activeLink]: item.link === router.pathname
              })}
            >
              {item.label}
            </Link>
          ) : (
            <div
              key={index}
              className={clsx(classes.pageLinks, {
                [classes.activeLink]: item.link === router.pathname
              })}
            >
              {item.label}
            </div>
          )
        )}
      </div>
    );
  }
}

import clsx from 'clsx';
import { useEffect } from 'react';
import { Link, Outlet, useNavigate, useResolvedPath } from 'react-router-dom';

import useStyles from './useStyles';

const Root = () => {
  const navigate = useNavigate();
  const { pathname } = useResolvedPath();
  const classes = useStyles();

  useEffect(() => {
    if (pathname === '/') {
      navigate('/sacola');
    }
  }, [navigate, pathname]);

  return (
    <>
      <nav className={classes.nav}>
        <ul className={classes.list}>
          <li
            className={clsx(classes.link, {
              [classes.active]: pathname === '/sacola'
            })}
          >
            SACOLA
          </li>
          <li
            className={clsx(classes.link, {
              [classes.active]: pathname === '/pagamento'
            })}
          >
            PAGAMENTO
          </li>
          <li
            className={clsx(classes.link, {
              [classes.active]: pathname === '/confirmacao'
            })}
          >
            CONFIRMAÇÃO
          </li>
        </ul>
      </nav>
      <div className={classes.content} id="content">
        <Outlet />
      </div>
    </>
  );
};

export default Root;

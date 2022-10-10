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
          <li>
            <Link
              className={clsx(classes.link, {
                [classes.active]: pathname === '/sacola'
              })}
              to="sacola"
            >
              SACOLA
            </Link>
          </li>
          <li>
            <Link
              className={clsx(classes.link, {
                [classes.active]: pathname === '/pagamento'
              })}
              to="pagamento"
            >
              PAGAMENTO
            </Link>
          </li>
          <li>
            <Link
              className={clsx(classes.link, {
                [classes.active]: pathname === '/confirmacao'
              })}
              to="confirmacao"
            >
              CONFIRMAÇÃO
            </Link>
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

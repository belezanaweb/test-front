import clsx from 'clsx';
import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Outlet, useNavigate, useResolvedPath } from 'react-router-dom';

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
        <Container>
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
        </Container>
      </nav>
      <div className={classes.content} id="content">
        <Container>
          <Outlet />
        </Container>
      </div>
    </>
  );
};

export default Root;

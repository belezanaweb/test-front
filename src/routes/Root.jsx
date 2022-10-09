import { Outlet } from 'react-router-dom';

const Root = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <a href="sacola">Sacola</a>
          </li>
          <li>
            <a href="pagamento">Pagamento</a>
          </li>
          <li>
            <a href="confirmacao">Confirmação</a>
          </li>
        </ul>
      </nav>
      <div id="content">
        <Outlet />
      </div>
    </>
  );
};

export default Root;

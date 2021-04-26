import React from 'react';

const NavBar = ({ active }) => {
  return (
    <>
      <div className="nav-bar">
        <p className={active === 'cart' ? 'header-active' : 'header-inactive'} to="/cart">
          SACOLA
        </p>
        <p className={active === 'pay' ? 'header-active' : 'header-inactive'} to="/pay">
          PAGAMENTO
        </p>
        <p className={active === 'success' ? 'header-active' : 'header-inactive'} to="/success">
          CONFIRMAÇÃO
        </p>
      </div>
      <style jsx="true">{`
        .nav-bar {
          display: flex;
          flex-direction: row;
          background-color: #fff;
          justify-content: space-around;
          box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);
          height: 40px;
          width: 100%;
        }
        .header-active,
        .header-inactive {
          font-size: 13px;
          font-weight: 700;
          line-height: 16px;
          letter-spacing: 0.01em;
          text-align: center;
          text-decoration: none;
          margin: 13px 0 13px 0;
        }
        .header-active {
          color: #ff7800;
        }
        .header-inactive {
          color: #ccc;
        }
      `}</style>
    </>
  );
};

export default NavBar;

import React from 'react';

const Container = (props) => {
  return (
    <>
      <div>
        <p className="title">{props.title.toUpperCase()}</p>
        <div className="content-box">{props.children}</div>
      </div>
      <style jsx="true">{`
        .content-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          max-width: 600px;
          align-self: center;
          background-color: #fff;
          padding-bottom: 12px;
          border-radius: 3px;
          box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);
        }
        .title {
          color: #999;
          font-size: 14px;
          font-weight: 700;
          margin: 13px 0px 3px 10px;
        }
      `}</style>
    </>
  );
};

export default Container;

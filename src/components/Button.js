import React from 'react';

const Button = (props) => {
  return (
    <>
      <button onClick={props.action()}>{props.text.toUpperCase()}</button>
      <style jsx="true">{`
        button {
          width: 100%;
          height: 60px;
          border-radius: 3px;
          background-color: #ff6c00;
          box-shadow: inset 0 -3px 0 0 #d45a00, 0 2px 4px 0 rgba(0, 0, 0, 0.25);
          border: 0;
          height: 60px;
          color: #fff;
          font-size: 20px;
          font-weight: 700;
          letter-spacing: 0.5px;
          line-height: 24px;
          text-align: center;
        }
        button:hover {
          background-color: #d45a00;
          cursor: pointer;
        }
      `}</style>
    </>
  );
};

export default Button;

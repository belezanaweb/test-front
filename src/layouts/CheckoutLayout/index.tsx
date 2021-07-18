import React from 'react';
import style from './style.module.scss';
import ProgressBar from "../../components/ProgressBar"

const CheckoutLayout: React.FC = ({ children }) => {
  return (
    <div className={style.container}>
      <ProgressBar />
      { children }
    </div>
  );
}
 
export default CheckoutLayout;
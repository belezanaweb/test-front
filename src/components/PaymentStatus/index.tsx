import React from 'react';
import style from './style.module.scss'

const PaymentStatus: React.FC = () => {

  return (
    <div className={style.container} data-testid="paymentStatus-test">
      <div className={style.icon}></div>
      <p className={style.subheading}>COMPRA EFETUADA COM SUCESSO</p>
    </div>
  );
}

export default PaymentStatus;
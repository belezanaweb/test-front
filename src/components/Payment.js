import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import InputMask from 'react-input-mask';
import { Redirect } from 'react-router-dom';

import NavBar from './NavBar';
import Container from './Container';
import Button from './Button';
import Total from './Total';

const Payment = () => {
  const [confirm, setConfirm] = useState(false);
  const {
    formState: { errors },
    handleSubmit,
    control,
    formState: { isDirty, isValid }
  } = useForm({
    mode: 'onChange'
  });

  const onSubmit = (data) => {
    const { vc, ...storingData } = data;
    const lastFour = data.card.split(' ')[3];
    storingData.card = '****.'.repeat(3).concat(lastFour);

    localStorage.setItem('belezanawebPayment', JSON.stringify(storingData));
    setConfirm(true);
  };

  return (
    <>
      <NavBar active="pay" />
      <div className="content">
        <Container title="cartão de crédito">
          <form onSubmit={handleSubmit(onSubmit)} className="payment-form">
            <div className="input-layout">
              <label htmlFor="card" className="input-label">
                Número do cartão:
              </label>
              <Controller
                control={control}
                name="card"
                rules={{ required: true, minLength: 19 }}
                render={({ field: { onChange, onBlur, value, ref } }) => (
                  <InputMask
                    onChange={onChange}
                    onBlur={onBlur}
                    selected={value}
                    placeholder="____.____.____.____"
                    mask="9999 9999 9999 9999"
                    maskChar=""
                    className={errors.card ? 'custom-error' : 'custom-input'}
                  />
                )}
              />
              {errors.card && <span className="error-warning">Campo inválido</span>}
            </div>
            <div className="input-layout">
              <label htmlFor="owner" className="input-label">
                Nome do Titular:
              </label>
              <Controller
                control={control}
                name="owner"
                rules={{ required: true }}
                render={({ field: { onChange, onBlur, value, ref } }) => (
                  <input
                    onChange={onChange}
                    onBlur={onBlur}
                    selected={value}
                    placeholder="Como no cartão"
                    className={errors.owner ? 'custom-error' : 'custom-input'}
                  />
                )}
              />
              {errors.owner && <span className="error-warning">Campo inválido</span>}
            </div>
            <div className="payment-layout">
              <div className="input-layout expiration">
                <label htmlFor="expiration" className="input-label">
                  Validade (mês/ano):
                </label>
                <Controller
                  control={control}
                  name="expiration"
                  rules={{ required: true, minLength: 7 }}
                  render={({ field: { onChange, onBlur, value, ref } }) => (
                    <InputMask
                      onChange={onChange}
                      onBlur={onBlur}
                      selected={value}
                      placeholder="__/____"
                      mask="99/9999"
                      maskChar=""
                      className={errors.expiration ? 'custom-error' : 'custom-input'}
                    />
                  )}
                />
                {errors.expiration && <span className="error-warning">Campo inválido</span>}
              </div>
              <div className="input-layout vc">
                <label htmlFor="vc" className="input-label">
                  CVV:
                </label>
                <Controller
                  control={control}
                  name="vc"
                  rules={{ required: true, minLength: 3 }}
                  render={({ field: { onChange, onBlur, value, ref } }) => (
                    <InputMask
                      onChange={onChange}
                      onBlur={onBlur}
                      selected={value}
                      placeholder="___"
                      mask="999"
                      maskChar=""
                      className={errors.expiration ? 'custom-error' : 'custom-input'}
                    />
                  )}
                />
                {errors.vc && <span className="error-warning">Campo inválido</span>}
              </div>
            </div>
          </form>
        </Container>
        <Total />
        <Button
          type="button"
          name="pay"
          text={'finalizar compra'}
          valid={!isValid || !isDirty}
          dirty={isDirty}
          action={() => handleSubmit(onSubmit)}
        />
      </div>
      {confirm && <Redirect to="/success" />}
      <style jsx="true">{`
        .avcds {
        }
        .payment-layout {
          display: flex;
          justify-content: space-between;
        }
        .payment-form {
          width: 95%;
          margin: 12px 10px 0 10px;
        }
        .input-layout {
          display: flex;
          flex-direction: column;
          margin-bottom: 25px;
        }
        .input-label {
          color: #ccc;
          font-size: 12px;
          font-weight: 700;
          line-height: 14px;
          margin-left: 5px;
        }
        .error-warning {
          color: #f30;
          font-size: 12px;
          line-height: 14px;
          margin-top: 3px;
          margin-left: 2px;
        }
        .custom-input,
        .custom-error {
          font-size: 16px;
          letter-spacing: 1.37px;
          line-height: 19px;
          box-sizing: border-box;
          height: 45px;
          border-radius: 3px;
          background-color: #fff;
          box-shadow: inset 0 1px 2px 0 rgba(0, 0, 0, 0.2);
          padding: 13px;
        }
        .custom-error {
          color: #212121;
          border: 1px solid #f30;
        }
        .custom-input {
          color: #e0e7ee;
          border: 1px solid #e7e7e7;
        }
        .custom-input:focus {
          color: #212121;
          border: 1px solid #a43287;
          outline: none;
        }
        .expiration {
          width: 50%;
          margin-bottom: 13px;
        }
        .vc {
          width: 45%;
          margin-bottom: 13px;
        }
      `}</style>
    </>
  );
};

export default Payment;

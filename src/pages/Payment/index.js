import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from "react-hook-form";

import { Container } from './styles';
import Total from '../../components/Total';
import { productsStorageName } from '../../utils';
import history from '../../services/history';
import { postCreditCardRequest } from '../../store/modules/credit-card/actions';

function Payment() {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors, watch } = useForm();
  const product = JSON.parse(localStorage.getItem(productsStorageName));

  async function onSubmit(data) {
    await dispatch(postCreditCardRequest(data));

    history.push('/#/success');

    window.location.reload();
  }

  return (
    <Container data-testid="payment">
      <h4>Cartão de crédito</h4>

      <form onSubmit={handleSubmit(onSubmit)} data-testid="payment-form">
        <div className="credit-card">
          <div className="form-row">
            <div className="col-md-12 mb-12">
              <label htmlFor="number">Número do cartão:</label>

              <input
                type="text"
                className={`form-control ${errors.number ? 'is-invalid': ''}`}
                id="number"
                name="number"
                aria-describedby="numberFeedback"
                required
                placeholder="____.____.____.____"
                ref={register({ required: true, minLength: 16, pattern: /^[0-9]+$/i })}
              />

              {errors.number &&
                <div id="numberFeedback" className="invalid-feedback">
                  Digite um número de cartão válido por favor.
                </div>
              }
            </div>
          </div>

          <div className="form-row">
            <div className="col-md-12 mb-12">
              <label htmlFor="name">Nome do titular:</label>

              <input
                type="text"
                className={`form-control ${errors.name ? 'is-invalid': ''}`}
                id="name"
                name="name"
                aria-describedby="nameFeedback"
                required
                placeholder="Como no cartão"
                ref={register({ required: true, minLength: 10 })}
              />

              {errors.name &&
                <div id="nameFeedback" className="invalid-feedback">
                  Digite um nome do titular válido por favor.
                </div>
              }
            </div>
          </div>

          <div className="form-row">
            <div className="col-6 mb-3">
              <label htmlFor="expiration">Validade (mês/ano):</label>

              <input
                type="text"
                className={`form-control ${errors.expiration ? 'is-invalid': ''}`}
                id="expiration"
                name="expiration"
                aria-describedby="expirationFeedback"
                required
                placeholder="__/____"
                ref={register({ required: true, pattern: /((0[1-9])|(1[0-2]))\/20[2-9][0-9]/g })}
              />

              {errors.expiration &&
                <div id="expirationFeedback" className="invalid-feedback">
                  Digite uma data de validade válida por favor.
                </div>
              }
            </div>

            <div className="col-6 mb-3">
              <label htmlFor="cvv">CVV:</label>

              <input
                type="number"
                className={`form-control ${errors.cvv ? 'is-invalid': ''}`}
                id="cvv"
                name="cvv"
                aria-describedby="cvvFeedback"
                required
                placeholder="___"
                ref={register({ required: true, min: 100, max: 999 })}
              />

              {errors.cvv &&
                <div id="cvvFeedback" className="invalid-feedback">
                  Digite um CVV válido por favor.
                </div>
              }
            </div>
          </div>
        </div>

        {product !== null && product.items && (
          <>
            <Total {...product} />

            <button
              className={`btn`}
              type="submit"
              disabled={
                !watch().number || !watch().name || !watch().expiration || !watch().cvv ||
                errors.number || errors.name || errors.expiration || errors.cvv
              }
            >
              Finalizar o pedido
            </button>
          </>
        )}
      </form>
    </Container>
  );
}

export default Payment;

import React, { Component } from 'react';
import { css } from 'aphrodite/no-important';
import MaskedInput from 'react-text-mask';

import styles from './styles';
import Cart from '../../common/Cart';
import DataStore from '../../common/DataStore';

import ContinueButton from '../continueButton/ContinueButton';

class Payment extends Component {

  state = {
    valueCard: '',
    valueName: '',
    valueExpires: '',
    valueCvv: '',
  }

  objProducts = Cart.read();

  componentDidMount = async () => {

    if (!this.objProducts) {

      this.objProducts = await Cart.download();
      this.forceUpdate();

    }

  }

  maskFunction = (validationType) => {

    switch (validationType) {

      case 'date':
        return [/\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];
      case 'card':
        return [/\d/, /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/];
      case 'cvv':
        return [/\d/, /\d/, /\d/];
      default:
        return [];

    }

  }

  valueCardChanged = (event) => {

    const { value } = event.target;
    this.setState({ valueCard: value });

  }

  valueNameChanged = (event) => {

    console.log('POS 1')

    const { value } = event.target;
    this.setState({ valueName: value });

  }

  valueExpiresChanged = (event) => {

    const { value } = event.target;
    this.setState({ valueExpires: value });

  }

  valueCvvChanged = (event) => {

    const { value } = event.target;
    this.setState({ valueCvv: value });

  }

  saveData = () => {

    const {
      valueCard,
      valueName,
      valueExpires,
    } = this.state;

    DataStore.set('userData', {
      valueCard: valueCard.replace(/_/g, ''),
      valueName,
      valueExpires: valueExpires.replace(/_/g, ''),
    });

  }

  render() {

    if (!this.objProducts) {

      /**
       * TODO: maybe create here a message/image "Carregando..."
       */
      return null;

    }

    const {
      items,
      error,
    } = this.objProducts;

    const {
      valueCard,
      valueName,
      valueExpires,
      valueCvv,
    } = this.state;

    this.saveData();

    // TODO: do a better error/empty bag handling
    if (error) return (<div className={css(styles.errorMsg)}>{error}</div>);
    if (!items) return (<div className={css(styles.errorMsg)}>Sem itens na sacola</div>);

    return (
      <div className={css(styles.container)}>
        <div className={css(styles.content)}>

          <div className={css(styles.title)}>
            CARTÃO DE CRÉDITO
          </div>

          <div className={css(styles.formBox)}>
            <div className={css(styles.inputBox)}>
              <div className={css(styles.inputLabel)}>
                Número do cartão:
              </div>
              <MaskedInput
                className={css(styles.inputBig)}
                value={valueCard || ''}
                onChange={this.valueCardChanged}
                mask={() => this.maskFunction('card')}
              />
            </div>
            <div className={css(styles.inputBox)}>
              <div className={css(styles.inputLabel)}>
                Nome do Titular:
              </div>
              <input
                type="text"
                className={css(styles.inputBig)}
                value={valueName || ''}
                onChange={this.valueNameChanged}
                placeholder="Como no cartão"
              />
            </div>
            <div className={css(styles.inputBox, styles.inputBoxDual)}>
              <div>
                <div className={css(styles.inputLabel)}>
                  Validade (mês/ano):
                </div>
                <div>
                  <MaskedInput
                    className={css(styles.inputBig, styles.inputExpires)}
                    value={valueExpires || ''}
                    onChange={this.valueExpiresChanged}
                    mask={() => this.maskFunction('date')}
                  />
                </div>
              </div>
              <div>
                <div className={css(styles.inputLabel)}>
                  CVV:
                </div>
                <MaskedInput
                  className={css(styles.inputBig, styles.inputCV)}
                  value={valueCvv || ''}
                  onChange={this.valueCvvChanged}
                  mask={() => this.maskFunction('cvv')}
                />
              </div>
            </div>

          </div>

          <ContinueButton
            link="/sucesso"
            label="FINALIZAR O PEDIDO"
          />

        </div>
      </div>
    );

  }

}

export default Payment;

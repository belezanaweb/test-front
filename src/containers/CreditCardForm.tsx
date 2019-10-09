import * as React from 'react';
import { Card } from '../components/Card';
import { Input } from '../components/Input';
import validateCreditCardNumber from '../helper/validateCreditCardNumber';
import validateCreditCardExpiryDate from '../helper/validateCreditCardExpiryDate';
import { Connection, Inject } from 'exredux';
import { modelStore } from '../service/modelStore';
import { CardModel } from '../service/models/CardModel';
import { ICreditCard } from '../service/interfaces/ICreditCard';
import { Row } from '../components/Row';
// ---------------------------------------------------------------------
// --- COMPONENT -------------------------------------------------------
// ---------------------------------------------------------------------
class Props {
  @Inject cardModel?: CardModel;
}

@Connection({
  modelStore,
  props: Props
})
export class CreditCardForm extends React.Component<Props, ICreditCard> {
  state: ICreditCard = {
    creditCardNumber: '',
    creditCardExpiryDate: '',
    creditCardCCV: '',
    creditCardName: '',
    validationChecks: [false, false, false, false]
  };

  render() {
    return (
      <Card>
        <Input
          label="Número do cartão:"
          placeholder="____ ____ ____ ____"
          mask="9999 9999 9999 9999"
          onValidationRules={[
            this.handleRequired,
            this.handleValidateCreditCard
          ]}
          onChange={this.handleChangeValue('creditCardNumber')}
          isValid={this.handleValidationCheck(0)}
        />
        <Input
          label="Nome do Titular:"
          placeholder="Como no cartão"
          onValidationRules={[this.handleRequired]}
          onChange={this.handleChangeValue('creditCardExpiryDate')}
          isValid={this.handleValidationCheck(1)}
        />
        <Row>
          <Input
            label="Validade (mês/ano):"
            placeholder="__/____"
            mask="99/9999"
            onValidationRules={[
              this.handleRequired,
              this.handleValidateCreditCardDate
            ]}
            onChange={this.handleChangeValue('creditCardCCV')}
            isValid={this.handleValidationCheck(2)}
          />
          <Input
            label="CVV:"
            placeholder="___"
            onValidationRules={[
              this.handleRequired,
              this.handleValidateCreditCCV
            ]}
            onChange={this.handleChangeValue('creditCardName')}
            isValid={this.handleValidationCheck(3)}
          />
        </Row>
      </Card>
    );
  }

  handleValidationCheck = (index: number) => (valid: boolean) => {
    const { validationChecks } = this.state;
    validationChecks[index] = valid;
    this.setState({ validationChecks }, () => {
      this.props.cardModel.changeData(this.state);
    });
  }

  handleChangeValue = (fieldName: string) => value => {
    const currentState = this.state;
    currentState[fieldName] = value;
    this.setState({ ...currentState });
  }

  handleValidateCreditCard = (input: string) => {
    return {
      valid: validateCreditCardNumber(input),
      message: 'Cartão Inválido'
    };
  }

  handleValidateCreditCardDate = (input: string) => {
    return {
      valid: validateCreditCardExpiryDate(input),
      message: 'Data de Expiração Inválida'
    };
  }

  handleValidateCreditCCV = (input: string) => {
    return {
      valid: input !== undefined && input !== null && input.length > 2,
      message: 'CCV inválido'
    };
  }

  handleRequired = (input: string) => {
    return {
      valid: input !== undefined && input !== null && input !== '',
      message: 'Valor Requerido'
    };
  }
}

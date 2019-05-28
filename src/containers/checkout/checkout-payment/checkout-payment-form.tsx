import * as React from 'react';
import TextField from '../../../components/text-field';
import { formToJSON } from '../../../utils';
import styled from 'styled-components';

const FormWrapper = styled.form`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -10px;
`

const FormGroup = styled.div<{ size?: string }>`
  width: calc(${props => props.size || '100%'} - 20px);
  margin: 0 10px;
`

class CheckoutPaymentForm extends React.Component<{
  onFormChange: (data: any) => any
}> {

  formPayment: React.RefObject<any>;

  constructor(props: any) {

    super(props);
    this.formPayment = React.createRef();
    this.state = {
      isValid: true,
      data: null,
    }
  }

  handleChange = (ev: any) => {

    ev.preventDefault();
    this.setState(() => ({
        isValid: this.isValid(),
        data: formToJSON(this.formPayment.current.elements)
      }),
      () => { if (this.props.onFormChange) this.props.onFormChange(this.state) });
  }

  isValid = (): boolean => {

    return !Array
      .from(this.formPayment.current.elements)
      .some((el: any) => !el.validity.valid);
  }

  getFieldByName = (name: string) => {

    return Boolean(this.formPayment.current)
      ? Array
        .from(this.formPayment.current.elements)
        .filter((field: any) => field.name === name)[0]
      : {}
  }

  getErrorMessage = (name: string) =>
    this.getFieldByName(name) !== {} && (this.getFieldByName(name) as any).validationMessage;

  validatingField = (name: string) =>
    this.getFieldByName(name) !== {} &&
    (this.getFieldByName(name) as any).validity &&
    !(this.getFieldByName(name) as any).validity.valid;

  render() {

    const { onFormChange, ...rest } = this.props;

    return (
      <FormWrapper {...rest} ref={this.formPayment}>
        <FormGroup>
          <TextField
            label="Número do cartão:"
            id="number-card"
            name="numberCard"
            placeholder="____.____.____.____"
            onChange={this.handleChange}
            error={this.validatingField('numberCard')}
            errorMessage={this.getErrorMessage('numberCard')}
            pattern="\d{4}\.?\d{4}\.?\d{4}\.?\d{4}"
            required
          />
        </FormGroup>
        <FormGroup>
          <TextField
            label="Nome do titular:"
            id="titular-name-card"
            name="titularNameCard"
            placeholder="Igual no cartão"
            onChange={this.handleChange}
            error={this.validatingField('titularNameCard')}
            errorMessage={this.getErrorMessage('titularNameCard')}
            required
          />
        </FormGroup>
        <FormGroup size="50%">
          <TextField
            label="Validade (mês/ano):"
            id="validate-card"
            name="validateCard"
            placeholder="__/____"
            onChange={this.handleChange}
            error={this.validatingField('validateCard')}
            errorMessage={this.getErrorMessage('validateCard')}
            pattern="\d{2}\/?\d{4}"
            required
          />
        </FormGroup>
        <FormGroup size={'50%'}>
          <TextField
            label="CVV:"
            id="cvv-card"
            name="cvvCard"
            placeholder="___"
            onChange={this.handleChange}
            error={this.validatingField('cvvCard')}
            errorMessage={this.getErrorMessage('cvvCard')}
            pattern="\d{3}"
            required
          />
        </FormGroup>
      </FormWrapper>
    );
  }
}

export default CheckoutPaymentForm;

import * as React from 'react';
import TextField from '../../../components/text-field';

const formToJSON = (elements: any) => [].reduce.call(elements, (data: any, element: any) => {
  data[element.name] = element.value;

  return data;
}, {});

class CheckoutPaymentForm extends React.Component<{
  onFormChange: (data: any) => any
}> {

  formPayment: React.RefObject<any>;

  state = {
    isValid: true,
    data: null,
  }

  constructor(props: any) {

    super(props);
    this.formPayment = React.createRef();
  }

  handleChange = (ev: any) => {

    console.dir(this.formPayment.current.elements[0])
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
      <form {...rest} ref={this.formPayment}>
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
      </form>
    );
  }
}

export default CheckoutPaymentForm;

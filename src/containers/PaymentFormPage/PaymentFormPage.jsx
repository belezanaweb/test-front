import React, { Component } from 'react'

import Card from '../../components/UI/Card/Card';
import Title from '../../components/UI/Title/Title';
import Button from '../../components/UI/Button/Button';

import TotalizersList from '../../components/Totalizers/TotalizersList/TotalizersList';

import jss from 'jss'
import preset from 'jss-preset-default'
import Input from '../../components/UI/Input/Input';
import required from '../../helpers/validations/required';
import minlength from '../../helpers/validations/minlength';
import maxlength from '../../helpers/validations/maxlength';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'

import { addPayment } from '../../store/actions/payment';
import Spinner from '../../components/UI/Spinner/Spinner';

jss.setup(preset())

const styles = {
  row: {
    display: 'block',
    margin: [0, -10],
    '&:after': {
      content: '""',
      display: 'block',
      clear: 'both',
    },
  },
  column: {
    float: 'left',
    padding: [0, 10],
    margin: { top: 20 },
    '&:first-child': {
      margin: { top: 0 }
    }
  },
  '@media (min-width: 1024px)': {
    containerRow: {
      display: 'flex',
    },
    leftContainer: {
      width: '55%',
    },
    rightContainer: {
      flex: 'auto',
      padding: { left: 20 },
      margin: { top: 25 },
    },
  }
}

const { classes } = jss.createStyleSheet(styles).attach()

const dateCheckValidation = {
  type: 'checkDateValidation',
  handler: text => {
    const inputDate = text.split('/').map(part => parseInt(part))
    inputDate[0]-- // Months in javascript starts in 0

    if (inputDate[0] < 0 || inputDate[0] > 11)
      return false

    const date = new Date(inputDate[1], inputDate[0], 30)
    return Date.now() <= date.getTime()
  },
  error: `Please insert a valid date`,
}

class PaymentFormPage extends Component {
  state = {
    submitting: false,
    isFormValid: false,
    formControls: [
      {
        name: 'creditCardNumber',
        value: '',
        valid: false,
        width: 100,
        props: {
          label: 'Número do cartão',
          mask: '####.####.####.####',
          placeholder: '____.____.____.____',
          validations: [required, minlength(19), maxlength(19)],
        }
      },
      {
        name: 'creditCardHolder',
        value: '',
        valid: false,
        width: 100,
        props: {
          label: 'Nome do titular',
          placeholder: 'Como no cartão',
          validations: [required],
        }
      },
      {
        name: 'creditCardExpDate',
        value: '',
        valid: false,
        width: 55,
        props: {
          label: 'Validade (mês/ano)',
          mask: '##/####',
          placeholder: '__/____',
          validations: [required, minlength(7), maxlength(7), dateCheckValidation],
        }
      },
      {
        name: 'creditCardCVV',
        value: '',
        valid: false,
        width: 45,
        props: {
          label: 'CVV',
          mask: '###',
          placeholder: '___',
          validations: [required, minlength(3), maxlength(3)],
        }
      },
    ]
  }

  async placeOrder() {
    if (!this.state.isFormValid) return

    // Simulate payment submit
    this.setState({ submitting: true })
    await new Promise(resolve => setTimeout(() => resolve(), 3500))
    this.setState({ submitting: false })

    const creditCardNumber = this.state.formControls.find(c => c.name === 'creditCardNumber').value
    const creditCardHolder = this.state.formControls.find(c => c.name === 'creditCardHolder').value
    const creditCardExpDate = this.state.formControls.find(c => c.name === 'creditCardExpDate').value
    this.props.addPayment(creditCardNumber, creditCardHolder, creditCardExpDate)

    this.props.history.push('/checkout/placed')
  }

  updateControl(controlIndex, value, isValid) {
    const controls = [...this.state.formControls]
    controls[controlIndex] = {
      ...controls[controlIndex],
      value,
      valid: isValid,
    }

    this.setState({
      formControls: controls,
      isFormValid: !controls.some(control => !control.valid),
    })
  }

  render() {
    return (
      <div className={classes.containerRow}>
        <div className={classes.leftContainer}>
          <Title>Cartão de crédito</Title>

          <Card>
            <div className={classes.row}>
              {this.state.formControls.map((control, index) =>
                <div className={classes.column} style={{ width: control.width + '%' }} key={control.name}>
                  <Input
                    name={control.name}
                    onValid={value => this.updateControl(index, value, true)}
                    onInvalid={value => this.updateControl(index, value, false)}
                    {...control.props}
                  />
                </div>
              )}
            </div>
          </Card>
        </div>

        <div className={classes.rightContainer}>
          <TotalizersList />
          <Button disabled={!this.state.isFormValid} onClick={() => this.placeOrder()}>
            {this.state.submitting ? <Spinner /> : null}
            Finalizar o pedido
        </Button>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addPayment: (creditCardNumber, creditCardHolder, creditCardExpDate) => dispatch(addPayment(creditCardNumber, creditCardHolder, creditCardExpDate)),
})

export default withRouter(connect(null, mapDispatchToProps)(PaymentFormPage))

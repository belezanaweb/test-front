import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { productData } from '../../actions'

class FormPayment extends Component {
  constructor(props) {
    super(props)

    this.state = {
      items: [],
      data: {},
      card: 0,
      nome: '',
      validate: '',
      cvv: 0,
      cardNumber: {}
    }
  }

  handleOnChange = event => {
    const { id, value } = event.target

    if (id === '1') {
      this.setState({ card: value })
    } else if (id === '2') {
      this.setState({ nome: value })
    } else if (id === '3') {
      this.setState({ validate: value })
    } else if (id === '4') {
      this.setState({ cvv: value })
    } else {
      console.log('error')
    }

    let payload = {
      card: this.state.card,
      nome: this.state.nome,
      validate: this.state.validate,
      cvv: this.state.cvv
    }

    this.setState({
      cardNumber: payload
    })
  }

  render() {
    console.log('state', this.state.cardNumber)
    return (
      <div>
        <form noValidate autoComplete="off" onSubmit={this.onSubmit}>
          <Grid container spacing={24}>
            <Grid item xs={12}>
              <span
                style={{
                  color: '#CCC',
                  fontFamily: 'Helvetica Neue',
                  fontSize: 12,
                  fontWeight: 700,
                  float: 'left'
                }}
              >
                Número do cartão
              </span>
              <TextField
                id="1"
                onChange={this.handleOnChange}
                type="number"
                nome="card"
                placeholder="____.____.____.____"
                fullWidth
                margin="normal"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <span
                style={{
                  color: '#CCC',
                  fontFamily: 'Helvetica Neue',
                  fontSize: 12,
                  fontWeight: 700,
                  float: 'left'
                }}
              >
                Nome do titular
              </span>
              <TextField
                id="2"
                onChange={this.handleOnChange}
                type="text"
                name="nome"
                placeholder="Como no cartão"
                fullWidth
                margin="normal"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <span
                style={{
                  color: '#CCC',
                  fontFamily: 'Helvetica Neue',
                  fontSize: 12,
                  fontWeight: 700,
                  float: 'left'
                }}
              >
                Validade (mês/ano):
              </span>
              <TextField
                id="3"
                placeholder="__/____"
                onChange={this.handleOnChange}
                type="text"
                name="validate"
                //autoComplete="email"
                margin="normal"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <span
                style={{
                  color: '#CCC',
                  fontFamily: 'Helvetica Neue',
                  fontSize: 12,
                  fontWeight: 700,
                  float: 'left'
                }}
              >
                CVV
              </span>
              <TextField
                id="4"
                type="number"
                nome="cvv"
                placeholder="___"
                margin="normal"
                variant="outlined"
                onChange={this.handleOnChange}
              />
            </Grid>
          </Grid>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ productData }, dispatch)

const mapStateToProps = store => ({
  data: store.product.data
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormPayment)

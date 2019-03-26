import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'

import ButtonComponent from '../../components/ButtonComponent'
import PaymentComponent from '../../components/PaymentComponent'
import { getData } from '../../services'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { productData } from '../../actions'

//import './index.css'

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginLeft: 10,
    marginRight: 10
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
})

class Payment extends Component {
  constructor(props) {
    super(props)
    console.log('props', props)

    this.state = {
      items: [],
      data: {}
    }
  }
  onSubmit = () => {}

  render() {
    const { classes, data } = this.props

    return (
      <div>
        <div className={classes.root}>
          <Grid container>
            <Grid item xs={12}>
              <p
                style={{
                  color: '#999',
                  weight: 'bold',
                  fontSize: 14,
                  fontFamily: 'Helvetica Neue',
                  marginLeft: 20,
                  marginRight: 20,
                  height: 17
                }}
              >
                CARTÃO DE CREDITO
              </p>
              <Paper className={classes.paper}>
                <form
                  className={classes.container}
                  noValidate
                  autoComplete="off"
                  onSubmit={this.onSubmit}
                >
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
                        id="outlined-full-width"
                        type="number"
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
                        id="outlined-full-width"
                        type="number"
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
                        id="outlined-email-input"
                        placeholder="__/____"
                        className={classes.textField}
                        type="text"
                        name="text"
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
                        id="outlined-email-input"
                        placeholder="___"
                        className={classes.textField}
                        type="text"
                        name="text"
                        //autoComplete="email"
                        margin="normal"
                        variant="outlined"
                      />
                    </Grid>
                  </Grid>
                </form>
              </Paper>
              <PaymentComponent data={data} />
            </Grid>

            <Grid item xs={12} position="fixed" style={{ marginTop: 'auto', bottom: 0 }}>
              <ButtonComponent title="FINALIZAR O PEDIDO" />
            </Grid>
          </Grid>
        </div>
      </div>
    )
  }
}

Payment.propTypes = {
  classes: PropTypes.object.isRequired
}

const mapDispatchToProps = dispatch => bindActionCreators({ productData }, dispatch)

const mapStateToProps = store => ({
  data: store.product.data
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Payment))

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

import ButtonComponent from '../../components/ButtonComponent'
import PaymentComponent from '../../components/PaymentComponent'
import FormPayment from '../../components/FormPayment'
import Header from '../../components/Header'

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
  },
  payment: {
    flexGrow: 1,
    textAlign: 'center',
    color: '#FF7800',
    fontFamily: 'Helvetica Neue',
    fontSize: 13,
    fontWeight: 700
  },
  grow: {
    flexGrow: 1,
    textAlign: 'center',
    color: '#CCC',
    fontFamily: 'Helvetica Neue',
    fontSize: 13,
    fontWeight: 700
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

  render() {
    const { classes, data } = this.props

    return (
      <div>
        <Header classes={classes} />
        <div className={classes.root}>
          <Grid container>
            <Grid item xs={12}>
              <p
                style={{
                  color: '#999',
                  fontFamily: 'Helvetica Neue',
                  fontSize: 14,
                  fontWeight: 700,
                  marginLeft: 20,
                  marginRight: 20,
                  height: 17
                }}
              >
                CARTÃO DE CREDITO
              </p>
              <Paper className={classes.paper}>
                <FormPayment />
              </Paper>
              <PaymentComponent data={data} />
            </Grid>

            <Grid item xs={12} position="fixed" style={{ marginTop: 'auto', bottom: 0 }}>
              <ButtonComponent to="/confirmation" go title="FINALIZAR O PEDIDO" />
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

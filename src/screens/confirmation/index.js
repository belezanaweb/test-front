import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { productData } from '../../actions'

import PaymentComponent from '../../components/PaymentComponent'
import Products from '../../components/Products'

import Header from '../../components/Header'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import classNames from 'classnames'
import Icon from '@material-ui/core/Icon'

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
  confirmation: {
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

class Confirmation extends Component {
  constructor(props) {
    super(props)

    this.state = {
      items: [],
      data: {}
    }
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.props.data !== prevProps.data) {
  //     console.log('this.props.data', this.props.data)
  //     this.setState({ data: this.props.data })
  //   }
  // }
  render() {
    const { classes, data } = this.props
    console.log('redux confirmation', data)

    //const { data } = this.state
    // console.log('data', data.items)

    return (
      <div style={{ background: '#EEE' }}>
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
                PAGAMENTO check_circle_outiline
              </p>              
              <Paper className={classes.paper}>
                <p>Teste</p>
              </Paper>
              <Products />
              <PaymentComponent data={data} />
            </Grid>

            {/* <Grid item xs={12} position="fixed" style={{ marginTop: 'auto', bottom: 0 }}>
              <ButtonComponent to="/confirmation" go title="FINALIZAR O PEDIDO" />
            </Grid> */}
          </Grid>
        </div>
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
)(withStyles(styles)(Confirmation))

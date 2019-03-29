import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { productData } from '../../actions'

import ButtonComponent from '../../components/ButtonComponent'
import Header from '../../components/Header'
import Products from '../../components/Products'
import PaymentComponent from '../../components/PaymentComponent'
import { getData } from '../../services'

import './index.css'

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: 10
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  bag: {
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

class Bag extends Component {
  constructor(props) {
    super(props)

    this.state = {
      items: [],
      data: {}
    }
  }

  componentDidMount() {
    this._getData()
  }

  async _getData() {
    const result = await getData()

    this.setState({
      items: result.items,
      data: result
    })

    this.props.productData(this.state.data)
  }

  render() {
    const { classes } = this.props

    return (
      <div style={{ background: '#EEE' }}>
        <Header classes={classes} />
        <div className={classes.root}>
          <Grid container>
            <Grid item xs={12}>
              <Products />
            </Grid>
            <Grid item xs={12}>
              <PaymentComponent />
            </Grid>
            <Grid item xs={12} position="fixed" style={{ marginTop: 'auto', bottom: 0 }}>
              <ButtonComponent to="/payment" go title="SEGUIR PARA O PAGAMENTO" />
            </Grid>
          </Grid>
        </div>
      </div>
    )
  }
}

Bag.propTypes = {
  classes: PropTypes.object.isRequired
}

const mapDispatchToProps = dispatch => bindActionCreators({ productData }, dispatch)

const mapStateToProps = store => ({
  data: store.product.data
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Bag))

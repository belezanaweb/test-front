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
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import InboxIcon from '@material-ui/icons/Inbox'
import CheckCircleOutlineOutlined from '@material-ui/icons/CheckCircleOutlineOutlined'

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

  render() {
    const { classes, data, dataCard } = this.props
    console.log('dataCard', dataCard)

    return (
      <div style={{ background: '#EEE' }}>
        <Header classes={classes} />
        <div className={classes.root}>
          <Grid container>
            <Grid item xs={12}>
              <Grid container spacing={16} className={classes.demo}>
                <Grid alignItems="center" container justify="center" item xs={12}>
                  <CheckCircleOutlineOutlined
                    style={{ fontSize: 40, color: '#FF7800', marginTop: 12, marginBottom: -20 }}
                  />
                </Grid>
                <Grid alignItems="center" container justify="center" item xs={12}>
                  <p
                    style={{
                      color: '#FF7800',
                      fontFamily: 'Helvetica Neue',
                      fontSize: 14,
                      fontWeight: 700
                    }}
                  >
                    COMPRA EFETUADA COM SUCESSO
                  </p>
                </Grid>
              </Grid>
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
                PAGAMENTO
              </p>

              <Paper className={classes.paper}>
                <Grid>
                  <List
                    style={{
                      textAlign: 'left',
                      color: '#000',
                      fontFamily: 'Helvetica Neue',
                      fontSize: 14
                    }}
                  >
                    <ListItemText style={{ paddingLeft: 15 }} primary={dataCard.card} />
                    <ListItemText primary={dataCard.nome} />
                    <ListItemText primary={dataCard.validate} />
                  </List>
                </Grid>
              </Paper>

              <Products />
              <PaymentComponent data={data} />
            </Grid>
          </Grid>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ productData }, dispatch)

const mapStateToProps = store => ({
  data: store.product.data,
  dataCard: store.product.dataCard
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Confirmation))

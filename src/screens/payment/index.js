import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

import ButtonComponent from '../../components/ButtonComponent'

import { getData } from '../../services'

//import './index.css'

const styles = theme => ({
  root: {
    flexGrow: 1
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

    this.state = {
      items: [],
      data: {}
    }
  }

  componentDidMount() {
    this._getData()
  }

  changePage() {
    alert('ok')
  }

  async _getData() {
    const result = await getData()

    this.setState({
      items: result.items,
      data: result
    })
  }

  render() {
    const { classes } = this.props
    const { data } = this.state

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
                <p>Teste</p>
              </Paper>
              <List
                style={{
                  borderStyle: 'solid',
                  borderWidth: 2,
                  borderColor: '#EEE',
                  marginTop: 15,
                  marginBottom: 15
                }}
              >
                <ListItem>
                  <ListItemText
                    primary={
                      <Typography
                        style={{
                          color: '#212122',
                          fontSize: 14,
                          fontFamily: 'Helvetica Neue'
                        }}
                      >
                        PRODUTOS
                      </Typography>
                    }
                  />
                  <ListItemText
                    primary={
                      <Typography
                        style={{
                          color: '#212122',
                          fontSize: 14,
                          fontFamily: 'Helvetica Neue',
                          float: 'right'
                        }}
                      >
                        R$ {data.subTotal}
                      </Typography>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={
                      <Typography
                        style={{
                          color: '#212122',
                          fontSize: 14,
                          fontFamily: 'Helvetica Neue'
                        }}
                      >
                        FRETE
                      </Typography>
                    }
                  />
                  <ListItemText
                    primary={
                      <Typography
                        style={{
                          color: '#212122',
                          fontSize: 14,
                          fontFamily: 'Helvetica Neue',
                          float: 'right'
                        }}
                      >
                        R$ {data.shippingTotal}
                      </Typography>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={
                      <Typography
                        style={{
                          color: '#212122',
                          fontSize: 14,
                          fontFamily: 'Helvetica Neue'
                        }}
                      >
                        DESCONTO
                      </Typography>
                    }
                  />
                  <ListItemText
                    primary={
                      <Typography
                        style={{
                          color: '#212122',
                          fontSize: 14,
                          fontFamily: 'Helvetica Neue',
                          float: 'right'
                        }}
                      >
                        R$ {data.discount}
                      </Typography>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={
                      <Typography
                        style={{
                          color: '#212122',
                          fontSize: 14,
                          fontFamily: 'Helvetica Neue'
                        }}
                      >
                        TOTAL
                      </Typography>
                    }
                  />
                  <ListItemText
                    primary={
                      <Typography
                        style={{
                          color: '#212122',
                          fontSize: 14,
                          fontFamily: 'Helvetica Neue',
                          float: 'right'
                        }}
                      >
                        R$ {data.total}
                      </Typography>
                    }
                  />
                </ListItem>
              </List>
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

export default withStyles(styles)(Payment)

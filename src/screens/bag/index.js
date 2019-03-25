import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'

import './index.css'
import { Link } from 'react-router-dom'

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

class Bag extends Component {
  constructor(props) {
    super(props)
    console.log('props', props)

    this.state = {
      price: 0
    }
  }

  componentDidMount() {
    this.priceSpecification()
  }

  changePage() {
    alert('ok')
  }

  priceSpecification() {
    const { state } = this.props
    let price = []
    let discount = []
    state.map(item => {
      price.push(item.product.priceSpecification.price)

      // discount.push(item.product.priceSpecification.discount)

      // discount.find(discount => discount !== 0)
      // console.log('discount', discount)

      // if (item.product.priceSpecification.discount !== 0) {
      //   let discount = item.product.priceSpecification.discount

      //   return console.log('discount', price - discount)
      // }

      return price
    })

    var sum = price.reduce(function(a, b) {
      return a + b
    }, 0)

    console.log('price', sum)

    this.setState({ price: sum })
  }

  render() {
    const { classes, state, data } = this.props
    const teste = this.props.data
    console.log('data', teste)

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
                PRODUTOS
              </p>
              <Paper className={classes.paper}>
                <List>
                  {state.map(item => {
                    return (
                      <ListItem
                        key={item.product.name}
                        alignItems="flex-start"
                        style={{
                          borderStyle: 'solid',
                          borderWidth: 2,
                          borderColor: '#EEE',
                          marginBottom: 10
                        }}
                      >
                        <ListItemAvatar>
                          <Avatar alt="Remy Sharp" src={item.product.imageObjects[0].thumbnail} />
                        </ListItemAvatar>
                        <ListItemText
                          primary={
                            <Typography
                              style={{
                                color: '#212122',
                                fontSize: 13,
                                fontFamily: 'Helvetica Neue'
                              }}
                            >
                              {item.product.name}
                            </Typography>
                          }
                          secondary={
                            <React.Fragment>
                              <Typography
                                component="span"
                                style={{
                                  color: '#212122',
                                  fontSize: 14,
                                  fontWeight: 700,
                                  fontFamily: 'Helvetica Neue',
                                  float: 'right'
                                  //marginTop: 10
                                }}
                              >
                                R$ {item.product.priceSpecification.price}
                              </Typography>
                            </React.Fragment>
                          }
                        />
                      </ListItem>
                    )
                  })}
                </List>
              </Paper>
              <List
                style={{
                  borderStyle: 'solid',
                  borderWidth: 2,
                  borderColor: '#EEE',
                  marginTop: 10
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
                        R$ {this.state.price}
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
                        R$ 5,30
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
                        R$ -30,00
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
                        R$ 600,10
                      </Typography>
                    }
                  />
                </ListItem>
              </List>
            </Grid>

            <Grid item xs={12} position="fixed" style={{ marginTop: 'auto', bottom: 0 }}>
              <Button
                fullWidth={true}
                variant="contained"
                size="large"
                className="MuiButton-contained-241"
                //onClick={() => this.changePage()}
                style={{
                  color: '#FFF',
                  fontFamily: 'Helvetica Neue',
                  fontSize: 20,
                  fontWeight: 700
                }}
              >
                {/* <Link to="./payment">SEGUIR PARA O PAGAMENTO</Link> */}
                SEGUIR PARA O PAGAMENTO
              </Button>
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

export default withStyles(styles)(Bag)

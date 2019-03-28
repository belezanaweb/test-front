import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import './index.css'

import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import Bag from '../bag'
import Payment from '../payment'
import Confirmation from '../confirmation'

const styles = theme => ({
  root: {
    flexGrow: 1,
    background: '#EEE'
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  grow: {
    flexGrow: 1,
    textAlign: 'center',
    color: '#FF7800',
    fontFamily: 'Helvetica Neue',
    fontSize: 13,
    fontWeight: 700
  }
})

class Home extends Component {
  state = {
    value: 0,
    items: []
  }

  handleChange = (event, value) => {
    this.setState({ value })
  }

  render() {
    const { classes } = this.props

    return (
      <BrowserRouter>
        <div className={classes.root}>
          <Grid container>
            <Grid item xs={12}>
              <Paper square spacing={12}>
                <Toolbar>
                  <Typography className={classes.grow}>SACOLA</Typography>
                  <Typography className={classes.grow}>PAGAMENTO</Typography>
                  <Typography className={classes.grow}>CONFIRMAÇÃO</Typography>
                </Toolbar>
              </Paper>
            </Grid>
          </Grid>
          <Switch>
            <Route path="/" exact={true} component={Bag} />
            <Route path="/bag" exact={true} component={Bag} />
            <Route path="/payment" component={Payment} />
            <Route path="/confirmation" component={Confirmation} />
          </Switch>
        </div>
        {/* <div className={classes.root}>
          <Grid container>
            <Grid item xs={12}>
              <Paper square spacing={12}>
                <Tabs
                  value={this.state.value}
                  //indicatorColor="primary"
                  textColor="primary"
                  style={{ fontWeight: 700 }}
                  onChange={this.handleChange}
                  variant="fullWidth"
                  ref="tab"
                >
                  <Tab value={0} label="SACOLA" />
                  <Tab value={1} label="PAGAMENTO" />
                  <Tab value={2} label="CONFIRMAÇÃO" />
                </Tabs>
              </Paper>
            </Grid>
          </Grid>
          <Switch>
            <Route path="/" exact={true} component={() => <Bag />} />
            <Route path="/bag" exact={true} component={() => <Bag />} />
            <Route path="/payment" component={Payment} />
            <Route path="/confirmation" component={Confirmation} />
          </Switch>
        </div> */}
      </BrowserRouter>
    )
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Home)

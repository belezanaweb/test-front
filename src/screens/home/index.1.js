import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

import Bag from '../bag'
import Payment from '../payment'
import Confirmation from '../confirmation'

import { Link } from 'react-router-dom'

// import { Container } from './styles'

const styles = theme => ({
  teste: {
    display: 'flex',

    flex: 1,
    backgroundColor: '#000'
  },
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
})

class Home extends Component {
  state = {
    value: 2
  }

  handleChange = (event, value) => {
    this.setState({ value })
  }

  handleChangeIndex = index => {
    this.setState({ value: index })
  }

  render() {
    const { classes } = this.props
    return (
      <BrowserRouter>
        <div className={classes.root}>
          <Grid container spacing={24}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Tabs
                  value={this.state.value}
                  onChange={this.handleChange}
                  indicatorColor="none"
                  textColor="primary"
                  variant="fullWidth"
                >
                  <Tab label="SACOLA" component={Link} to="/bag" />
                  <Tab label="PAGAMENTO" component={Link} to="/payment" />
                  <Tab label="CONFIRMAÇÃO" component={Link} to="/confirmation" />
                </Tabs>
              </Paper>
            </Grid>

            <Grid xs={12}>
              <Switch>
                <Route path="/bag" exact={true} render={() => <Bag />} />
                <Route path="/payment" exact={true} render={() => <Payment />} />
                <Route path="/confirmation" exact={true} render={() => <Confirmation />} />
              </Switch>
            </Grid>
          </Grid>
        </div>
      </BrowserRouter>
    )
  }
}

export default withStyles(styles)(Home)

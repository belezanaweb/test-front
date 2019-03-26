import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

import { Link, Route, BrowserRouter, Switch } from 'react-router-dom'

import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

//import { getData } from '../../services'
import Bag from '../bag'
import Payment from '../payment'
import Confirmation from '../confirmation'

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

class Home extends Component {
  state = {
    value: 0,
    items: []
  }

  // componentDidMount() {
  //   this._getData()
  // }

  handleChange = (event, value) => {
    this.setState({ value })
  }

  // async _getData() {
  //   const result = await getData()
  //   this.setState({
  //     items: result.items,
  //     data: result
  //   })
  // }

  render() {
    const { classes } = this.props

    return (
      <BrowserRouter>
        <div className={classes.root}>
          <Grid container>
            <Grid item xs={12}>
              <Paper square spacing={12}>
                <Tabs
                  value={this.state.value}
                  //indicatorColor="primary"
                  textColor="primary"
                  onChange={this.handleChange}
                  variant="fullWidth"
                >
                  <Tab value={0} label="SACOLA" component={Link} to="/bag" /> />
                  <Tab value={2} label="PAGAMENTO" component={Link} to="/payment" />
                  <Tab value={3} label="CONFIRMAÇÃO" component={Link} to="/confirmation" />
                </Tabs>
              </Paper>
            </Grid>
          </Grid>
          <Switch>
            <Route path="/" exact={true} component={() => <Bag />} />
            <Route path="/bag" exact={true} component={() => <Bag />} />
            } />
            <Route path="/payment" component={Payment} />
            <Route path="/confirmation" component={Confirmation} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Home)

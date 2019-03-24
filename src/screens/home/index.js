import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

import Bag from '../bag'
import Payment from '../payment'
import Confirmation from '../confirmation'
// import { Container } from './styles'

const styles = theme => ({
  root: {
    width: '100%'
  },
  paper: {
    padding: theme.spacing.unit * 4,
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  margin: {
    margin: 8
  }
})

class Home extends Component {
  state = {
    value: 0
  }

  handleChange = (event, value) => {
    this.setState({ value })
  }

  render() {
    const { classes } = this.props
    const { value } = this.state
    return (
      <div className={classes.root}>
        <Grid container>
          <Grid item xs={12}>
            <Paper square spacing={40}>
              <Tabs
                value={this.state.value}
                indicatorColor="none"
                textColor="primary"
                onChange={this.handleChange}
                variant="fullWidth"
              >
                <Tab label="SACOLA" />
                <Tab label="PAGAMENTO" />
                <Tab label="CONFIRMAÇÃO" />
              </Tabs>
            </Paper>
            {value === 0 && <Bag />}
            {value === 1 && <Payment />}
            {value === 2 && <Confirmation />}
          </Grid>
          {/* <Grid item xs={12}>
            <Button
              fullWidth={true}
              variant="contained"
              size="large"
              color="primary"
              // className={classes.margin}
            >
              Large
            </Button>
          </Grid> */}
          {/* <Grid item xs={6}>
            <Paper className={classes.paper}>xs=6</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>xs=6</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>xs=3</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>xs=3</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>xs=3</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>xs=3</Paper>
          </Grid> */}
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(Home)

import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

// import Bag from '../../screens/bag'
// import Payment from '../../screens/payment'
// import Confirmation from '../../screens/confirmation'

import { getData } from '../../services'
import './index.css'

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

class TabsComponent extends Component {
  state = {
    value: 0
  }

  componentDidMount() {
    this._getData()
  }

  handleChange = (event, value) => {
    this.setState({ value })
  }

  async _getData() {
    const result = await getData()
    console.log('result', result)
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
                value={value}
                //indicatorColor="primary"
                textColor="primary"
                onChange={this.handleChange}
                variant="fullWidth"
              >
                <Tab value={0} label="SACOLA" component={Link} to="/bag" /> />
                <Tab value={2} label="PAGAMENTO" />
                <Tab value={3} label="CONFIRMAÇÃO" />
              </Tabs>
            </Paper>
            {/* {value === 0 && <Bag />}
            {value === 1 && <Payment />}
            {value === 2 && <Confirmation />} */}
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(TabsComponent)

import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

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
  grow: {
    flexGrow: 1,
    textAlign: 'center',
    color: '#CCC',
    fontFamily: 'Helvetica Neue',
    fontSize: 13,
    fontWeight: 700
  }
})

class Header extends Component {
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
      <div>
        <Grid container>
          <Grid item xs={12}>
            <Paper component="div" square spacing={12}>
              <Toolbar>
                <Typography
                  className={this.props.classes.bag ? this.props.classes.bag : classes.grow}
                >
                  SACOLA
                </Typography>
                <Typography
                  className={this.props.classes.payment ? this.props.classes.payment : classes.grow}
                >
                  PAGAMENTO
                </Typography>
                <Typography
                  className={
                    this.props.classes.confirmation ? this.props.classes.confirmation : classes.grow
                  }
                >
                  CONFIRMAÇÃO
                </Typography>
              </Toolbar>
            </Paper>
          </Grid>
        </Grid>
      </div>
    )
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Header)

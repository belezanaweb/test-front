import React, { Component } from 'react'
import Header from '../../components/Header'
import { withStyles } from '@material-ui/core/styles'

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
  render() {
    const { classes } = this.props
    return (
      <div>
        <Header classes={classes} />
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
          CONFIRMAÇÃO
        </p>
      </div>
    )
  }
}

export default withStyles(styles)(Confirmation)

import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import { withRouter } from 'react-router-dom'

class ButtonComponent extends Component {
  render() {
    return (
      <Button
        fullWidth={true}
        variant="contained"
        size="large"
        color="primary"
        onClick={() => this.props.history.push(this.props.to)}
        // className="MuiButton-contained-241"
        style={{
          color: '#FFF',
          fontFamily: 'Helvetica Neue',
          fontSize: 20,
          fontWeight: 700,
          boxShadow: `inset 0 -3px 0 0 #D45A00, 0 2px 4px 0 rgba(0,0,0,0.25)`
        }}
      >
        {this.props.title}
      </Button>
    )
  }
}

export default withRouter(ButtonComponent)

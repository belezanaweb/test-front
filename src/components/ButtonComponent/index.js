import React, { Component } from 'react'
import Button from '@material-ui/core/Button'

class ButtonComponent extends Component {
  render() {
    return (
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
        {this.props.title}
      </Button>
    )
  }
}

export default ButtonComponent

import React, { Component } from 'react';
import {Link} from 'react-router-dom';

var buttonStyle = {
  margin: '10px 10px 10px 0'
};

class Button extends Component {
  render() {
    return (
        <Link to={this.props.handleClick}>
          <button
          className='btn btn-default'
          style={buttonStyle}
          >{this.props.label}</button>
        </Link>
    );
  }
};

export default Button;
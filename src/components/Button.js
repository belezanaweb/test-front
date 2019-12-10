import React, { Component } from 'react';
import { Link } from 'react-router-dom';

var buttonStyle = {
  margin: '20px 0',
  padding: '20px 0',
  maxWidth: '300px',
  width: '90%',
};

class Button extends Component {
  render() {
    // let disabled = 'disabled';
    return (
      <Link to={this.props.handleClick}>
        <button
          className='btn btn-default'
          style={buttonStyle} 
          disabled={this.props.disabled}
        >{this.props.label}</button>
      </Link>
    );
  }
};

export default Button;
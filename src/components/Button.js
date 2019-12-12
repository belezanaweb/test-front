import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const styles = {
  container: {
    width: '100%',
    margin: '0 auto',
    textAlign: 'center'
  },
  button: {
    margin: '0 auto 20px auto',
    width: '100%',
    fontSize: '1.1rem',
    maxWidth: '300px'
  }
};

class Button extends Component {
  render() {
    // let disabled = 'disabled';
    return (
      <Link to={this.props.handleClick}>
        <div style={styles.container} >
          <button
            className='btn'
            style={styles.button}
            disabled={this.props.disabled}
          >{this.props.label}</button>
        </div>
      </Link>
    );
  }
};

export default Button;
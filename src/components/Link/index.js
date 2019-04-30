import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import { ButtonLink } from './styles';

class Link extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.actionLink();
  }

  render() {
    return (
      <ButtonLink onClick={this.handleClick}>
        {this.props.text}
      </ButtonLink>
    );
  }
}

Link.propTypes = {
  text: PropTypes.string.isRequired,
  actionLink: PropTypes.func.isRequired
};

export default Link;

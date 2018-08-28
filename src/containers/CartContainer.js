import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import { saveData } from '../actions';

import Box from '../components/Box';
import Summary from '../components/Summary';

class CartContainer extends React.Component {

  componentDidMount() {
    fetch('https://www.mocky.io/v2/5b15c4923100004a006f3c07')
      .then(res => res.json())
      .then(
        (result) => {
          this.props.saveData(result);
        }
      )
  }

  render() {
    return (
      <Fragment>
        <Box title="produtos">
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </Box>
        <Summary />
      </Fragment>
    );
  }
};



export default connect(
  null,
  {
    saveData
  }
)(CartContainer);

import React from 'react';
import Box from '../components/Box';

class CartContainer extends React.Component {

  componentDidMount() {
    fetch('https://www.mocky.io/v2/5b15c4923100004a006f3c07')
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
        }
      )
  }

  render() {
    return (
      <Box title="produtos">
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </Box>
    );
  }
};

export default CartContainer;

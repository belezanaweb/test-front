/** @jsx jsx */
import { Component } from 'react';
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';

const Test = styled('div')`
  color: blue;
  height: 10px;
  width: 10px;
`;

class App extends Component {
  render() {
    return (
      <div>
        <Test>
          name
        </Test>
      </div>
    );
  }
}

export default App;

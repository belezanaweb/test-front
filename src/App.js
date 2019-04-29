import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ThemeProvider } from 'styled-components';
import axios from 'axios';

import Routes from './routes';
import { updateBag } from './store/actions';

import { Content } from './styles';
import { theme } from './theme';

const API_BAG = 'http://www.mocky.io/v2/5b15c4923100004a006f3c07';

class App extends Component {
  componentDidMount() {
    axios.get(API_BAG).then(res => {
      const products = res.data.items || [];
      this.props.updateBag(products);
    });
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Content>
          <Routes />
        </Content>
      </ThemeProvider>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateBag }, dispatch);
}

export default connect(null, mapDispatchToProps)(App);

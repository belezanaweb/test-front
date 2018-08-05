import React, { Component } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

class HeaderMenu extends Component {

  state = { tabsValue: 0 }

  handleChange = (event, value) => {
    this.setState({ tabsValue: value });
  };

  render() {
    return(
      <Tabs
        value={this.state.tabsValue}
        onChange={this.handleChange}
        style={{ backgroundColor:"white"}}
        indicatorColor="primary"
        textColor="primary"
        fullWidth
      >
        <Tab label="Sacola" />
        <Tab label="Pagamento" />
        <Tab label="Confirmação" />
      </Tabs>
    );
  }
}

export default HeaderMenu;

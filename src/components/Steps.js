import React from 'react';
import { withRouter } from "react-router";

import { Tabs, Tab } from './styled';

function Steps(props) {

  const path = props.location.pathname.replace("/","");
  const tabs = [
    { id: "cart", text: "Sacola" },
    { id: "payment", text: "Pagamento" },
    { id: "success", text: "Confirmação" }
  ]

  return <Tabs>{ tabs.map(tab => <Tab key={tab.id} active={ path === tab.id ? true : false }>{tab.text}</Tab>) }</Tabs>
}

export default withRouter(Steps);

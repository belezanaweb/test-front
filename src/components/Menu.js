import React from 'react';
import { withRouter } from "react-router";

import { TabsCSS } from '../styles';

function Menu(props) {

  const { Container, Tabs, Tab } = TabsCSS;
  const path = props.location.pathname.replace("/","");
  const tabs = [
    { id: "cart", text: "Sacola" },
    { id: "payment", text: "Pagamento" },
    { id: "success", text: "Confirmação" }
  ]

  return(
    <Container>
      <Tabs>
        {
          tabs.map(
            tab =>
              <Tab
                key={tab.id}
                active={ path === tab.id ? true : false }
              >
                {tab.text}
              </Tab>
          )
        }
      </Tabs>
    </Container>
  )
}

export default withRouter(Menu);

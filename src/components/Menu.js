import React from 'react';
import { withRouter } from "react-router";

import { Container, Tabs, Tab } from '../styles/Tabs';

function Menu(props) {

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

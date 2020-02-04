import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "./pages/main";
import Pagamento from "./pages/pagamento";
import Confirmacao from "./pages/confirmacao";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/pagamento" component={Pagamento} />
        <Route path="/confirmacao" component={Confirmacao} />
      </Switch>
    </BrowserRouter>
  );
}

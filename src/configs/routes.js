//Dependencies
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

//Containers
import App from "../App";

export default () => (
  <BrowserRouter>
    <Route path="/" component={App} />
    {/*not found Route*/}
    {/*<Route exact path="/" component={authMiddleware(AppContainer)} />*/}
  </BrowserRouter>
);

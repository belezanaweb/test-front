import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, browserHistory } from 'react-router-dom';
import App from "./components/App";

const Root = ({ store }) => (
    <Provider store={store}>
        <BrowserRouter history={browserHistory}>
            <App />
        </BrowserRouter>
    </Provider>
);

export default Root;
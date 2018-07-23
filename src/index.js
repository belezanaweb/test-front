import React from "react";
import { render } from "react-dom";
import Root from './root';
import configureStore from './services/configureStore';
import './styles/index.scss';

// colocamos toda a lógica de criar um store em outro arquivo
// subscribe to changes, localStorage, reducers
// aí aqui é só chamar
const store = configureStore()

render(<Root store={store} />, document.getElementById("app"))
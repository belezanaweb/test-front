import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';
import {ThemeProvider} from '@material-ui/styles';
import { Provider } from 'react-redux';
import store from './services/store';
import theme from './theme';

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </ThemeProvider>
    , document.getElementById('root')
);

serviceWorker.unregister();

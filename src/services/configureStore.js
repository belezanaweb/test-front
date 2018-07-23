import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import reducers from "../reducers";
import { loadState, saveState } from './localStorage';

const configureStore = () => {
    // 2° param do createStore é o data que pode substituir o current state 
    const persisted = loadState()
    const store = createStore(reducers, persisted, applyMiddleware(thunk))
    // console.log('store', store)
    // salva o state no localStorage sempre que o state muda
    // poderia usar throttle do lodash para disparar o saveState a apenas um periodo
    store.subscribe(() => {
        // passa o current state para ser salvo no localStorage
        saveState(store.getState())
    })

    return store
}

export default configureStore;
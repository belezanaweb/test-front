import { createStore } from "redux";

import rootreducer from "./modules/rootReducer";

const store = createStore(rootreducer);

export default store;

import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { loadState } from "../utils/localStorage";

import state from "./reducers";

const persistedState = loadState();

const createStoreWithMiddleware = composeWithDevTools(
  applyMiddleware(reduxThunk)
)(createStore);

const store = createStoreWithMiddleware(state, persistedState);

export default store;

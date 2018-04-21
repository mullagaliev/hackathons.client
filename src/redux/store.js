import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import state from './reducers';


const createStoreWithMiddleware = composeWithDevTools(applyMiddleware(reduxThunk))(createStore);

const store = createStoreWithMiddleware(state);

export default store;

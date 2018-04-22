import { combineReducers } from 'redux';

import profile from './reducers/profileReducer';
import sort from './reducers/sortingReducer';
import { NAV_VISIBLE, NAV_INVISIBLE } from './constants';


const initialState = {
  isNavVisible: false
}

const nav = (state=initialState, action) => {

  switch(action.type) {
    case NAV_VISIBLE:
      return {...state, isNavVisible: true};
    case NAV_INVISIBLE:
      return {...state, isNavVisible: false};
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  nav,
  profile,
  sort
});

export default rootReducer;

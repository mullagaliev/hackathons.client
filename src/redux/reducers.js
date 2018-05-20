import { combineReducers } from "redux";
import { combineForms, createForms } from "react-redux-form";

import profile from "./reducers/profileReducer";
import sort from "./reducers/sortingReducer";
import login from "./reducers/loginReducer";
import form from "./reducers/formReducer";
import auth from "./reducers/authReducer";
import sign from "./reducers/signupReducer";
import users from "./reducers/leaderboardReducer";

import { NAV_VISIBLE, NAV_INVISIBLE } from "./constants";

const initialState = {
  isNavVisible: false
};

const nav = (state = initialState, action) => {
  switch (action.type) {
    case NAV_VISIBLE:
      return { ...state, isNavVisible: true };
    case NAV_INVISIBLE:
      return { ...state, isNavVisible: false };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  users,
  nav,
  profile,
  sort,
  login,
  form,
  auth,
  sign,
  ...createForms({
    signup: {
      username: "",
      pwd: "",
      email: ""
    }
  })
});

export default rootReducer;

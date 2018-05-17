import {
  SET_EMAIL,
  SET_PASS,
  SET_FIRST_NAME,
  SET_LAST_NAME
} from "../constants";

const initialState = {
  email: "",
  pass: "",
  firstName: "",
  lastName: ""
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EMAIL:
      return { ...state, email: action.email };
    case SET_PASS:
      return { ...state, pass: action.pass };
    case SET_FIRST_NAME:
      return { ...state, firstName: action.firstName };
    case SET_LAST_NAME:
      return { ...state, lastName: action.lastName };
    default:
      return state;
  }
};

export default formReducer;

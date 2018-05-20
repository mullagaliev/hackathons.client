import { SIGNUP_REQUEST, SIGNUP_ERROR, SIGNUP_SUCCESS } from "../constants";

const initialState = {
  requesting: false,
  errors: false,
  success: false,
  data: {}
};

const signReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_REQUEST:
      return { ...state, requesting: true, success: false, errors: false };
    case SIGNUP_ERROR:
      return {
        ...state,
        requesting: false,
        success: false,
        errors: action.errors
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        requesting: false,
        success: true,
        errors: false,
        data: action.data
      };
    default:
      return state;
  }
};

export default signReducer;

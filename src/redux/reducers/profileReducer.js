import {
  GET_PROFILE_REQUEST,
  GET_PROFILE_ERROR,
  GET_PROFILE_SUCCESS
} from "../constants";

const initialState = {
  requesting: false,
  errors: false,
  success: false,
  data: {}
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE_REQUEST:
      return { ...state, requesting: true, success: false, errors: false };
    case GET_PROFILE_ERROR:
      return {
        ...state,
        requesting: false,
        success: false,
        errors: action.errors
      };
    case GET_PROFILE_SUCCESS:
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

export default profileReducer;

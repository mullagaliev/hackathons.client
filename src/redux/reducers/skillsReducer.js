import {
  GET_SKILLS_REQUEST,
  GET_SKILLS_ERROR,
  GET_SKILLS_SUCCESS
} from "../constants";

const initialState = {
  requesting: false,
  errors: false,
  success: false,
  data: []
};

const skillsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SKILLS_REQUEST:
      return { ...state, requesting: true, success: false, errors: false };
    case GET_SKILLS_ERROR:
      return {
        ...state,
        requesting: false,
        success: false,
        errors: action.errors
      };
    case GET_SKILLS_SUCCESS:
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

export default skillsReducer;

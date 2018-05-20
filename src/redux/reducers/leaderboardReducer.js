import {
  LEADERBOARD_REQUEST,
  LEADERBOARD_ERROR,
  LEADERBOARD_SUCCESS
} from "../constants";

const initialState = {
  requesting: false,
  errors: false,
  success: false,
  data: []
};

const leaderboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case LEADERBOARD_REQUEST:
      return { ...state, requesting: true, success: false, errors: false };
    case LEADERBOARD_ERROR:
      return {
        ...state,
        requesting: false,
        success: false,
        errors: action.errors
      };
    case LEADERBOARD_SUCCESS:
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

export default leaderboardReducer;

import { SORT_BY_WINS, SORT_BY_XP } from "../constants";

const initialState = {
  sortBy: SORT_BY_XP
};

const sortingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SORT_BY_WINS:
      return { ...state, sortBy: SORT_BY_WINS };
    case SORT_BY_XP:
      return { ...state, sortBy: SORT_BY_XP };
    default:
      return state;
  }
};

export default sortingReducer;

import axios from "axios";

import { setAuth } from "./authActions";

import {
  BASE_URL,
  LEADERBOARD_REQUEST,
  LEADERBOARD_SUCCESS,
  LEADERBOARD_ERROR
} from "../constants";

export const leaderboardRequest = () => ({
  type: LEADERBOARD_REQUEST
});

export const leaderboardErrors = errors => ({
  type: LEADERBOARD_ERROR,
  errors
});

export const leaderboardSuccess = data => ({
  type: LEADERBOARD_SUCCESS,
  data
});

export const getLeaderboard = () => {
  axios.defaults.headers.common["Authorization"] = localStorage.getItem(
    "token"
  );
  const URL = `${BASE_URL}/hackers`;

  return async dispatch => {
    try {
      // console.log(resJson);
      dispatch(leaderboardRequest);
      const res = await axios.get(URL, {});
      dispatch(leaderboardSuccess(res.data));
    } catch (errors) {
      console.log(errors);
      dispatch(leaderboardErrors(errors));
    }
  };
};

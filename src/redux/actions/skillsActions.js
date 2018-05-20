import axios from "axios";

import {
  GET_SKILLS_REQUEST,
  GET_SKILLS_ERROR,
  GET_SKILLS_SUCCESS,
  BASE_URL
} from "../constants";

export const getSkillsRequest = () => ({
  type: GET_SKILLS_REQUEST
});

export const getSkillsErrors = errors => ({
  type: GET_SKILLS_ERROR,
  errors
});

export const getSkillsSuccess = data => ({
  type: GET_SKILLS_SUCCESS,
  data
});

export const getSkills = () => {
  axios.defaults.headers.common["Authorization"] = localStorage.getItem(
    "token"
  );

  const URL = `${BASE_URL}/skills/`;
  return async dispatch => {
    try {
      dispatch(getSkillsRequest());
      const res = await axios.get(URL);
      dispatch(getSkillsSuccess(res.data));
    } catch (errors) {
      dispatch(getSkillsErrors(errors));
    }
  };
};

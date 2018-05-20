import axios from "axios";

import {
  GET_PROFILE_REQUEST,
  GET_PROFILE_ERROR,
  GET_PROFILE_SUCCESS,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_ERROR,
  UPDATE_PROFILE_SUCCESS,
  BASE_URL
} from "../constants";

export const getProfileRequest = () => ({
  type: GET_PROFILE_REQUEST
});

export const getProfileErrors = errors => ({
  type: GET_PROFILE_ERROR,
  errors
});

export const getProfileSuccess = data => ({
  type: GET_PROFILE_SUCCESS,
  data
});

export const fetchProfile = id => {
  axios.defaults.headers.common["Authorization"] = localStorage.getItem(
    "token"
  );

  const URL = `${BASE_URL}/hackers/${id}`;
  return async dispatch => {
    try {
      dispatch(getProfileRequest);
      const res = await axios.get(URL);
      dispatch(getProfileSuccess(res.data));
    } catch (errors) {
      dispatch(getProfileErrors(errors));
    }
  };
};

export const updateProfileRequest = () => ({
  type: UPDATE_PROFILE_REQUEST
});

export const updateProfileErrors = errors => ({
  type: UPDATE_PROFILE_ERROR,
  errors
});

export const updateProfileSuccess = data => ({
  type: UPDATE_PROFILE_SUCCESS,
  data
});

export const updateProfile = (id = "me", settings) => {
  axios.defaults.headers.common["Authorization"] = localStorage.getItem(
    "token"
  );
  // TODO add status
  const URL = `${BASE_URL}/hackers/${id}`;
  return async dispatch => {
    try {
      dispatch(updateProfileRequest());
      const res = await axios.put(URL, settings);
      dispatch(updateProfileSuccess(res.data));
    } catch (errors) {
      dispatch(updateProfileErrors(errors));
    }
  };
};

import axios from "axios";

import { setAuth } from "./authActions";

import {
  BASE_URL,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR
} from "../constants";

export const signupRequest = () => ({
  type: SIGNUP_REQUEST
});

export const signupErrors = errors => ({
  type: SIGNUP_ERROR,
  errors
});

export const signupSuccess = data => ({
  type: SIGNUP_SUCCESS,
  data
});

export const signup = user => {
  const URL = `${BASE_URL}/hackers`;

  return async dispatch => {
    try {
      // console.log(resJson);
      dispatch(signupRequest);
      const res = await axios.post(URL, { ...user });
      dispatch(signupSuccess(res.data));
      dispatch(setAuth(res.data.token));
    } catch (errors) {
      console.log(errors);
      dispatch(signupErrors(errors));
    }
  };
};

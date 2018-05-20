import axios from "axios";

import { setAuth } from "./authActions";

import {
  BASE_URL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR
} from "../constants";

export const loginRequest = () => ({
  type: LOGIN_REQUEST
});

export const loginErrors = errors => ({
  type: LOGIN_ERROR,
  errors
});

export const loginSuccess = data => ({
  type: LOGIN_SUCCESS,
  data
});

export const loginByEmail = (email, pass) => {
  const URL = `${BASE_URL}/login`;

  return async dispatch => {
    try {
      // console.log(resJson);
      dispatch(loginRequest);
      const res = await axios.post(URL, { email, pwd: pass });
      dispatch(loginSuccess(res.data));
      dispatch(setAuth(res.data.token));
    } catch (errors) {
      console.log(errors);
      dispatch(loginErrors(errors));
    }
  };
};

export const loginByTelegram = response => {
  const URL = `${BASE_URL}/login/telegram`;
  // const resJson = JSON.stringify(response);
  return async dispatch => {
    try {
      // console.log(resJson);
      dispatch(loginRequest);
      const res = await axios.post(URL, response);
      dispatch(loginSuccess(res.data));
      dispatch(setAuth(res.data.token));
    } catch (errors) {
      console.log(errors);
      dispatch(loginErrors(errors));
    }
  };
};

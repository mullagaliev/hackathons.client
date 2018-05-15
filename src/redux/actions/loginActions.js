import axios from "axios";

import {
  BASE_URL,
  LOGIN_TELEGRAM_REQUEST,
  LOGIN_TELEGRAM_SUCCESS,
  LOGIN_TELEGRAM_ERROR
} from "../constants";

export const loginTelegramRequest = () => ({
  type: LOGIN_TELEGRAM_REQUEST
});

export const loginTelegramErrors = errors => ({
  type: LOGIN_TELEGRAM_ERROR,
  errors
});

export const loginTelegramSuccess = data => ({
  type: LOGIN_TELEGRAM_SUCCESS,
  data
});

export const loginTelegram = response => {
  const URL = `${BASE_URL}/login/telegram`;
  const resJson = JSON.stringify(response);
  return async dispatch => {
    try {
      dispatch(loginTelegramRequest);
      let axiosConfig = {
        headers: {
          "Content-Type": "application/json;charset=UTF-8"
        }
      };
      const res = await axios.post(URL, resJson, axiosConfig);
      dispatch(loginTelegramSuccess(res.data));
    } catch (errors) {
      dispatch(loginTelegramErrors(errors));
    }
  };
};

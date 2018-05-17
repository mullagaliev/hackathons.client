import {
  SET_EMAIL,
  SET_PASS,
  SET_FIRST_NAME,
  SET_LAST_NAME
} from "../constants";

export const setEmail = email => ({
  type: SET_EMAIL,
  email
});

export const setPass = pass => ({
  type: SET_PASS,
  pass
});

export const setFirstName = firstName => ({
  type: SET_FIRST_NAME,
  firstName
});

export const setLastName = lastName => ({
  type: SET_LAST_NAME,
  lastName
});

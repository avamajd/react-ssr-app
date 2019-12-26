import {
  LOGIN, LOGIN_COMPLETE, LOGIN_ERROR,
  SET_USERNAME, SET_USERNAME_ERROR,
  SET_TOKEN, SET_TOKEN_COMPLETE, SET_TOKEN_ERROR,
  LOGOUT,
} from "../constants";

import thunk from "redux-thunk"

const baseUrl = "https://api.tavanito.ir/v2";


//******************************************

const loginReq = () => ({
  type: LOGIN
})

const setUsername = (mobile, message) => ({
  type: SET_USERNAME,
  username: mobile,
  message
})

const setUsernameError = (error) => ({
  type: SET_USERNAME_ERROR,
  error
})

export const login = (mobile) => {

  let uri = `${baseUrl}/login/otp`;

  return dispatch => {
    dispatch(loginReq())

    fetch(uri, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        mobile
      })
    })
      .then(res => {
        res.json().then(res => {
          if (res.message) {
            dispatch(setUsername(mobile, res.message))
          }
          else if (res.errors && res.errors.mobile.length !== 0)
            dispatch(setUsernameError(res.errors.mobile[0]))
        })
      })
      .catch(err => {
        dispatch(setUsernameError(err));
      });
  };
};

//*******************************************

const setTokenReq = () => ({
  type: SET_TOKEN
})

const setTokenComplete = (token) => ({
  type: SET_TOKEN_COMPLETE,
  token
})

const loginComplete = () => ({
  type: LOGIN_COMPLETE
})

const setTokenError = (error) => ({
  type: SET_TOKEN_ERROR,
  error
})

const loginError = () => ({
  type: LOGIN_ERROR
})

export const setToken = (otp) => {
  return (dispatch, getState) => {

    const mobile = getState().auth.username

    let uri = `${baseUrl}/login?mobile=${mobile}&code=${otp}`;

    dispatch(setTokenReq())

    fetch(uri, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        mobile
      })
    })
      .then(res => res.json())
      .then(res => {
        if (res.access_token && res.access_token !== "") {
          dispatch(setTokenComplete(res.access_token))
          dispatch(loginComplete())
        }
        else if (res.errors && res.errors.mobile.length !== 0) {
          dispatch(setTokenError(res.errors.mobile[0]))
          dispatch(loginError())
        }

      })
      .catch(err => {
        dispatch(setTokenError(err));
      });
  };
};

//******************************************

export const logout = () => {
  return {
    type: LOGOUT
  };
};


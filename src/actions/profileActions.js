import {
  GET_USER_INFO, GET_USER_INFO_COMPLETE, GET_USER_INFO_ERROR,
  EDIT_USER_INFO, EDIT_USER_INFO_COMPLETE, EDIT_USER_INFO_ERROR
} from "../constants";

const baseUrl = "https://api.tavanito.ir/v2";

//******************************************

const getUserInfoReq = () => ({
  type: GET_USER_INFO
})

const getUserInfoComplete = (data) => ({
  type: GET_USER_INFO_COMPLETE,
  data
})

const getUserInfoError = (error) => ({
  type: GET_USER_INFO_ERROR,
  error
})

export const getUserInfo = (token) => {

  let uri = `${baseUrl}/user`;

  return dispatch => {

    dispatch(getUserInfoReq());

    fetch(uri, {
      method: "GET",

      headers: {
        Authorization: token ? `Bearer ${token}` : "",
        "Content-Type": "application/json"
      }
    }).then(res => res.json())

      .then(res => {
        dispatch(getUserInfoComplete(res.data))
      })
      .catch(err => {
        dispatch(getUserInfoError(err))
      });
  };
};

//******************************************

const editUserInfoReq = () => ({
  type: EDIT_USER_INFO
})

const editUserInfoComplete = (data) => ({
  type: EDIT_USER_INFO_COMPLETE,
  data
})

const editUserInfoError = (error) => ({
  type: EDIT_USER_INFO_ERROR,
  error
})

export const editUserInfo = (token, data) => {

  let uri = `${baseUrl}/user`;

  return dispatch => {

    dispatch(editUserInfoReq());

    fetch(uri, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
        "Content-Type": "application/json"
      }
    }).then(res => res.json())

      .then(res => {
        dispatch(editUserInfoComplete(res.data))
      })
      .catch(err => {
        dispatch(editUserInfoError(err));
      });
  };
};